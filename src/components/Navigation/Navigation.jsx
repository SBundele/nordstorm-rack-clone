import React, { useContext } from 'react'
import giftLogo from '../../assets/images/gift-logo.svg'
import { List, Flex, Button, Image } from "@chakra-ui/react";
import "./Navigation.css"
import { ShowDropdown } from '../../App';

function Navigation() {
  const {showDropDown, setShowDropDown} = useContext(ShowDropdown)

  let handleClick = () => {
    if (showDropDown){
      setShowDropDown(false)
    } else {
      setShowDropDown(true)
    }
  }

  return (
    <nav className="navbar">
      <List.Root as="ul" listStyle="none">
        <Flex justifyContent="space-evenly" alignItems="center">
          <List.Item>
            <Button variant="ghost" px="0" py="0">
              <Image src={giftLogo} />
              Gift Guide
            </Button>
          </List.Item>
          <List.Item className='cursor-pointer' color="blue" onClick={() => handleClick()}>New</List.Item>
          <List.Item className='cursor-pointer' onClick={() => handleClick()}>Women</List.Item>
          <List.Item className='cursor-pointer' onClick={() => handleClick()}>Men</List.Item>
          <List.Item className='cursor-pointer' onClick={() => handleClick()}>Kids</List.Item>
          <List.Item className='cursor-pointer' onClick={() => handleClick()}>Shoes</List.Item>
          <List.Item className='cursor-pointer' onClick={() => handleClick()}>
            Bags & Accessories
          </List.Item>
          <List.Item className='cursor-pointer' onClick={() => handleClick()}>Home</List.Item>
          <List.Item className='cursor-pointer' onClick={() => handleClick()}>Beauty</List.Item>
          <List.Item className='cursor-pointer' color="red" onClick={() => handleClick()}>
            Clearance
          </List.Item>
          <List.Item className='cursor-pointer' color="blue" onClick={() => handleClick()}>
            Flash Events
          </List.Item>
        </Flex>
      </List.Root>
    </nav>
  );
}

export default Navigation
