import React, { useContext } from 'react'
import { CloseButton } from "../ui/close-button";
import { ShowDropdown } from '../../App';

function Dropdown() {
  const {setShowDropDown} = useContext(ShowDropdown)

  return (
    <div className='absolute flex justify-around gap-10 p-5 dropdown'>
      <div>
        <p className="font-bold text-lg">New: Get Inspired</p>
        <ul className="flex flex-col gap-5 mt-4">
          <li className='cursor-pointer'>Top 100 Deals</li>
          <li className='cursor-pointer'>New Limited-Time Sales</li>
          <li className='cursor-pointer'>New Markdowns Up to 75%</li>
          <li className='cursor-pointer'>Our Top Pick</li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-lg">All New Arrivals</p>
        <ul className="flex flex-col gap-5 mt-3">
          <li className='cursor-pointer'>Women</li>
          <li className='cursor-pointer'>Men</li>
          <li className='cursor-pointer'>Kids</li>
          <li className='cursor-pointer'>Shoes</li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-lg">New from Our Top Brands</p>
        <ul className="flex flex-col gap-5 mt-3">
          <li className='cursor-pointer'>AG</li>
          <li className='cursor-pointer'>Cole Haan</li>
          <li className='cursor-pointer'>Gucci Sunglasses</li>
          <li className='cursor-pointer'>Joe's</li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-lg">New This Season</p>
        <ul className="flex flex-col gap-5 mt-3">
          <li className='cursor-pointer'>Cashmere Shop</li>
          <li className='cursor-pointer'>Cold Weather Accessories</li>
          <li className='cursor-pointer'>Cozy Shop</li>
          <li className='cursor-pointer'>Embellished Styles</li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-lg">New This Week</p>
        <ul className="flex flex-col gap-5 mt-3">
          <li className='cursor-pointer '>Kate Spade New York Up to 65% Off</li>
          <li className='cursor-pointer '>Outwear & Boots for All Up to 60% Off</li>
          <li className='cursor-pointer '>Hunter Up to 60% Off</li>
          <li className='cursor-pointer '>New Bony Levy Fine Jewelry Up to 50% Off</li>
        </ul>
      </div>

      <CloseButton onClick={() => setShowDropDown(false)} />
    </div>
  );
}

export default Dropdown
