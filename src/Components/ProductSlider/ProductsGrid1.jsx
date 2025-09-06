import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../Card/ProductCard";
import { fetchProducts } from "../../Redux/ProductSlice";

import "swiper/css";
import "swiper/css/navigation";

const ProductsGrid1 = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);
  const filteredProducts = products.filter(p => p.category === "cupcake")
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center">Loading products...</p>;
  } 

  return (
    <section className="py-[50px] !pb-[100px] px-6 relative flex items-center bg-[#F4EDE3]">
      {/* Left Arrow */}
      <div className="w-[5%] flex justify-center">
        <div className="swiper-button-prev !w-[45px] !h-[45px] !rounded-[20%] !bg-[#F4EDE3] !shadow flex items-center justify-center hover:bg-[#E47277] hover:text-white transition">
          <FaChevronLeft style={{ color: "#E47277" }}/>
        </div>
      </div>

      {/* Slider */}
      <div className="w-[90%]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {filteredProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Arrow */}
      <div className="w-[5%] flex justify-center">
        <div className="swiper-button-next !w-[45px] !h-[45px] !rounded-[20%] !bg-[#F4EDE3] !shadow flex items-center justify-center hover:bg-[#E47277] hover:text-white transition">
          <FaChevronRight style={{ color: "#E47277", fontSize: "10px" }} /> 
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid1;
