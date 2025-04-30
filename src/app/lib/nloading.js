import Image from "next/image";
export default function spinner() {
return (<div className="absolute z-100 inset-0 flex items-center flex-col justify-center text-black text-xl">
   <video
          autoPlay
          
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/nloading.mp4" type="video/mp4" />
        </video>
  </div>
);}