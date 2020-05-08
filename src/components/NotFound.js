import React from 'react';
import { Link } from 'react-router-dom';

import Pizza from '../assets/images/pizza-svgrepo.svg';

const NotFound = () => {
  return (
    <div className='not-found-component'>
      <div>
        <h1>
          4<img src={Pizza} alt='Pizza' />4
        </h1>
        <p>
          Pheeew, we messed up there... we almost exposed our secret sauce{' '}
          <span role='img' aria-label='Winking Face Emoji'>
            😉
          </span>
        </p>
        <Link to='/menu'>Back to the Menu</Link>
      </div>
    </div>
  );
};

export default NotFound;
