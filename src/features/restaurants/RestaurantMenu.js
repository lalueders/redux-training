import React from 'react';

export const RestaurantMenu = ({ menu }) => {
  const availability = {
    hamburger: menu === 'planning',
    cheeseburger: menu === 'micro',
    veggie: menu === 'brewpub',
  };

  return (
    <div className='menu'>
      <span>{availability.hamburger ? '✅' : '❌'} hamburger</span>
      <span>{availability.cheeseburger ? '✅' : '❌'} cheeseburger</span>
      <span>{availability.veggie ? '✅' : '❌'} veggieburger</span>
    </div>
  );
};
