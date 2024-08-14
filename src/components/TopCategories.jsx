import React from "react";

const TopCategories = () => {
  return (
    <div id="topCategories" className="p-3">
      <h2 className="text-4xl text-secondary font-Lora font-medium pb-8 border-b-2 border-b-secondaryLight">
        Popular Categories
      </h2>
      <div
        id="carousel"
        className="my-5 mt-8 flex items-center justify-between"
      >
        <div className="item h-[55vh] w-[23vw] border-[2px] shadow-2xl rounded-md border-borderColor border-b-[10px] border-b-primary p-10 hover:bg-secondaryBackground flex flex-col items-center  justify-center">
          <img src="../assets/images/se-4.png" alt="Islamic Education" />
          <h4 className="text-[22px] font-Lora font-medium text-sectionBackground">
            Islamic Education
          </h4>
        </div>
        <div className="item h-[55vh] w-[23vw] border-[2px] shadow-2xl rounded-md border-borderColor border-b-[10px] border-b-primary p-10 hover:bg-secondaryBackground flex flex-col items-center justify-center">
          <img src="../assets/images/se-1.png" alt="Online Tutoring" />
          <h4 className="text-[22px] font-Lora font-medium text-sectionBackground">
            Online Tutoring
          </h4>
        </div>
        <div className="item h-[55vh] w-[23vw] border-[2px] shadow-2xl rounded-md border-borderColor border-b-[10px] border-b-primary p-10 hover:bg-secondaryBackground flex flex-col items-center justify-center">
          <img src="../assets/images/se-2.png" alt="Baby Sitters" />
          <h4 className="text-[22px] font-Lora font-medium text-sectionBackground">
            Baby Sitters
          </h4>
        </div>
        <div className="item h-[55vh] w-[23vw] border-[2px] shadow-2xl rounded-md border-borderColor border-b-[10px] border-b-primary p-10 hover:bg-secondaryBackground flex flex-col items-center justify-center">
          <img src="../assets/images/se-3.png" alt="In-House Chefs" />
          <h4 className="text-[22px] font-Lora font-medium text-sectionBackground">
            In-House Chefs
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
