import React, {useState, useEffect} from 'react'
import CustomCard from "./CustomCard";
import Slider from "react-slick";

function StockingSec() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    const [products, setProducts] = useState([]);
  
    const fetchUser = async () => {
      try {
        let request = await fetch(
          "https://rack-json-server.onrender.com/products"
        );
        let response = await request.json();
        setProducts(response);
      } catch (e) {
        console.log("Error:", e);
      }
    };
  
    useEffect(() => {
      fetchUser();
    }, []);

    return (
        <div className="mx-5 my-5 u-50-product">
        <Slider {...settings}>
            {products.map((item) => (
            <CustomCard
                key={item.id}
                url={item.imgUrl}
                discountPrice={item.discountPrice}
                discountPercent={item.discountPercent}
                originalP={item.originalPrice}
                rating={item.rating}
                name={item.name}
            />
            ))}
        </Slider>
        </div>
    );
}

export default StockingSec
