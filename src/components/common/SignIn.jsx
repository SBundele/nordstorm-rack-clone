import React, {useEffect, useState, useContext} from 'react'
import { Heading } from '@chakra-ui/react';
import { CloseButton } from '../ui/close-button';
import { ShowDropdown } from '../../App';

function SignIn() {
  const {isModalOpen, setIsModalOpen} = useContext(ShowDropdown)

  useEffect(() => { 
    if (isModalOpen) { 
        document.querySelector("#main-content").classList.add('modal-blur'); 
    } else { 
        document.querySelector("#main-content").classList.remove('modal-blur'); 
    } 
    return () =>
      document.querySelector("#main-content").classList.remove("modal-blur"); // Clean up on component unmount 
   }, [isModalOpen]); 
   
   const closeModal = () => setIsModalOpen(false)

  return (
    <div className='py-10 px-14 sign-in'>
      <CloseButton onClick={() => closeModal()} className="absolute right-4 top-1" />
      <Heading as="h2" className='text-2xl font-bold'>Sign In</Heading>
      <p className='my-2'>New to Nordstorm Rack? <span className='text-blue-500'>Create an account</span></p>
      <div>
        <p className='my-2 font-semibold'>NORDSTORM</p>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="mail">Email</label>
            <input
              className="border border-black px-5 py-2"
              type="email"
              name="email"
              id="mail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Password</label>
            <input
              className="border border-black px-5 py-2"
              type="password"
              name="password"
              id="pass"
            />
          </div>
          <p className='text-blue-500'>Forgot password ?</p>
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className='mx-2'>
              Keep me signed in. <span className="text-blue-500">Details</span>
            </label>
          </div>
          <p>
            By signing in to your account, you agree to our <span className="text-blue-500">Privacy Policy</span> and <span className="text-blue-500">Terms & Conditions</span>
          </p>
          <div className='text-center'>
            <button className='bg-blue-600 text-white px-5 py-2 w-40'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn
