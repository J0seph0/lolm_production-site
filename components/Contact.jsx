import React from "react";
import {AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai';
import{FaLinkedinIn} from 'react-icons/fa';
const Contact = () => {
  return (
    <div id="contact" className="w-screen h-flex text-center">
      <div className="w-full h-full mx-auto p-2 flex justify-center items-center gap-5">
        <div id="contactText" className="w-[400px]">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Have a vision?
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
           Reach out to discuss how we can make it a reality.
          </p>
        </div>
        <form action="https://formsubmit.co/9a3839919c0c7bbe68df89a5ddec6f33" method="POST" class="space-y-8 w-[400px]">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="border-none bg-[#ecf0f3] w-full"
              placeholder="Email"
              required
            ></input>
            <div className="width-[40px] h-1 bg-black">
            </div>
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
            </label>
            <input
              type="text"
              id="subject"
              name="_subject"
              class="bg-[#ecf0f3] border-none w-full"
              placeholder="Subject"
              required
            ></input>
            <div className="width-[40px] h-1 bg-black">
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class="bg-[#ecf0f3] border-none w-full"
              placeholder="Leave a comment..."
            ></textarea>
            <div className="width-[40px] h-1 bg-black">
            </div>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center bg-[#37355A] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
        <div className="gap-[100px] h-[200px]">
              <div className='m-4 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <a href="https://www.instagram.com/roundglassmedia">
                  <AiOutlineInstagram />
                  </a>
              </div>
              <div className='m-4 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
              <a href="https://www.facebook.com/profile.php?id=100094215166666">  
                  <AiOutlineFacebook />
                  </a>
              </div>
              <div className='m-4 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <FaLinkedinIn />
              </div>
              
        </div>
      </div>
    </div>
  );
};

export default Contact;
