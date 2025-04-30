"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "../../lib/loading";
export default function Home() {
    const [isFullyLoaded, setIsFullyLoaded] = useState(false);  
    const [isiFullyLoaded, setIsiFullyLoaded] = useState(true);  

    const handleIframeLoad = () => {
     console.log("Iframe loaded");
    };
    
    useEffect(() => {
      // Check if already loaded (could happen on fast connections)
      if (document.readyState === "complete") {
        setIsFullyLoaded(true);
      } else {
        window.addEventListener("load", () => {
          setIsFullyLoaded(true);
        });
      }
    }, []);
  
  return (
    <> {!isFullyLoaded?<Spinner/>:
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
                alt="Next.js logo"
                width={380}
                height={68}
                priority
              />
              <div style={{    display: 'flex',

    width: '100dvw',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80vh'}}>
      
      {isiFullyLoaded?
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScKfzG5H3ELs92dTENekI27oXW-UcUTKkjYNhdCgZdQG-PEDA/viewform?embedded=true" onLoad={()=>console.log(true)} style={{ backgroundColor:'rgba(80, 60, 45, 0.52)',    borderRadius: '20px', width: '80dvw', height: '100%' }} frameborder="1" marginheight="1" marginwidth="1">Loading…</iframe>:
              <Spinner/>}
              </div>
            </main>
          </div>}</>
  );
}
