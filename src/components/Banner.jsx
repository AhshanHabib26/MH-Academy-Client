import BannerImg from "../assets/image/Banner.svg";
export default function Banner() {
  return (
    <div className="bg-orange-50 py-20 lg:py-0">
      <div className="px-2 lg:px-10">
        <div className=" flex items-center justify-center">
          <div className="flex flex-1">
            <div>
              <div className="text-5xl text-center lg:text-left lg:text-7xl font-bold text-red-500">
                Access <span className="text-gray-800">500+</span> Online
                Tutorial from <span className="text-gray-800">126+</span> Top
                Instractor!
              </div>
              <div className="flex items-center justify-center lg:justify-start my-10 lg:my-8 relative">
                <input
                  className="border-[1px] w-[60%] border-red-300 outline-none h-[50px] pl-2 text-red-500 text-lg"
                  type="text"
                  placeholder="Web Developer"
                />
                <button className=" border-none outline-none bg-red-500 w-[100px]   h-[50px] text-white text-lg cursor-pointer">
                  Search
                </button>
              </div>
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
