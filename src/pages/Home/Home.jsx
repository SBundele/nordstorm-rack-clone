import React, { useState } from "react";

// component imports
import FadeCorousel from "../../components/common/FadeCorousel";
import StockingSec from "../../components/common/StockingSec";
import Event from "../../components/common/Event";
import Banner from "../../components/common/Banner";

// Image imports
import bannerImg from "../../assets/images/sale-banner.webp";
import dealImg from "../../assets/images/flash-deal.webp"
import brandImg from "../../assets/images/brand.webp"
import signupImg from "../../assets/images/sign-up.webp"

// chakra ui imports
import { Heading, Flex, Button, Image } from "@chakra-ui/react";

// css imports
import "./Home.css";

function Home() {

  return (
    <main className="mx-10">
      <section className="my-8">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="5"
        >
          <Heading as="h1" className="heading">
            More to Rack, easier and faster
          </Heading>
          <Button
            className="border-2"
            variant="outline"
            width="300px"
            borderColor="blue.400"
          >
            Sign In or Create an Account
          </Button>
        </Flex>
      </section>

      <section className="my-14">
        <Banner
          url={bannerImg}
          className="pos"
          secTxt="Shop Limited-Time Sales"
        />
      </section>

      <FadeCorousel />

      <section className="my-10 stocking-suffer">
        <Flex justifyContent="space-between" alignItems="center">
          <h2 className="text-2xl font-semibold">Stocking Suffers Under $50</h2>
          <div>
            <Button
              className="border-2 px-5 py-2"
              variant="outline"
              borderColor="blue.400"
            >
              View All
            </Button>
          </div>
        </Flex>

        <StockingSec />
      </section>

      <section className="my-5">
        <Banner url={dealImg} className="deal" secTxt="All Flash Events" />
      </section>

      <section className="my-7">
        <Event />
      </section>

      <section className="my-5">
        <Banner url={brandImg} className="brand" secTxt="Top Brands" />
      </section>

      <section className="my-10 stocking-suffer">
        <Flex justifyContent="space-between" alignItems="center">
          <h2 className="text-2xl font-semibold">Must-Have Gifts</h2>
          <div>
            <Button
              className="border-2 px-5 py-2"
              variant="outline"
              borderColor="blue.400"
            >
              View All
            </Button>
          </div>
        </Flex>
        <ul>
          <Flex gap="8">
            <li className="font-bold py-2 cursor-pointer active">Best Gifts</li>
            <li className="font-bold py-2 cursor-pointer">Under $25</li>
            <li className="font-bold py-2 cursor-pointer">Under $50</li>
            <li className="font-bold py-2 cursor-pointer">Luxe & Designer</li>
            <li className="font-bold py-2 cursor-pointer">Gift Sets</li>
          </Flex>
        </ul>
        <hr className="my-1 border-black" />
        <StockingSec />
      </section>
      <section>
        <Banner url={signupImg} className="signUp" secTxt="" />
      </section>
    </main>
  );
}

export default Home;
