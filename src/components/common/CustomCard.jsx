import React from 'react'
import { Image, Card, Button, Text, Heading } from '@chakra-ui/react'

function CustomCard({url, discountPrice, discountPercent, originalP, rating, name}) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <div className="card-img">
        <div className="card-background"></div>
        <Image src={url} alt={name} />
      </div>
      <Card.Body gap="2" className='px-0 py-2'>
        <Heading as="h4" color="green.800" fontWeight="bold">
          Arrives Before Christmas
        </Heading>
        <Card.Title>{name}</Card.Title>
        <Card.Description>
          <Text letterSpacing="tight">
            <span className="font-bold">${discountPrice}</span> (
            {discountPercent}% off)
          </Text>
          <Text className="line-through">${originalP}</Text>
          <Text>Review: ({rating})</Text>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default CustomCard
