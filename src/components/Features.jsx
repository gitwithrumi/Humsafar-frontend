import React from "react";

const Features = () => {
  return (
    <div id="humsafar-features" className="p-3">
      <h2 className="text-4xl text-secondary font-Lora font-medium pb-4 ">
        Safety is our first Priority
      </h2>
      <p className="text-secondary text-lg font-Cabin font-normal pb-2  lg:w-[50vw] md:w-[60vw] sm:w-[70vw]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad temporibus
        incidunt et beatae praesentium quae earum? Voluptatem earum
        exercitationem nostrum, officia ipsam atque ex facere reiciendis
        possimus? Autem quas tempora impedit maiores eos in nihil.
      </p>
      <div
        id="features-carousel"
        className="py-5 mt-2 flex items-center justify-between"
      >
        <div
          id="carousel-item"
          className="h-[50vh] w-[32vw] border-[2px] shadow-2xl rounded-md border-borderColor p-6 hover:bg-secondaryBackground flex flex-col justify-center"
        >
          <img src="" alt="" />
          <h4 className="mb-2 text-2xl font-Lora font-medium text-sectionBackground">
            'SabrSafe' Screening
          </h4>
          <p className="text-lg font-Cabin font-normal text-secondaryLight">
            At WithSabr, we meet with all service providers directly to screen
            for competency, core values, and safety.
          </p>
        </div>
        <div
          id="carousel-item"
          className="h-[50vh] w-[32vw] border-[2px] shadow-2xl rounded-md border-borderColor p-6 hover:bg-secondaryBackground flex flex-col justify-center"
        >
          <img src="" alt="" />
          <h4 className="mb-2 text-2xl font-Lora font-medium text-sectionBackground">
            Criminal Background Check
          </h4>
          <p className="text-lg font-Cabin font-normal text-secondaryLight">
            At WithSabr, we meet with all service providers directly to screen
            for competency, core values, and safety.
          </p>
        </div>
        <div
          id="carousel-item"
          className="h-[50vh] w-[32vw] border-[2px] shadow-2xl rounded-md border-borderColor p-6 hover:bg-secondaryBackground flex flex-col justify-center"
        >
          <img src="" alt="" />
          <h4 className="mb-2 text-2xl font-Lora font-medium text-sectionBackground">
            Driver's License Verification
          </h4>
          <p className="text-lg font-Cabin font-normal text-secondaryLight">
            At WithSabr, we meet with all service providers directly to screen
            for competency, core values, and safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
