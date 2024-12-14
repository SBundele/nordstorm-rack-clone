import React from 'react'
import { Heading, Center, Flex } from '@chakra-ui/react'
import { Button, Image } from '@chakra-ui/react';

function Home() {

  return (
    <>
      <section className="my-5">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="5"
        >
          <Heading as="h1" className="heading">
            More to Rack, easier and faster
          </Heading>
          <Button variant="outline" width="300px" borderColor="blue.400">
            Sign In or Create an Account
          </Button>
        </Flex>
      </section>
    </>
  );
}

export default Home
