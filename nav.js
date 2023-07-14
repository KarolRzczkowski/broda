import React from 'react';
import "./Nav.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';



function Nav() {


  return (
    <div className='Nav'>


      <div className='left__side'>
        <img src='https://oprojektowaniu.pl/wp-content/uploads/2017/02/official-linkedin-logo-tile.png' alt='LinkedIn' />
        <div className='searchinput' >
          <div className='searchicon'>
            <SearchIcon />
          </div>
          <input type='text' className='searchinput__text' placeholder='Search'/>
        </div>
      </div>
      <div className='right__side'>
     <div className='homeicon'>
      <div className='homeicon2'>
      <  HomeIcon/>
      </div>
      <u style={{height:"10px"}}><h3 className='Home'>Home</h3></u>
      
      </div>

      </div>
    </div>
  );
}

export default Nav;
