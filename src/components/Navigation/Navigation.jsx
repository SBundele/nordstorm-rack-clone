import React from 'react'
import giftLogo from '../../assets/images/gift-logo.svg'
import { List, Flex, Button, Image } from "@chakra-ui/react";
import "./Navigation.css"


function Navigation() {
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
          <List.Item color="blue">New</List.Item>
          <List.Item>Women</List.Item>
          <List.Item>Men</List.Item>
          <List.Item>Kids</List.Item>
          <List.Item>Shoes</List.Item>
          <List.Item>Bags & Accessories</List.Item>
          <List.Item>Home</List.Item>
          <List.Item>Beauty</List.Item>
          <List.Item color="red">Clearance</List.Item>
          <List.Item color="blue">Flash Events</List.Item>
        </Flex>
      </List.Root>
    </nav>
  );
}

export default Navigation
