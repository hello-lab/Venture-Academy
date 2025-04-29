'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen w-full p-5 snap-start overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <main className="flex flex-col gap-[32px] items-center relative z-10 min-h-screen justify-center ">
        {/* Logo in the top-left corner */}
        <Image
          className="absolute top-4 left-4 rounded-xl"
          src="/logo.png"
          alt="Next.js logo"
          width={380}
          height={68}
          priority
        />

        {/* 📱 Phone Frame */}
        <div  className="relative bg-black overflow-show flex items-center justify-center w-[340px] h-[680px] border-[6px] border-gray-300 rounded-[2rem] shadow-xl ">

          {/* 🏠 Back button at regular position */}
          <div className="absolute top-[0] left-[100px] w-32 h-1 bg-gray-600 rounded-md shadow-md z-2"></div>

          {/* 📷 Camera dot */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full z-2" ></div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-9 bg-black rounded-full z-1"></div>

          {/* 🔊 Volume buttons */}
          <div className="absolute left-[-10px] top-[80px] w-1 h-12 bg-gray-400 rounded-xl"></div>
          <div className="absolute left-[-10px] top-[140px] w-1 h-8 bg-gray-400 rounded-xl"></div>

          {/* 🔘 Power button */}
          <div className="absolute right-[-10px] top-[110px] w-1 h-14 bg-gray-400 rounded-xl"></div>

          {/* Inside phone screen */}
          <div className="w-[90%] h-[95%] bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center gap-4 p-4  border-[1px] border-black-300 rounded-xl" >
            <button  onClick={() => {
          
          window.location.href = "/signup/form";
        }} className="bg-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md rounded-lg p-3 flex items-center gap-2 w-[90%]">
              <Image
                src="/gif1.gif"
                alt="gif1"
                width={80}
                height={80}
                className="rounded-full"
              />
              <p>Form</p>
            </button>
            <button 
            onClick={() => {
              
              window.location.href = "tel:+918100364748";
            }}
            className="bg-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md rounded-lg p-3 flex items-center gap-2 w-[90%]">
              <p>Call</p>
              <Image
                src="/gif2.gif"
                alt="gif2"
                width={80}
                height={80}
                className="rounded-full"
              />
            </button>
            <button
            
            onClick={() => {
              
              window.location.href = "mailto:ventureacademy.contact@gmail.com";
            }}
            className="bg-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md rounded-lg p-3 flex items-center gap-2 w-[90%]">
              <Image
                src="/gif3.gif"
                alt="gif3"
                width={80}
                height={80}
                className="rounded-full"
              />
              <p>Email</p>
            </button>
            <button
            onClick={() => {
              
              window.location.href = "https://wa.me/918100364748";
            }}
            className="bg-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md rounded-lg p-3 flex items-center gap-2 w-[90%]">
              <p>Whatsapp</p>
              <Image
                src="/gif4.gif"
                alt="gif4"
                width={80}
                height={80}
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
