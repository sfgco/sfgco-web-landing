"use client";
import CounterAnimation from "@/utils/CounterAnimation";

const MembersCounter = ({ border = true }) => {
  return (
    <section>
      <div className="container relative">
        <div
          className={`relative grid grid-cols-12 gap-x-5 gap-y-5 py-10 ${
            !border
              ? ""
              : "after:cover before:absolute before:left-1/2 before:top-0 before:h-0.5 before:w-full before:-translate-x-1/2 before:bg-[url('/images/payment/member-border.svg')] before:bg-cover before:bg-center before:bg-no-repeat after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full after:-translate-x-1/2 after:bg-[url('/images/payment/member-border.svg')] after:bg-center after:bg-no-repeat dark:before:bg-[url('/images/payment/member-border-dark.svg')] dark:after:bg-[url('/images/payment/member-border-dark.svg')] max-md:before:hidden"
          }`}
        >
          <div className="max-lg:col-span-full lg:col-span-6">
            <div className="max-w-[550px]">
              <span className=" mr-2 inline-block rounded-[88px] border-2 border-paragraph bg-[#0e633c] pb-2.5 pl-4 pr-5 pt-0.5 font-playfair italic leading-none dark:border-[#fffff]">
                SFGCO
              </span>
              <h2>More than 10 years experience in Sustainability industry</h2>
            </div>
          </div>
          <div className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex items-center">
              <div className="mr-6 h-[110px] w-[110px] rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className=" flex h-[90px] w-[90px] items-center justify-center rounded-full border border-dashed border-gray-100 dark:border-borderColor-dark">
                  <h3 className="text-[28px] leading-none text-primary dark:text-primary">
                    <span className="counterTrusted text-[28px] leading-none text-primary dark:text-primary">
                      <CounterAnimation number={95} />
                    </span>
                    %
                  </h3>
                </div>
              </div>
              <h3 className="leading-8 ">
                Trusted <br />
                by companies
              </h3>
            </div>
          </div>
          <div className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3 ">
            <div className="flex items-center">
              <div className="mr-6 h-[110px] w-[110px] rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-dashed border-gray-100 dark:border-borderColor-dark">
                  <h3 className="text-[28px] leading-none text-primary dark:text-primary">
                    <span className="counterTrusted text-[28px] leading-none text-primary dark:text-primary">
                      <CounterAnimation number={2} />
                    </span>
                    K
                  </h3>
                </div>
              </div>
              <h3 className="leading-8 ">International partners</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersCounter;
