import React from 'react'
import { List } from "@chakra-ui/react";

function Navigation() {
  return (
    <nav className="navbar">
      <List.Root>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List.Root>
    </nav>
  );
}

export default Navigation
