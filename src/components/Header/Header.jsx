import React, { useContext } from "react";
import rackLogo from "../../assets/images/rack-logo.svg";
import storeLogo from "../../assets/images/store-logo.svg"
import purchaseLogo from "../../assets/images/purchase-logo.svg"
import cartLogo from "../../assets/images/cartLogo.svg"
import { Text, Link, Box, Center, Flex, Image, Input, IconButton, Button } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import "./Header.css"
import Navigation from "../Navigation/Navigation";
import Dropdown from "../common/Dropdown";
import { ShowDropdown } from "../../App";


function Header() {
  const {showDropDown} = useContext(ShowDropdown)
  return (
    <header className="header">
      <Box bg="green.400" p="1.5" className="offed-div">
        <Center>
          <Text color="black">
            <strong>Get your holiday gifts in time!</strong> Order by 5PM PT on
            12/17 for standard shipping.
            <Link color="black" className="link">
              Shop Gifts
            </Link>
          </Text>
        </Center>
      </Box>

      <Box mx="8" py="5" borderBottom="1px solid black">
        <Flex justifyContent="space-between">
          <Box px="10">
            <Flex alignItems="center">
              <Image
                src={rackLogo}
                alt="logo"
                aspectRatio={4.5 / 1.5}
                width="110px"
              />
              <Box>
                <IconButton
                  variant="ghost"
                  colorPalette="black"
                  className="icon"
                >
                  <LuSearch color="black" />
                </IconButton>
                <Input
                  px="12"
                  size="lg"
                  width="700px"
                  color="black"
                  placeholder="Search for products or brand"
                  className="border"
                />
              </Box>
            </Flex>
          </Box>

          <Box>
            <Flex justifyContent="space-evenly" alignItems="center" gap="15px">
              <Box>
                <Button size="lg" variant="plain">
                  Sign In
                  <FaCaretDown />
                </Button>
              </Box>
              <Box>
                <Flex justifyContent="space-evenly" alignItems="center" gap="2">
                  <Image src={storeLogo} />
                  <Button variant="ghost">
                    Set Your Store <FaCaretDown />
                  </Button>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent="space-evenly" alignItems="center" gap="2">
                  <Image src={purchaseLogo} />
                  <Button variant="ghost">Purchase</Button>
                </Flex>
              </Box>
              <Box>
                <Image src={cartLogo}></Image>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Navigation />

      {showDropDown && <Dropdown />}
    </header>
  );
}

export default Header;
