import React, { useEffect, useState } from 'react'
import { Image } from '@chakra-ui/react'
import Slider from "react-slick";

function Event() {
  const [events, setEvents] = useState([])
 
  const fetchEvent = async () => {
    let req = await fetch("https://rack-json-server.onrender.com/events");
    let response = await req.json()
    setEvents(response)
  }

  useEffect(() => {
    fetchEvent()
  }, [])

const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    waitForAnimate: false,
    autoplay: false,
};


  return (
    <div className="container">
      <Slider {...settings}>
        {events.map((event) => (
          <div className="event">
            <div className="event-img">
              <Image src={event.img} alt="event-image" />
            </div>
            <div className="event-content">
              <p className='font-bold mb-0'>
                {event.name} Up to {event.discount}% off
              </p>
              <p className='mt-0'>
                {event.days !== "0"
                  ? `Event ends in ${event.days} days`
                  : "Event has ended"}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Event
