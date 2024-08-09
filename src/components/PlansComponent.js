import React, { useEffect, useState } from 'react'
import "../css/PlansComponent.css"
import db from '../firebase/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {loadStripe} from  '@stripe/stripe-js';

const PlanComponent = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection('customers')
    .doc(user.uid)
    .collection('subscriptions')
    .get()
    .then((snapshot) => {
      snapshot.forEach(async subscription => {
        setSubscription({
          role: subscription.data().role,
          current_period_end: subscription.data().current_period_end.seconds,
          current_period_start: subscription.data().current_period_start.seconds,
        })
      })
    })

  }, [user.uid])

  useEffect(() => {
    db.collection('products')
    .where('active', '==', true)
    .get()
    .then(snapshot => {
      const products = {};
      snapshot.forEach(async productDoc => {
        products[productDoc.id] = productDoc.data();
        const priceSnap = await productDoc.ref.collection('prices').get();
        priceSnap.docs.forEach(price => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data()
          }
        });
      });
      setProducts(products);
    }).catch(error => alert(`Issue in plan retrieval: ${error.message}`));
  }, [])

  const loadCheckout = async (priceId) => {
    const docRef = await db.collection('customers')
    .doc(user.uid)
    .collection('checkout_sessions')
    .add({
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })

    docRef.onSnapshot(async(snap) => {
      const { error, sessionId } = snap.data();

      if(error) {
        alert(`Hold on. Payment had an issue. Maybe try again in a few minutes. ${error.message}`)
      }

      if (sessionId){
        // init stripe
        const stripe = await loadStripe(
          'pk_test_51PlrfYRxveksOOzXCDSjJJ5HHInWQMnQ5oA3W8nwS8BIxL5Tiw8ACEEmvriXwRnUFVVRnNPksH4ToBOFto0FqpMY00Kz8PsGYz'
        );
        stripe.redirectToCheckout({
          sessionId
        });

      }

    })
  }

  return (
    <div className='plansComponent'>
      <h3>Plans (Current Plan: {subscription?.role}) </h3>
      {subscription && <p>Renewal Date:  {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
      { Object.entries(products).map(( [ productId, productData] ) => {
        // todo add code to check user sub is active 

        const isCurrentPackage = productData.name?.includes(subscription?.role);

        return (
          <div key={productId} className={`${isCurrentPackage && "plansComponent_plan_disabled"} plansComponent_plan`}>
            <div className="plansComponent_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
              {isCurrentPackage ? "Current Plan" : "Subscribe" }
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default PlanComponent