import React from 'react'
import { Image } from '@chakra-ui/react'

function Banner({url, className, secTxt}) {
  return (
    <div className="relative">
        <Image src={url} alt="Limited Time Sale Image"></Image>
        <p className={className}>{secTxt}</p>
    </div>
  )
}

export default Banner
