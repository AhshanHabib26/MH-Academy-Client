import { Link } from "react-router-dom";
import BannerImg from "../assets/image/Banner.svg";
import Styles from "../style/Banner.module.css";
export default function Banner() {
  return (
    <div className="bg-orange-50 py-12 lg:py-0">
      <div className="px-3 lg:px-14">
        <div className=" flex items-center justify-between">
          <div className="flex flex-1">
            <div>
              <div>
                <div className={`${Styles.BannerTitle} relative mb-6`}>
                  <h1 className="text-lg uppercase text-gray-500">
                    Start To Your New Journey
                  </h1>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold pr-0 lg:pr-20">
                  Best <span className={Styles.BannerOn}>Online</span> courses
                  from <span className={Styles.BannerOn}>MH</span>Academy!
                </h1>
                <p className="mt-1 text-lg text-gray-500">
                  Top class training and development programs developed by top
                  teachers.
                </p>
              </div>
              <Link to="/all-courses">
                {" "}
                <div className="mt-4">
                  <button className=" w-[180px] h-[50px] bg-red-500 hover:bg-red-600 rounded-full text-white capitalize cursor-pointer">
                    Find Your Course
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-1 ">
              <img className="w-[600px]" src={BannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
