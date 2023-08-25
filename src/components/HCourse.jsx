import CImg from "../assets/image/img.jpg";
import CImgOne from "../assets/image/imgOne.jpg";
import Style from "../style/HCourse.module.css";
import { PiNotebookFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HCourse() {
  return (
    <div className={Style.HCourseBannerBg}>
      <div className="px-3 lg:px-14 py-14">
        <div className="text-center mb-8">
          <h1 className="text-lg text-red-500 uppercase">Popular Courses</h1>
          <p className="text-3xl font-semibold text-gray-600">
            Our Featured Courses
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mx-2 lg:mx-auto max-w-7xl">
            <div className="shadow hover:shadow-2xl cursor-pointer rounded-md">
              <div className=" relative">
                <img
                  className="rounded-t-lg opacity-75 w-full h-[200px] object-cover"
                  src={CImg}
                  alt=""
                />
                <h1 className=" absolute bottom-0 bg-red-500 p-2 text-[16px] text-white rounded-tr-md">
                  Beginner
                </h1>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg text-gray-800">Web Development</h1>
                  <h1 className="text-lg font-semibold text-red-500">$500</h1>
                </div>
                <h1 className="my-3 text-lg font-semibold text-red-500">
                  The Complete 2023 Web Development Bootcamp
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <PiNotebookFill size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">
                      12 Lessons
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <FaUserTie size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">
                      120 Students
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <FiClock size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">7 Week</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow hover:shadow-2xl cursor-pointer rounded-md">
              <div className=" relative">
                <img
                  className="rounded-t-lg opacity-75 w-full h-[200px] object-cover"
                  src={CImgOne}
                  alt=""
                />
                <h1 className=" absolute bottom-0 bg-red-500 p-2 text-[16px] text-white rounded-tr-md">
                  Intermediet
                </h1>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg text-gray-800">Web Development</h1>
                  <h1 className="text-lg font-semibold text-red-500">$500</h1>
                </div>
                <h1 className="my-3 text-lg font-semibold text-red-500">
                  The Complete 2023 Web Development Bootcamp
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <PiNotebookFill size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">
                      12 Lessons
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <FaUserTie size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">
                      120 Students
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <FiClock size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">7 Week</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow hover:shadow-2xl cursor-pointer rounded-md">
              <div className=" relative">
                <img
                  className="rounded-t-lg opacity-75 w-full h-[200px] object-cover"
                  src={CImg}
                  alt=""
                />
                <h1 className=" absolute bottom-0 bg-red-500 p-2 text-[16px] text-white rounded-tr-md">
                  Advanced
                </h1>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg text-gray-800">Web Development</h1>
                  <h1 className="text-lg font-semibold text-red-500">$500</h1>
                </div>
                <h1 className="my-3 text-lg font-semibold text-red-500">
                  The Complete 2023 Web Development Bootcamp
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <PiNotebookFill size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">
                      12 Lessons
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <FaUserTie size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">
                      120 Students
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <FiClock size="18" className="text-red-400" />
                    <h1 className="text-[16px] ml-1 text-gray-600">7 Week</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end mt-8">
            <Link to="/all-courses" className="btn bg-red-500 hover:bg-red-600 text-white cursor-pointer">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
