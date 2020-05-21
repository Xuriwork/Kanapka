import React from 'react';
import KanapkaLogo from '../../assets/icons/KanapkaIcon.svg';
import LoadingSVG from '../../assets/loading.svg';

const Loading = () => {
   return (
      <div className='loading-component'>
        <img src={KanapkaLogo} alt='Kanapka logo' />
        <img src={LoadingSVG} alt='loading' className='loading-image' />
      </div>
   );
};

export default Loading;
