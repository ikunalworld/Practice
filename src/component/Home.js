import React from 'react';

function Home(props) {
  return( 
  <div>
    <div className='home'> HOME</div>
    <div className='home-2'>
      <img src={props.img}  className='img-home'></img> </div>
      <div className='home-2'>
      <img src={props.img}  className='img-home'></img>
     
    </div>
    <div className='home-2'>
      <img src={props.img}  className='img-home'></img>
     
    </div>
    <div className='home-3'>
    <img src={props.img2} className='img-home-2'></img></div>
  
  
  </div>
 
  )
}

export default Home;
