import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <div className="bg-[#fdfdfd] pb-10">
      {/* Standards Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-brandPink">
          STANDARDS
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/2 h-full border-l border-gray-300"></div>

          {/* Item 1 */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-lg">
              1. People over friendly's
            </h3>
            <p className="text-gray-500 mt-2">
              There are many variations of passages of Lorem Ipsum available...
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">
              2. Never serve food that has expired.
            </h3>
            <p className="text-gray-500 mt-2">
              There are many variations of passages of Lorem Ipsum available...
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-lg">
              3. Keep the restaurant spotless.
            </h3>
            <p className="text-gray-500 mt-2">
              There are many variations of passages of Lorem Ipsum available...
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">
              4. Make deliberate choices with lighting.
            </h3>
            <p className="text-gray-500 mt-2">
              There are many variations of passages of Lorem Ipsum available...
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Slider {...settings}>
          <div>
            <img
              src="https://cakeart.thimpress.com/wp-content/uploads/2015/07/img_gallery_6.jpg"
              alt="Slide 1"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://cakeart.thimpress.com/wp-content/uploads/2015/07/img_gallery_3.jpg"
              alt="Slide 2"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://cakeart.thimpress.com/wp-content/uploads/2015/07/img_gallery_7.jpg"
              alt="Slide 3"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default About;
