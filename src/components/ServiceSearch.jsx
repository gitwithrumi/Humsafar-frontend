import React from "react";
import Button from "./Button";
import "../assets/styles/SearchForm.css";

function ServiceSearch() {
  return (
    <div>
      <form className="searchbanner lg:block lg:m-4 sm:hidden font-Cabin">
        <h2 className="text-3xl text-secondary font-Lora font-medium mb-2">
          Find Service
        </h2>
        <div className="flex items-center w-screen">
          <div className="mx-2 my-2 w-1/3">
            <div className=" px-4 py-2 border-[1.8px] border-primary rounded-md">
              <select
                name=""
                id=""
                className="p-4 px-7 text-secondaryLight font-medium text-xl lg:w-[95%] "
              >
                <option className="text-primary">Islamic Tuitions</option>
                <option className="text-primary">Value One here</option>
                <option className="text-primary">Value Two here</option>
                <option className="text-primary">Value Three here</option>
              </select>
            </div>
          </div>
          <div className=" my-2 mx-3 ml-5 px-3 py-1.5 border-[1.8px] border-primary rounded-md  w-[60vw]">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="City"
                className="p-2 px-3 mx-3  w-1/4 font-medium text-lg text-secondaryLight border-r-[1.5px] border-secondaryLight"
              />

              <input
                type="text"
                placeholder="Zip Code"
                aria-describedby="basic-addon1"
                className="p-2 mx-3  w-1/4 font-medium text-lg text-secondaryLight border-r-[1.5px] border-secondaryLight"
              ></input>

              <select className="p-2 mx-3  w-1/4 font-medium text-lg  text-secondaryLight">
                <option className="font-medium text-lg  text-primary">
                  Distance
                </option>
                <option className="font-medium text-lg  text-primary">
                  Value One here
                </option>
                <option className="font-medium text-lg  text-primary">
                  Value Two here
                </option>
                <option className="font-medium text-lg  text-primary">
                  Value Three here
                </option>
              </select>
              <div className=" mx-2 ">
                <Button ButtonText="Search" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceSearch;
