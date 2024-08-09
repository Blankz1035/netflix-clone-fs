import React, { useEffect, useState } from 'react'
import "../css/PlansComponent.css"
import db from '../firebase/firebase';

const PlanComponent = () => {
  const [products, setProducts] = useState([]);
  
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

  }

  return (
    <div className='plansComponent'>
      { Object.entries(products).map(( [ productId, productData] ) => {
        // todo add code to check user sub is active 

        return (
          <div className="plansComponent_plan">
            <div className="plansComponent_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default PlanComponent