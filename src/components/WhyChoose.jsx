import { PiStudentLight } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { BsAlarm } from "react-icons/bs";

export default function WhyChoose() {
  return (
    <div className="">
      <div className="px-3 lg:px-14 py-16">
        <div className="mx-5 lg:mx-auto max-w-7xl ">
          <div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-600">Why Choose Us</h1>
              <p className="text-lg font-thin text-gray-500">
                The ultimate online course solution for students who want to
                reach their personal goals.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-14">
              <div className="shadow  rounded-md p-4 relative hover:shadow-2xl cursor-pointer">
                <PiStudentLight
                  className=" absolute top-[-25px] text-white bg-red-500 border-[1px] p-2 rounded-full"
                  size="45"
                />
                <div className="mt-3">
                  <h1 className="text-2xl font-semibold text-red-400 my-2">
                    Go At Your Own Space{" "}
                  </h1>
                  <p className="text-[16px]">
                    Enjoy lifetime access to Tutorials on “MH Academy” Website
                    and App.
                  </p>
                </div>
              </div>
              <div className="shadow rounded-md p-4 relative hover:shadow-2xl cursor-pointer my-8 lg:my-0">
                <GiTeacher
                  className=" absolute top-[-25px] text-white bg-rose-500 border-[1px] p-2 rounded-full"
                  size="45"
                />
                <div className="mt-3">
                  <h1 className="text-2xl font-semibold text-red-400 my-2">
                    Learn From Industry Experts{" "}
                  </h1>
                  <p className="text-[16px]">
                    Select from our top instructors around the world learn form
                    industry experts.
                  </p>
                </div>
              </div>
              <div className="shadow rounded-md p-4 relative hover:shadow-2xl cursor-pointer">
                <BsAlarm
                  className=" absolute top-[-25px] text-white bg-orange-500 border-[1px] p-2 rounded-full"
                  size="45"
                />
                <div className="mt-3">
                  <h1 className="text-2xl font-semibold text-red-400 my-2">
                    Learn On Your Schedule{" "}
                  </h1>
                  <p className="text-[16px]">
                    Choose what you would like to learn from our extensive
                    subscription library.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
