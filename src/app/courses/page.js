"use client";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const notices = [
    {
      id: 1,
      title: "Class 11-12",
      image: "/notice1.png",
    },
    {
      id: 2,
      title: "Class 9-10",
      image: "/notice2.png",
    },
    
  ];
  const [openNotice, setOpenNotice] = useState(null);

  const toggleNotice = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
 
          <div
          
            className="relative z-10 min-h-screen w-full p-5 snap-start"
          >
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
    
            <main className="flex flex-col gap-[32px] items-center sm:items-start relative z-10">
              <Image
                className="rounded-xl"
                src="/logo.png"
                alt="Next.js log</div>o"
                width={380}
                height={68}
                priority
              />
             
            <div style={{alignContent: "center",
    justifyContent: "center",
    alignItems: "center"}} className="flex w-[100vw] h-[80vh] align-center   flex-col sm:flex-row gap-4">
              <div className="h-[80dvh] w-[90vw] bg-green-900 p-6 border-14 border-[#A0522D]  shadow-inner rounded-s">
                <div className="flex justify-center items-center">
                  <p className=" sm:text-[10vh] text-[10vw] text-white text-center">Courses</p>
                </div>
               <hr style={{borderColor: '#ffff'}}/>
               <br/>
                <div className="flex flex-col gap-4">

                <div className="grid grid-cols-2 sm:grid-cols-10 gap-6 p-4">
    
         {notices.map((notice) => (
           <div
             key={notice.id}
             onClick={() => setOpenNotice(notice)}
             className="flex  flex-col items-center cursor-pointer group"
           >
             <img
               src={notice.image}
               alt={notice.title}
               className="w-24 h-24 object-cover rounded-lg shadow-lg border-4 border-[#A0522D] transition-all duration-300"
             />
             <p className="mt-2 text-[white] text-sm font-medium">
               {notice.title}
             </p>
           </div>
         ))}
   
         {/* Overlay Modal */}
         {openNotice && (
           <div
             onClick={() => setOpenNotice(null)}
             className="fixed inset-0   flex items-center justify-center z-50"
           >
             <div
             className="absolute inset-0 bg-black opacity-80 flex items-center justify-center z-10"
           ></div>
             <div className="relative z-11">
               <img
                 src={openNotice.image}
                 alt={openNotice.title}
                 className="w-[max-content] max-h-[90vh] object-contain rounded-xl border-4 border-[#A0522D] shadow-2xl"
               />
               <p className="mt-4 text-center text-white text-lg font-semibold">
                 {openNotice.title}
               </p>
               <button
                 onClick={() => setOpenNotice(null)}
                 className="absolute top-2 right-2 text-white text-3xl font-bold"
               >
                 ×
               </button>
             </div>
           </div>
         )}
       
      
    </div>
                </div>
                
                
                 </div>
            </div>
            </main>
          </div>
  );
}
