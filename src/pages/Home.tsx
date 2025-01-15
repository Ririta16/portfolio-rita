import im1 from "../assets/logo.png";
import test7 from "../assets/test7.png";
import s1 from "../assets/s1.png";

export default function Home() {
  return (
    <div className="min-h-screen h-full relative chessboard overflow-hidden flex justify-center select-none">
      <img
        className="w-[17rem] absolute left-[1.5%] bottom-[23%] rotate-[-15deg]"
        src={im1}
      />
      <div className="circle">
        <div className="wel w-fit m-auto relative ml-[-60px] mt-[-35px]">
          <img
            className="w-[43rem] absolute right-[0rem] top-[3rem] z-10 im1"
            src={test7}
          />
          <img
            className="w-[130px] absolute left-[11.5rem] top-[15.2rem] z-30"
            src={s1}
          />
          <img
            className="w-[90px] absolute right-[25rem] top-[0rem] z-0"
            src={s1}
          />
          <img
            className="w-[120px] absolute right-[9rem] bottom-[0.5rem] z-30"
            src={s1}
          />
          <div className="z-10">Rita</div>
          <div className="ml-32 z-10">Portfolio</div>
        </div>
      </div>
    </div>
  );
}
