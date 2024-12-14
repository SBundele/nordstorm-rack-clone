import React from "react";
import FadeCorousel from "../../components/common/FadeCorousel";
import StockingSec from "../../components/common/StockingSec";
import bannerImg from "../../assets/images/sale-banner.webp";

import { Heading, Flex, Button, Image } from "@chakra-ui/react";

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
        <div className="relative">
          <Image src={bannerImg} alt="Limited Time Sale Image"></Image>
          <p className="pos">Shop Limited-Time Sales</p>
        </div>
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
    </main>
  );
}

export default Home;
