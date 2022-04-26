import React from 'react';

export default function RestaurantMenu({ menu }) {
  const menuStatus = {
    hamburger: menu === 'planning',
    cheeseburger: menu === 'micro',
    veggie: menu === 'brewpub',
  };

  return (
    <div className='menu'>
      <span>{menuStatus.hamburger ? '✅ ' : '❌'} Hamburger</span>
      <span>{menuStatus.cheeseburger ? '✅ ' : '❌'} Cheeseburger</span>
      <span>{menuStatus.veggie ? '✅ ' : '❌'} Veggieburger</span>
    </div>
  );
}
