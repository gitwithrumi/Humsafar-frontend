import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        id="footer"
        className="p-5 bg-sectionBackground font-Cabin h-full text-white"
      >
        <div
          id="footer-top"
          className="flex items-center justify-between pb-8 mt-32  border-b border-b-primary"
        >
          <div id="logo" className="">
            {/* <img src="" alt="" /> */}
            <h1 className="text-5xl text-white font-Lora font-semibold">
              HumSafar
            </h1>
          </div>
          <div id="socials" className="flex gap-3 ">
            <a
              href=""
              className="bg-white p-2.5 border-1 border-white rounded-[50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="fill-sectionBackground"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href=""
              className="bg-white p-2.5 border-1 border-white rounded-[50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="fill-sectionBackground"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772a4.9 4.9 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153a4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772a4.9 4.9 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2m0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.182.8.399 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.182-.466.399-.8.748-1.15c.35-.35.684-.566 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058m0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666m0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27m6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"
                ></path>
              </svg>
            </a>
            <a
              href=""
              className="bg-white p-2.5 border-1 border-white rounded-[50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 20 20"
                className="fill-sectionBackground"
              >
                <path d="M2.5 18h3V6.9h-3zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2m6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6"></path>
              </svg>
            </a>
            <a
              href=""
              className="bg-white p-2.5 border-1 border-white rounded-[50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="fill-sectionBackground"
              >
                <path d="M22 5.796a8.2 8.2 0 0 1-2.357.646a4.12 4.12 0 0 0 1.805-2.27a8.2 8.2 0 0 1-2.606.996a4.105 4.105 0 0 0-7.097 2.808a4.2 4.2 0 0 0 .105.935a11.65 11.65 0 0 1-8.456-4.287a4.107 4.107 0 0 0 1.27 5.478a4.1 4.1 0 0 1-1.86-.513v.052a4.105 4.105 0 0 0 3.292 4.023a4 4 0 0 1-1.081.143a4 4 0 0 1-.773-.072a4.11 4.11 0 0 0 3.832 2.85A8.26 8.26 0 0 1 2 18.282a11.6 11.6 0 0 0 6.29 1.844A11.594 11.594 0 0 0 19.962 8.453q0-.267-.013-.53A8.4 8.4 0 0 0 22 5.796"></path>
              </svg>
            </a>
          </div>
        </div>
        <div id="footer-mid" className="flex justify-between py-12 w-screen ">
          <div id="footer-mid--1" className="w-2/5">
            <h3 className="text-2xl font-medium font-Cabin uppercase text-white mb-5">
              Why choose WithSabr?
            </h3>
            <p className="pb-3 font-normal font-Cabin text-lg mb-8">
              At WithSabr, we offer a wide range of safe and reliable home
              services for Muslims by Muslims. Our 'SabrSafe" Screening and
              Criminal Background Check provides security that you can rely on.
            </p>
            <h3 className="text-2xl font-medium font-Cabin uppercase text-white mb-5">
              Contact Us
            </h3>
            <p className="font-normal font-Cabin text-lg">
              If you have any questions, please <br /> contact us at:{" "}
              <a href="mailto:Support@WithSabr.com" className="text-primary">
                Support@WithSabr.com
              </a>
            </p>
          </div>
          <div id="footer-mid--2" className="w-1/4 flex flex-col px-5">
            <h3 className="text-2xl font-medium font-Cabin  text-white mb-2">
              Home
            </h3>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              My Account
            </a>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              Sell wih us
            </a>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              Cart
            </a>
          </div>
          <div id="footer-mid--3" className="w-1/4 flex flex-col px-5">
            <h3 className="text-2xl font-medium font-Cabin  text-white mb-2">
              Categories
            </h3>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              Islamic Tuitions
            </a>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              In-House Chefs
            </a>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              Baby Sitters
            </a>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              Online Teaching
            </a>
            <a href="" className="font-normal font-Cabin text-lg mt-2.5">
              Counseling
            </a>
          </div>
        </div>
        <div id="footer-bottom" className="border-t border-t-primary">
          <p className="my-7">© 2024 Humsafar, All rights are reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
