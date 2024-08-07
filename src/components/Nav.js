import React from 'react'
import "../css/Nav.css"


const Nav = () => {
  return (
    <div className='nav'>
        <img 
        className='nav_logo'
        src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940'
        alt='Netflix Logo'/>

        <img 
        className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Avatar'
        />
    </div>
  )
}

export default Nav