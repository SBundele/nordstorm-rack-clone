import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";

import './Footer.css'

function Footer() {
  return (
    <footer className="mt-16 px-16 py-5 footer">
      <div className="flex justify-between footer-body">
        <div>
          <p className='font-bold text-lg'>Customer Service</p>
          <ul className='flex flex-col gap-2 mt-5'>
            <li className='cursor-pointer'>Order Status</li>
            <li className='cursor-pointer'>Guest Returns</li>
            <li className='cursor-pointer'>Shipping & Return Policy</li>
            <li className='cursor-pointer'>Gift Cards</li>
            <li className='cursor-pointer'>Product Recalls</li>
            <li className='cursor-pointer'>FAQ</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        </div>

        <div>
          <p className='font-bold text-lg'>About Us</p>
          <ul className='flex flex-col gap-2 mt-5'>
            <li className='cursor-pointer'>About Our Brand</li>
            <li className='cursor-pointer'>The Nordy Club</li>
            <li className='cursor-pointer'>Store Locator</li>
            <li className='cursor-pointer'>All Brands</li>
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>Get Email Updates</li>
            <li className='cursor-pointer'>Nordstorm Blog</li>
            <li className='cursor-pointer'>Nordy Podcast</li>
            <li className='cursor-pointer'>Store Openings</li>
          </ul>
        </div>

        <div>
          <p className='font-bold text-lg'>Nordstorm Rack & The Community</p>
          <ul className='flex flex-col gap-2 mt-5'>
            <li className='cursor-pointer'>Corporate Social Responsibility</li>
            <li className='cursor-pointer'>Diversity, Equity, Inclusion & Belonging</li>
            <li className='cursor-pointer'>Big Brothers Big Sisters</li>
            <li className='cursor-pointer'>Donate Clothes</li>
          </ul>
        </div>

        <div>
          <p className='font-bold text-lg'>Nordstorm Card</p>
          <ul className='flex flex-col gap-2 mt-5'>
            <li className='cursor-pointer'>Apply for a Nordstorm Card</li>
            <li className='cursor-pointer'>Pay My Bill</li>
            <li className='cursor-pointer'>Manage my Nordstorm Card</li>
          </ul>
        </div>

        <div>
          <p className='font-bold text-lg'>Nordstorm, Inc.</p>
          <ul className='flex flex-col gap-2 mt-5'>
            <li className='cursor-pointer'>Nordstorm</li>
            <li className='curson-pointer'>HauteLook</li>
            <li className='cursor-pointer'>Investor Relations</li>
            <li className='cursor-pointer'>Press Releases</li>
            <li className='cursor-pointer'>Nordstorm Media Network</li>
          </ul>
        </div>

        <div>
          <p className='font-medium text-lg'>Download Our Apps</p>
          <ul className='flex gap-3 mt-5'>
            <li className='cursor-pointer text-2xl'><FaFacebook/></li>
            <li className='cursor-pointer text-2xl'><FaSquareXTwitter /></li>
            <li className='cursor-pointer text-2xl'><IoLogoPinterest /></li>
            <li className='cursor-pointer text-2xl'><FaInstagram /></li>
          </ul>
        </div>
      </div>

      <div className='mt-4 footer-footer'>
        <ul className='flex gap-10'>
            <li className='cursor-pointer text-sm'>Privacy</li>
            <li className='cursor-pointer text-sm'>Your Privacy Rights</li>
            <li className='cursor-pointer text-sm'>Terms & Conditions</li>
            <li className='cursor-pointer text-sm'>California Supply Chain Act</li>
            <li className='cursor-pointer text-sm'>@2024 Nordstorm Rack</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
