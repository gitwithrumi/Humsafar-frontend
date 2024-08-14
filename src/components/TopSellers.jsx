import React from "react";
import Button from "./Button";

const TopSellers = () => {
  return (
    <div id="topCategories" className="p-3">
      <h2 className="text-4xl text-secondary font-Lora font-medium pb-8 border-b-2 border-b-secondaryLight">
        Popular Categories
      </h2>
      <div
        id="carousel"
        className="my-5 mt-8 flex items-center justify-between"
      >
        <div className="item h-[35vh] w-[48vw] border-[2px] shadow-2xl rounded-md border-borderColor p-10 bg-sectionBackground hover:bg-secondaryLight flex items-center  justify-center">
          <img src="../assets/images/se-4.png" alt="Islamic Education" />
          <div id="carousel-content">
            <h4 className="text-[22px] font-Lora font-medium text-white mb-1">
              Professor | Berlin
            </h4>
            <h4 className="text-white mb-1"> 4.8 ⭐ Rating </h4>
            <h4 className="text-white mb-4"> 9 years of experience</h4>
            <Button ButtonText="View Details" />
          </div>
        </div>
        <div className="item h-[35vh] w-[48vw] border-[2px] shadow-2xl rounded-md border-borderColor p-10 bg-sectionBackground hover:bg-secondaryLight flex items-center justify-center">
          <img src="../assets/images/se-1.png" alt="Online Tutoring" />
          <div id="carousel-content">
            <h4 className="text-[22px] font-Lora font-medium text-white mb-1">
              Charlie | California
            </h4>
            <h4 className="text-white mb-1"> 4.8 ⭐ Rating </h4>
            <h4 className="text-white mb-4"> 9 years of experience</h4>
            <Button ButtonText="View Details" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
