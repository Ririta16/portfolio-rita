import { FaFacebook, FaGithub, FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage("Copied to clipboard!");
      setTimeout(() => setCopyMessage(""), 2000); // Clear the message after 2 seconds
    });
  };
  return (
    <div className="bg-[#83d3f6] text-3xl min-h-screen h-full bgcontact relative px-5 py-7 z-0">
      <div className="container w-fit ml-[280px]">
        <div className="text text-c text-[#FBD256]">C</div>
        <div className="text text-o text-[#009A5E]">O</div>
        <div className="text text-n text-[#f05749]">N</div>
        <div className="text text-t text-[#FBD256]">T</div>
        <div className="text text-a text-[#FBD256]">A</div>
        <div className="text text-c2 text-[#009A5E]">C</div>
        <div className="text text-t2 text-[#f05749]">T</div>
      </div>
      <div className="flex items-center px-28">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="form"
          target="_blank"
        >
          <input
            type="hidden"
            name="access_key"
            value="30e9bb2d-1ed2-45db-8ce9-16bb15a8062e"
          />
          <div className="form-header">
            <div className="flex py-3">
              <div className="form-header-button close"></div>
              <div className="form-header-button maximize"></div>
              <div className="form-header-button minimize"></div>
            </div>
            <div>
              <IoClose />
            </div>
          </div>
          <div className="flex px-8 py-7 text-xl flex-col gap-4">
            <div className="relative">
              <label className="absolute text-[28px] top-[10px] left-[10px]">
                <FaRegUser />
              </label>
              <input
                name="username"
                required
                className=" w-full border-4 text-[#009A5E] border-black rounded-lg py-2 px-3 pl-11"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="relative">
              <label className="absolute text-[30px] top-[10px] left-[10px]">
                <HiOutlineMail />
              </label>
              <input
                name="email"
                required
                className=" w-full border-4 text-[#009A5E] border-black rounded-lg py-2 px-3 pl-11"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={5}
                className=" w-full border-4 text-[#009A5E] border-black rounded-lg py-2 px-3"
                placeholder="Your Massage"
              />
            </div>
            <div className="flex flex-row gap-5">
              <motion.div whileTap={{ scale: 0.85 }}>
                <button
                  type="submit"
                  className="w-[230px] border-4 border-black py-2 rounded-lg bg-[#009A5E] text-[#FBD256] uppercase submit"
                >
                  Submit
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.85 }}>
                <button
                  type="reset"
                  className="w-[230px] border-4 border-black py-2 rounded-lg bg-[#009A5E] text-[#FBD256] uppercase submit"
                >
                  Clear
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </motion.div>
            </div>
          </div>
        </form>
        <div className="contact flex flex-col m-auto text-3xl gap-12">
          <div className="relative cursor-pointer">
            <motion.a
              onClick={() => copyToClipboard("095-138-3141")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
              className="flex = items-center border-4 border-black py-3 rounded-lg bg-[#FBD256] text-[#009A5E] w-[450px]"
            >
              <FaPhone className="mx-5 w-10 h-7" />
              (+66) 95-138-3141
            </motion.a>

            <div className="absolute top-[-3.2rem] ml-[4rem] font-normal text-[#f05749]">
              {copyMessage}
            </div>
          </div>
          <motion.a
            href="https://github.com/Riritaaaa"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            className="box flex items-center border-4 border-black py-3 rounded-lg bg-[#009A5E] text-[#FBD256] w-[450px]"
          >
            <FaGithub className="mx-5 w-9 h-9" /> github.com/Riritaaaa
          </motion.a>
          <motion.a
            href="mailto:rita_ch@kkumail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            className="flex items-center border-4 border-black py-3 rounded-lg bg-[#FBD256] text-[#009A5E] w-[450px]"
          >
            <MdEmail className="mx-5 w-9 h-9" />
            rita_ch@kkumail.com
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100009352617261"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            className="flex items-center border-4 border-black py-3 rounded-lg bg-[#009A5E] text-[#FBD256] w-[450px]"
          >
            <FaFacebook className="mx-5 w-9 h-9" /> facebook.com/Rita Rt
          </motion.a>
        </div>
      </div>
    </div>
  );
}
