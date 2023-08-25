import InstractorImg from "../assets/image/Instractor.png";
import InstractorImgOne from "../assets/image/img.jpg";
import { MdVisibility } from "react-icons/md";
export default function HInstractor() {
  return (
    <div className="px-3 lg:px-14 py-14">
      <div className="text-center mb-12">
        <h1 className="text-lg text-red-500 uppercase">Qualified Instractor</h1>
        <p className="text-3xl font-semibold text-gray-600">
          Meet the qualified instractor who teaches you online
        </p>
      </div>
      <div className="mx-5 lg:mx-auto grid grid-cols-2 lg:grid-cols-4 max-w-5xl gap-5">
        <div className="flex flex-col items-center justify-center select-none">
          <div className=" relative border-[1px] shadow-md border-green-100 border-dashed rounded-full w-[200px] h-[200px]">
            <img
              className="w-[200px] h-[200px] object-cover  rounded-full"
              src={InstractorImg}
              alt=""
            />
            <MdVisibility
              size="30"
              className=" bg-red-500 rounded-full text-white p-1 absolute bottom-1 right-[90px] cursor-pointer select-none"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-red-500">Ahshan Habib</h1>
            <p className="text-[14px] text-center text-gray-400">
              Web Developer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center select-none">
          <div className=" relative border-[1px] shadow-md border-green-100 border-dashed rounded-full w-[200px] h-[200px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-full "
              src={InstractorImgOne}
              alt=""
            />
            <MdVisibility
              size="30"
              className=" bg-red-500 rounded-full text-white p-1 absolute bottom-1 right-[90px] cursor-pointer select-none"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-red-500">Jane Smith</h1>
            <p className="text-[14px] text-center text-gray-400">
              APP Developer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center select-none">
          <div className=" relative border-[1px] shadow-md border-green-100 border-dashed rounded-full w-[200px] h-[200px]">
            <img
              className="w-[200px] h-[200px] object-cover  rounded-full"
              src={InstractorImg}
              alt=""
            />
            <MdVisibility
              size="30"
              className=" bg-red-500 rounded-full text-white p-1 absolute bottom-1 right-[90px] cursor-pointer select-none"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-red-500">Ahshan Habib</h1>
            <p className="text-[14px] text-center text-gray-400">
              Web Developer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center select-none">
          <div className=" relative border-[1px] shadow-md border-green-100 border-dashed rounded-full w-[200px] h-[200px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-full "
              src={InstractorImgOne}
              alt=""
            />
            <MdVisibility
              size="30"
              className=" bg-red-500 rounded-full text-white p-1 absolute bottom-1 right-[90px] cursor-pointer select-none"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-red-500">Jane Smith</h1>
            <p className="text-[14px] text-center text-gray-400">
              APP Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
