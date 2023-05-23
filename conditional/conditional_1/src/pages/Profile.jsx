import React from 'react'

function Profile() {
  return (
    <div>
     <h1>Sono la pagina dei profili</h1> 
     <nav>
       <Link to='me'>Il mio profilo</Link>
       <Link to='/profile/2'>Il mio profilo 2</Link>
     </nav>
    </div>
    
  )
}

export default Profile