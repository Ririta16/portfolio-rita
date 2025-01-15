import { useState } from "react";
import avatar from "../assets/1e351f2476930a732035aba8c38a7161.jpg";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";
import work7 from "../assets/work7.png";
import work8 from "../assets/work8.png";
import ig1 from "../assets/social-media.png";
import ig2 from "../assets/save.png";
import ig3 from "../assets/bubble-chat.png";
import ig4 from "../assets/heart.png";
import ig5 from "../assets/favorite.png";
import code from "../assets/code.png";
import { Avatar } from "antd";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Work() {
  const [fav, setFav] = useState(false);
  const renderFavIcon = () => {
    return (
      <img
        className="w-5 cursor-pointer duration-200"
        src={fav ? ig4 : ig5}
        onClick={() => setFav(!fav)}
      />
    );
  };
  return (
    <div className=" bgwork min-h-screen h-fit relative w-full py-5">
      <div className="titlecontact mt-5 flex !flex-row justify-center !text-[#13A89D]">
        <div>W</div>
        <div>O</div>
        <div>R</div>
        <div>K</div>
        <div>S</div>
      </div>
      <div className="px-10">
        <Swiper
          initialSlide={0}
          slidesPerView={3}
          spaceBetween={170}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">Vocabulary</div>
                  </div>

                  <a href="https://ririta16.github.io/vocab/">
                    <img className="w-8 cursor-pointer" src={code} />
                  </a>
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4"
                  src={work1}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> React Typescript
                    based to make a checklist and can auto remove vocabulary
                    after 5 second
                  </div>
                  <div className="flex gap-3 mt-2 text-xs">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">To Do List</div>
                  </div>
                  <a href="https://ririta16.github.io/to-do-list/">
                    <img className="w-8 cursor-pointer" src={code} />
                  </a>
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4"
                  src={work2}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> React Typescript
                    based to from & card list and can add/edit/delete the card
                    list
                  </div>
                  <div className="flex gap-3 mt-2 text-xs">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black bg-[#1890FF] rounded-full p-1 px-3 text-white">
                      #AntD
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">Anime Api</div>
                  </div>
                  <a href="https://ririta16.github.io/anime-api/#/all">
                    <img className="w-8 cursor-pointer" src={code} />
                  </a>
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4"
                  src={work3}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> React Typescript
                    based to from & card list and can add/edit/delete
                  </div>
                  <div className="flex gap-x-3 gap-y-2 mt-2 text-xs flex-wrap">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black bg-[#38B2AC] rounded-full p-1 px-3 text-white">
                      #Tailwind
                    </div>
                    <div className="border-4 border-black bg-yellow-400 rounded-full p-1 px-3 text-white">
                      #Framermotion
                    </div>
                    <div className="border-4 border-black bg-[#1890FF] rounded-full p-1 px-3 text-white">
                      #AntD
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #Api
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">List User Api</div>
                  </div>
                  {/* <img className="w-8 cursor-pointer" src={code} /> */}
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4"
                  src={work4}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> Redux RTK Query
                    based to run api and perform pagination & add/delete user
                  </div>
                  <div className="flex gap-x-3 gap-y-2 mt-2 text-xs flex-wrap">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black bg-[#1890FF] rounded-full p-1 px-3 text-white">
                      #AntD
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #Api
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">Landing Page CSS</div>
                  </div>
                  <a href="https://ririta16.github.io/landingpage-css/">
                    <img className="w-8 cursor-pointer" src={code} />
                  </a>
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4"
                  src={work5}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> Use Module Style
                    CSS and Layout Flex to help organize all element in website
                  </div>
                  <div className="flex gap-x-3 gap-y-2 mt-2 text-xs flex-wrap">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">ogs Daily News</div>
                  </div>
                  {/* <img className="w-8 cursor-pointer" src={code} /> */}
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4"
                  src={work6}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> Use React Router
                    Dom to help link to pages
                  </div>
                  <div className="flex gap-x-3 gap-y-2 mt-2 text-xs flex-wrap">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black bg-[#38B2AC] rounded-full p-1 px-3 text-white">
                      #Tailwind
                    </div>
                    <div className="border-4 border-black bg-[#1890FF] rounded-full p-1 px-3 text-white">
                      #AntD
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">Redux Register Form</div>
                  </div>
                  <a href="https://ririta16.github.io/regisform-redux/">
                    <img className="w-8 cursor-pointer" src={code} />
                  </a>
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4"
                  src={work7}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> Redux based to
                    collect result username, email and password
                  </div>
                  <div className="flex gap-x-3 gap-y-2 mt-2 text-xs flex-wrap">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black bg-[#38B2AC] rounded-full p-1 px-3 text-white">
                      #Tailwind
                    </div>
                    <div className="border-4 border-black bg-yellow-400 rounded-full p-1 px-3 text-white">
                      #Framermotion
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="boxwork">
                <div className="flex items-center justify-between pb-2 mb-4 border-b-4 border-black">
                  <div className="flex items-center">
                    <Avatar
                      className="border-4 border-black"
                      size="large"
                      src={avatar}
                    />
                    <div className="ml-3 text-[22px]">Christmas Card</div>
                  </div>
                  <a href="https://ririta16.github.io/christmas-card/">
                    <img className="w-8 cursor-pointer" src={code} />
                  </a>
                </div>
                <img
                  className="rounded-[30px] border-4 border-black mb-4 "
                  src={work8}
                />
                <div className="flex flex-row w-full justify-between border-t-4 border-black pt-2 mb-2">
                  <div className="flex gap-2">
                    {renderFavIcon()}
                    <img className="w-5 cursor-pointer" src={ig3} />
                    <img className="w-5 cursor-pointer" src={ig1} />
                  </div>
                  <div>
                    <img className="w-5 cursor-pointer" src={ig2} />
                  </div>
                </div>
                <div>
                  <div className="text-justify">
                    <span className="font-bold">Rita :</span> Use Tailwind CSS,
                    a framework that helps to write inline style.
                  </div>
                  <div className="flex gap-x-3 gap-y-2 mt-2 text-xs flex-wrap">
                    <div className="border-4 border-black bg-[#3178C6] rounded-full p-1 px-3 text-white">
                      #TypeScript
                    </div>
                    <div className="border-4 border-black bg-[#38B2AC] rounded-full p-1 px-3 text-white">
                      #Tailwind
                    </div>
                    <div className="border-4 border-black bg-yellow-400 rounded-full p-1 px-3 text-white">
                      #Framermotion
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #HTML
                    </div>
                    <div className="border-4 border-black rounded-full p-1 px-3">
                      #CSS
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div className="flex justify-center mt-8 gap-[14rem] h-[60px]">
            {/* <FaChevronLeft className="prev pr-1 big-button" /> */}
            <button className="prev big-button z-10 relative">
              <FaChevronLeft />
            </button>
            <div className="swiper-pagination"></div>
            <button className="next big-button z-10 relative">
              <FaChevronRight />
            </button>
          </div>
        </Swiper>
      </div>

      <svg
        id="wave2"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 140"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="#83d3f6" offset="0%"></stop>
            <stop stop-color="#83d3f6" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-1)"
          d="M0,119L14.1,121.8C28.2,125,56,130,85,119C112.9,108,141,79,169,79.3C197.6,79,226,108,254,104.8C282.4,102,311,68,339,68C367.1,68,395,102,424,113.3C451.8,125,480,113,508,102C536.5,91,565,79,593,87.8C621.2,96,649,125,678,113.3C705.9,102,734,51,762,51C790.6,51,819,102,847,102C875.3,102,904,51,932,36.8C960,23,988,45,1016,70.8C1044.7,96,1073,125,1101,124.7C1129.4,125,1158,96,1186,76.5C1214.1,57,1242,45,1271,59.5C1298.8,74,1327,113,1355,127.5C1383.5,142,1412,130,1440,127.5C1468.2,125,1496,130,1525,133.2C1552.9,136,1581,136,1609,136C1637.6,136,1666,136,1694,121.8C1722.4,108,1751,79,1779,76.5C1807.1,74,1835,96,1864,107.7C1891.8,119,1920,119,1948,124.7C1976.5,130,2005,142,2019,147.3L2032.9,153L2032.9,170L2018.8,170C2004.7,170,1976,170,1948,170C1920,170,1892,170,1864,170C1835.3,170,1807,170,1779,170C1750.6,170,1722,170,1694,170C1665.9,170,1638,170,1609,170C1581.2,170,1553,170,1525,170C1496.5,170,1468,170,1440,170C1411.8,170,1384,170,1355,170C1327.1,170,1299,170,1271,170C1242.4,170,1214,170,1186,170C1157.6,170,1129,170,1101,170C1072.9,170,1045,170,1016,170C988.2,170,960,170,932,170C903.5,170,875,170,847,170C818.8,170,791,170,762,170C734.1,170,706,170,678,170C649.4,170,621,170,593,170C564.7,170,536,170,508,170C480,170,452,170,424,170C395.3,170,367,170,339,170C310.6,170,282,170,254,170C225.9,170,198,170,169,170C141.2,170,113,170,85,170C56.5,170,28,170,14,170L0,170Z"
        ></path>
      </svg>
    </div>
  );
}
