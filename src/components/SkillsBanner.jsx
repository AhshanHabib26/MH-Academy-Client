import { Link } from "react-router-dom";
import SkillsImg from "../assets/image/SkillesImg.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function SkillsBanner() {
  return (
    <div>
      <div className="px-3 lg:px-14">
        <div className="flex items-center justify-around flex-col-reverse lg:flex-row my-16">
          <div className="flex flex-1">
            <img
              className="w-[600px] rounded-lg mt-8 lg:mt-0"
              src={SkillsImg}
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col lg:items-start lg:justify-normal items-center justify-center">
            <h1 className="mb-1 text-[16px] lg:text-lg uppercase text-red-500">
              Get To Know Us
            </h1>
            <h1 className="text-4xl text-center lg:text-left lg:text-5xl font-semibold leading-[50px]  mb-3">
              Grow Your Skills Learn With Us From Anywhere.
            </h1>
            <p className="text-[16px] text-gray-500 text-center lg:text-left">
              MHAcademy researches and classifies online programs, tracks
              technological and pedagogical innovations in online instruction,
              interviews experts in the field, and publishes comprehensive,
              up-to-date information on various types of online degrees and
              programs.
            </p>
            <div className="my-5 flex items-start flex-col">
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-6">
                  <BsFillArrowRightCircleFill
                    size="20"
                    className=" text-red-500 mr-2"
                  />
                  <p>Expert Trainers</p>
                </div>
                <div className="flex items-center">
                  <BsFillArrowRightCircleFill
                    size="20"
                    className=" text-orange-500 mr-2"
                  />
                  <p>Online Learning</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center mr-6">
                  <BsFillArrowRightCircleFill
                    size="20"
                    className=" text-emerald-500 mr-2"
                  />
                  <p>Expert Trainers</p>
                </div>
                <div className="flex items-center">
                  <BsFillArrowRightCircleFill
                    size="20"
                    className=" text-rose-500 mr-2"
                  />
                  <p>Online Learning</p>
                </div>
              </div>
            </div>
            <Link className="btn w-[160px] rounded-full bg-red-500 hover:bg-red-500 capitalize text-[16px] text-white cursor-pointer">
              Explore more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
