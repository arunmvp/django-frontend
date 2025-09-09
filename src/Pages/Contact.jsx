import React from "react";

const Contact = () => {
  return (
    
      <section className="contact-section pt-10" >
        <div className="container text-center px-4">
          <h2 className="text-2xl text-brandPink font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-600">
            We are also active in social media.
            <br />
            You can find us on below addresses..
          </p>

          <div className="mb-6">
            <p className="text-gray-700">
              329 North Street, <br />
               Sivakasi
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">
              Opening Hour <b>8:00 AM – 10:00 PM</b>
              <br />
              Monday – Sunday
            </p>
            <p className="mt-2">
              Call. <span className="text-red-500">+91 6385843484</span>
            </p>
            <p>
              E-mail.{" "}
              <a href="mailto:hello@cakeart.com" className="text-red-500">
                mvparun3@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="w-full mt-8 ">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62970.01160346728!2d77.75142304916588!3d9.454179599901144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee43d812d0d%3A0x8ce12e9dcdaa2a2c!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1757430061894!5m2!1sen!2sin"
              style={{ border: 0 }}
            //   allowfullscreen=""
              loading="lazy"
            //   referrerpolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
  );
};

export default Contact;
