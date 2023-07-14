import React from 'react'
import Nav from './nav';
import Post from './post';
import Sendemail from './sendemail';
import "./Home.css"
import Gettheuserdata from './gettheuserdata';

function Home() {
  return (
    <div className='Home'>
<Nav/>
<div className='Post'>
<Post/>
</div>
<Sendemail/>
<Gettheuserdata/>

    </div>
    
  )
}

export default Home;
