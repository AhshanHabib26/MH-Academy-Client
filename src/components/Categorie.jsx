import Style from "../style/Categorie.module.css";
import WebDesign from "../assets/icons/web-design.png";
import AppDevelopment from "../assets/icons/app-development.png";
import Business from "../assets/icons/business.png";
import GDevelopment from "../assets/icons/game-development.png";
import Seo from "../assets/icons/seo.png";
import MADevelopment from "../assets/icons/mobile-app-development.png";
import { Link } from "react-router-dom";
export default function Categorie() {
  return (
    <div className={Style.CategorieBannerBg}>
      <div className="px-3 lg:px-14 py-14">
        <div className="text-center mb-8">
          <h1 className="text-lg text-red-500 uppercase">Our Categories</h1>
          <p className="text-3xl font-semibold text-gray-600">
            Top categories for most popular courses
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mx-2 lg:mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="border-[1px] border-dashed border-green-300 rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img className="mx-auto w-[60px]" src={WebDesign} alt="" />
            </div>

            <h1 className="text-[16px] text-md font-semibold text-red-400">
              Web Design
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="border-[1px] border-dashed border-green-300 rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img className="mx-auto w-[60px]" src={AppDevelopment} alt="" />
            </div>

            <h1 className="text-[16px] text-md font-semibold text-red-400">
              Web Development
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="border-[1px] border-dashed border-green-300 rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img className="mx-auto w-[60px]" src={GDevelopment} alt="" />
            </div>

            <h1 className="text-[16px] text-md font-semibold text-red-400">
              Game Development
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="border-[1px] border-dashed border-green-300 rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img className="mx-auto w-[60px]" src={MADevelopment} alt="" />
            </div>

            <h1 className="text-[16px] text-md font-semibold text-red-400">
              Mobile APP Development
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="border-[1px] border-dashed border-green-300 rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img className="mx-auto w-[60px]" src={Business} alt="" />
            </div>

            <h1 className="text-[16px] text-md font-semibold text-red-400">
              Bussiness Management
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="border-[1px] border-dashed border-green-300 rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img className="mx-auto w-[60px]" src={Seo} alt="" />
            </div>

            <h1 className="text-[16px] text-md font-semibold text-red-400">
              SEO
            </h1>
          </div>
        </div>
        <div className="flex items-center lg:items-end justify-center lg:justify-end mt-10">
          <Link
            to="/all-courses"
            className="btn bg-red-500 hover:bg-red-600 text-white cursor-pointer"
          >
            Explore More Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
