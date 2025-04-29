"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect, useRef, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import Globe from "../proejctile/page";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const scrollableRef = useRef(null);
  const elent = useRef(null);
  const [chosen, setChosen] = useState(null);
  const [positions, setPositions] = useState({});
  const containerRef = useRef(null);
  const [color, setColor] = useState("#3da557");
  const [color1, setColor1] = useState("#e3e98a");
  const [windowWidth, setWindowWidth] = useState(0);
  const [items,setItems] =  useState({name:"",img:null,bgimage:null, desc:``,class:"", color:"", books:[{} ]})
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const teachers=[
    {name:"Shantanu Sir",img:"/shantanusir.png",bgimage:"bg.png", desc:`The BEST physics teacher is in Venture Academy. He is here to help you in physics as well as to be a better version of yourself. He will definitely make you enjoy and fall in love with physics`,class:"CLASSES 9 & 10", color:"rgb(61, 165, 87)",
      books:[
      {
        id: 1,
        title: "",
        image: "https://m.media-amazon.com/images/I/91YhPJBbbnL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        image: "https://m.media-amazon.com/images/I/A1JJs8xrIuL._SL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        image: "https://m.media-amazon.com/images/I/41qRBhsVMqL._SY425_.jpg",
      },
      {
        id: 4,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._AC_UY218_.jpg",
      },
      {
        id: 5,
        title: "",
        image: "https://m.media-amazon.com/images/I/51LGX-587cL._SL1000_.jpg",
      },
      {
        id: 6,
        title: "",
        image: "https://m.media-amazon.com/images/I/61nyuacPuxL._SL1343_.jpg",
      },
      {
        id: 7,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._SL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        image: "https://m.media-amazon.com/images/I/61mLzRzV7BL._SX342_SY445_.jpg",
      },
      {
        id: 9,
        title: "",
        image: "https://m.media-amazon.com/images/I/71+rN5eBgoL._SY385_.jpg",
      },
      {
        id: 10,
        title: "",
        image: "https://m.media-amazon.com/images/I/41bIdyNc1AL._SX342_SY445_.jpg",
      },
      {
        id: 11,
        title: "",
        image: "https://m.media-amazon.com/images/I/51vUcyZsYlL._SY445_SX342_.jpg",
      },
    ]},
    {name:"Agastya Sir",img:"/agastya.jpg",bgimage:"chembg.png", desc:`A Genius teacher is coming in Venture Academy.He is here to help in Chemistry and Maths as well as help you to be a better version and also help you to enjoy and apply the concepts of subjects `,class:"CLASSES 9 & 10", color:"rgb(61, 165, 87)",
      books:[
      {
        id: 1,
        title: "",
        image: "https://m.media-amazon.com/images/I/91YhPJBbbnL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        image: "https://m.media-amazon.com/images/I/A1JJs8xrIuL._SL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        image: "https://m.media-amazon.com/images/I/41qRBhsVMqL._SY425_.jpg",
      },
      {
        id: 4,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._AC_UY218_.jpg",
      },
      {
        id: 5,
        title: "",
        image: "https://m.media-amazon.com/images/I/51LGX-587cL._SL1000_.jpg",
      },
      {
        id: 6,
        title: "",
        image: "https://m.media-amazon.com/images/I/61nyuacPuxL._SL1343_.jpg",
      },
      {
        id: 7,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._SL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        image: "https://m.media-amazon.com/images/I/61mLzRzV7BL._SX342_SY445_.jpg",
      },
      {
        id: 9,
        title: "",
        image: "https://m.media-amazon.com/images/I/71+rN5eBgoL._SY385_.jpg",
      },
      {
        id: 10,
        title: "",
        image: "https://m.media-amazon.com/images/I/41bIdyNc1AL._SX342_SY445_.jpg",
      },
      {
        id: 11,
        title: "",
        image: "https://m.media-amazon.com/images/I/51vUcyZsYlL._SY445_SX342_.jpg",
      },
    ]}
    ,{name:"Surma Maam",img:"/maam.jpg",bgimage:"englisbg.png", desc:`Meet your English teacher - a master of words and wisdom. With a love for language and literature, they turn lessons into lively stories. Grammar, vocabulary, and confidence - all polished to perfection! `,class:"CLASSES 9 - 12", color:"rgb(61, 165, 87)",
      books:[
      {
        id: 1,
        title: "",
        image: "https://m.media-amazon.com/images/I/91YhPJBbbnL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        image: "https://m.media-amazon.com/images/I/A1JJs8xrIuL._SL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        image: "https://m.media-amazon.com/images/I/41qRBhsVMqL._SY425_.jpg",
      },
      {
        id: 4,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._AC_UY218_.jpg",
      },
      {
        id: 5,
        title: "",
        image: "https://m.media-amazon.com/images/I/51LGX-587cL._SL1000_.jpg",
      },
      {
        id: 6,
        title: "",
        image: "https://m.media-amazon.com/images/I/61nyuacPuxL._SL1343_.jpg",
      },
      {
        id: 7,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._SL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        image: "https://m.media-amazon.com/images/I/61mLzRzV7BL._SX342_SY445_.jpg",
      },
      {
        id: 9,
        title: "",
        image: "https://m.media-amazon.com/images/I/71+rN5eBgoL._SY385_.jpg",
      },
      {
        id: 10,
        title: "",
        image: "https://m.media-amazon.com/images/I/41bIdyNc1AL._SX342_SY445_.jpg",
      },
      {
        id: 11,
        title: "",
        image: "https://m.media-amazon.com/images/I/51vUcyZsYlL._SY445_SX342_.jpg",
      },
    ]}
    ,
    {name:"Mayank Sir",img:"/mayank.jpg",bgimage:"economicsbg.png", desc:`A genius teacher is coming in Venture Academy. He is here to help in Economics as well as help you to be a better version and also help you to enjoy and apply the concepts of subject `,class:"CLASS 11 & 12", color:"rgb(61, 165, 87)",
      books:[
      {
        id: 1,
        title: "",
        image: "https://m.media-amazon.com/images/I/91YhPJBbbnL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        image: "https://m.media-amazon.com/images/I/A1JJs8xrIuL._SL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        image: "https://m.media-amazon.com/images/I/41qRBhsVMqL._SY425_.jpg",
      },
      {
        id: 4,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._AC_UY218_.jpg",
      },
      {
        id: 5,
        title: "",
        image: "https://m.media-amazon.com/images/I/51LGX-587cL._SL1000_.jpg",
      },
      {
        id: 6,
        title: "",
        image: "https://m.media-amazon.com/images/I/61nyuacPuxL._SL1343_.jpg",
      },
      {
        id: 7,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._SL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        image: "https://m.media-amazon.com/images/I/61mLzRzV7BL._SX342_SY445_.jpg",
      },
      {
        id: 9,
        title: "",
        image: "https://m.media-amazon.com/images/I/71+rN5eBgoL._SY385_.jpg",
      },
      {
        id: 10,
        title: "",
        image: "https://m.media-amazon.com/images/I/41bIdyNc1AL._SX342_SY445_.jpg",
      },
      {
        id: 11,
        title: "",
        image: "https://m.media-amazon.com/images/I/51vUcyZsYlL._SY445_SX342_.jpg",
      },
    ]},
    {name:"Manoj Sir",img:"/manoj.jpg",bgimage:"accountsbg.png", desc:`An experienced teacher is coming in Venture Academy. Meet a dynamic teacher popularly known as Pandey sir, He will teach Accountancy and Business Studies With a knack for simplifying concepts, he connects classroom learning to the corporate world, making commerce both clear and captivating. `,class:"CLASSES 11 & 12", color:"rgb(61, 165, 87)",
      books:[
      {
        id: 1,
        title: "",
        image: "https://m.media-amazon.com/images/I/91YhPJBbbnL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        image: "https://m.media-amazon.com/images/I/A1JJs8xrIuL._SL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        image: "https://m.media-amazon.com/images/I/41qRBhsVMqL._SY425_.jpg",
      },
      {
        id: 4,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._AC_UY218_.jpg",
      },
      {
        id: 5,
        title: "",
        image: "https://m.media-amazon.com/images/I/51LGX-587cL._SL1000_.jpg",
      },
      {
        id: 6,
        title: "",
        image: "https://m.media-amazon.com/images/I/61nyuacPuxL._SL1343_.jpg",
      },
      {
        id: 7,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._SL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        image: "https://m.media-amazon.com/images/I/61mLzRzV7BL._SX342_SY445_.jpg",
      },
      {
        id: 9,
        title: "",
        image: "https://m.media-amazon.com/images/I/71+rN5eBgoL._SY385_.jpg",
      },
      {
        id: 10,
        title: "",
        image: "https://m.media-amazon.com/images/I/41bIdyNc1AL._SX342_SY445_.jpg",
      },
      {
        id: 11,
        title: "",
        image: "https://m.media-amazon.com/images/I/51vUcyZsYlL._SY445_SX342_.jpg",
      },
    ]},



    {name:"Shantanu Sir",img:"/shantanusir.png",bgimage:"bg.png", desc:`The BEST physics teacher is in Venture Academy. He is here to help in physics as well as help you to be a better version of yourself. He will definitely make you enjoy and fall in love with physics`,class:"CLASS 9 & 10", color:"rgb(61, 165, 87)",
      books:[
      {
        id: 1,
        title: "",
        image: "https://m.media-amazon.com/images/I/91YhPJBbbnL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        image: "https://m.media-amazon.com/images/I/A1JJs8xrIuL._SL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        image: "https://m.media-amazon.com/images/I/41qRBhsVMqL._SY425_.jpg",
      },
      {
        id: 4,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._AC_UY218_.jpg",
      },
      {
        id: 5,
        title: "",
        image: "https://m.media-amazon.com/images/I/51LGX-587cL._SL1000_.jpg",
      },
      {
        id: 6,
        title: "",
        image: "https://m.media-amazon.com/images/I/61nyuacPuxL._SL1343_.jpg",
      },
      {
        id: 7,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._SL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        image: "https://m.media-amazon.com/images/I/61mLzRzV7BL._SX342_SY445_.jpg",
      },
      {
        id: 9,
        title: "",
        image: "https://m.media-amazon.com/images/I/71+rN5eBgoL._SY385_.jpg",
      },
      {
        id: 10,
        title: "",
        image: "https://m.media-amazon.com/images/I/41bIdyNc1AL._SX342_SY445_.jpg",
      },
      {
        id: 11,
        title: "",
        image: "https://m.media-amazon.com/images/I/51vUcyZsYlL._SY445_SX342_.jpg",
      },
    ]},
    {name:"Shantanu Sir",img:"/shantanusir.png",bgimage:"bg.png", desc:`The BEST physics teacher is in Venture Academy. He is here to help in physics as well as help you to be a better version of yourself. He will definitely make you enjoy and fall in love with physics`,class:"CLASS 9 & 10", color:"rgb(61, 165, 87)",
      books:[
      {
        id: 1,
        title: "",
        image: "https://m.media-amazon.com/images/I/91YhPJBbbnL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        image: "https://m.media-amazon.com/images/I/A1JJs8xrIuL._SL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        image: "https://m.media-amazon.com/images/I/41qRBhsVMqL._SY425_.jpg",
      },
      {
        id: 4,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._AC_UY218_.jpg",
      },
      {
        id: 5,
        title: "",
        image: "https://m.media-amazon.com/images/I/51LGX-587cL._SL1000_.jpg",
      },
      {
        id: 6,
        title: "",
        image: "https://m.media-amazon.com/images/I/61nyuacPuxL._SL1343_.jpg",
      },
      {
        id: 7,
        title: "",
        image: "https://m.media-amazon.com/images/I/81w5BKQkbtL._SL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        image: "https://m.media-amazon.com/images/I/61mLzRzV7BL._SX342_SY445_.jpg",
      },
      {
        id: 9,
        title: "",
        image: "https://m.media-amazon.com/images/I/71+rN5eBgoL._SY385_.jpg",
      },
      {
        id: 10,
        title: "",
        image: "https://m.media-amazon.com/images/I/41bIdyNc1AL._SX342_SY445_.jpg",
      },
      {
        id: 11,
        title: "",
        image: "https://m.media-amazon.com/images/I/51vUcyZsYlL._SY445_SX342_.jpg",
      },
    ]}
  ]
  function randomColor() {
    var color = '#' + Math.random().toString(16).substr(2, 6);
    var color1 = '#' + Math.random().toString(16).substr(2, 6);
   setColor(color);
   setColor1(color1);
    console.log(color);
  }

  const handleChoose = (id, e) => {
    if (chosen === id) {
      setChosen(null);
      setPositions({});
      setItems({name:"",img:null,bgimage:null, desc:``,class:"", color:"", books:[{} ]})
      console.log("c", chosen);
      return;
    }
    setItems(teachers[id-1])
    const rect = e.target.getBoundingClientRect();
    setPositions({
      top: rect.top,
      left: rect.left,
      width: rect.width,
    });
    setChosen(id);
    console.log("c", chosen);
  };
let int
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
    const handleScroll = () => {
      const scrollTop = scrollableRef.current.scrollTop;
      console.log("Scroll distance:", scrollTop / elent.current.scrollHeight);
    };
   int= setInterval(randomColor,500)
    const scrollableElement = scrollableRef.current;
    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const profiles = [
    { name: "Physics", img: "/profile2.png", color: "rgb(127, 199, 127)" },
    { name: "Chemistry & Maths", img: "/profile6.png", color: "#a6a6f8" },
    { name: "English", img: "/profile4.png", color: "rgb(242, 255, 171)" },
    { name: "Economics", img: "/profile5.png", color: "rgb(255, 164, 255)" },
    { name: "Accountancy & Business ", img: "/profile7.png", color: "rgb(186, 255, 255)" },
  ];
  return (
    <div
      ref={scrollableRef}
      className="relative flex flex-col font-[family-name:var(--chonk)] overflow-x-hidden smooth-scroll snap-y snap-mandatory overflow-y-scroll h-screen"
    >
      {/* Section 1
      <div
        ref={elent}
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
          <div>
            <h1
              style={{ fontSize: "8vw", flexWrap: "wrap", display: "flex" }}
              className=" font-bold text-center sm:text-left"
            >
              Welcome to{" "}
              <span style={{ color: "rgb(85, 85, 85)" }}>
                {" "}
                &nbsp;Venture Academy{" "}
              </span>
            </h1>
          </div>
        </main>
      </div> */}

      {/* Section 2 */}
      <div className="relative z-10 min-h-[100dvh]  w-full p-5 bg-[#FAC9C9] snap-start hide-scrollbar">
        {" "}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src="/pendulum.mp4" type="video/mp4" />
        </video>
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
          <div>
            <Image
              className="rounded-xl"
              src="/logo.png"
              alt="Next.js logo"
              width={380}
              height={68}
              priority
            />

            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[0] top-[0] z-10 w-full "
            >
              <div className="w-[100vw] flex sm:justify-center  justify-start items-center   h-screen" >
              <div className="max-w-[40vw]">
                  {" "}
                  <h1
 style={{ 
                  
  color: 'rgb(255, 255, 255)',
  justifyContent: 'center' }}
                      className="text-5xl font-bold text-left"
                  >
                     WE EMPOWER YOU TO TURN YOUR IDEAS INTO 
                    <span > VENTURES, </span>
                    ONE LESSON AT A TIME.{" "}
                  </h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[0] top-[0] z-10 w-full "
            >
              <div className="w-[100vw] flex sm:justify-center  justify-start items-center   h-screen" >
              <div className="max-w-[40vw]">
                  {" "}
                  <h1
 style={{ 
              
  color: 'rgba(255, 255, 255, 0)',
  justifyContent: 'center' }}
                      className="text-5xl font-bold text-left"
                  >
                     WE EMPOWER YOU TO TURN YOUR IDEAS INTO 
                    <span style={{ color: "rgb(238, 80, 80)" }} > VENTURES, </span>
                    ONE LESSON AT A TIME.{" "}
                  </h1>
                </div>
              </div>
            </motion.div>
            
          </div>
        </main>
      </div>
      {/* Section 3 <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src="/chem.mp4" type="video/mp4" />
        </video>*/}
      <div className="relative z-10 min-h-[100dvh]  w-full  bg-[#FAC9C9] snap-start hide-scrollbar">
        {" "}
         <div className="absolute h-[100dvh] w-[100dvw] z-10"> <Globe /> </div>
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
        
          <div>
         
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[0] top-[0] z-10 w-full "
            >
              <div className="w-[100vw] flex sm:justify-center  justify-start items-center   h-screen" >
              <div className="max-w-[40vw]">
                  {" "}
                  <h1
                    style={{ color: "rgb(238, 80, 80)" }}
                    className="text-5xl font-bold text-left"
                  >
                    LEARNING ANYWHERE, VENTURING EVERYWHERE{" "}
                  </h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[0] top-[-0vh] z-10 w-full "
            >
              <div className="w-[100vw] flex sm:justify-center  justify-start items-center   h-screen" >
              <div className="max-w-[40vw]">
                  {" "}
                  <h1
                    style={{ color: "rgba(255, 255, 255, 0)" }}
                    className="text-5xl  font-bold text-center sm:text-left"
                  >
                    LEARNING ANYWHERE,{" "}
                    <span style={{ color: "rgb(255, 255, 255)" }}>
                      VENTURING
                    </span>
                    , EVERYWHERE{" "}
                  </h1>
                </div>
              </div>
            </motion.div>
            
          </div>
         
        </main>
      </div>

      {/* Section 4 */}
      <div
        className="relative z-10 min-h-[100dvh]  w-full p-5 bg-[#1f1f1f] snap-start hide-scrollbar"
       
       
        style={{
          backgroundImage: isSmallScreen ? `url(${items.img})` : `url(/${items.bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
            className="absolute inset-0 w-full h-full bg-black opacity-60 top-0"
        ></div>
        <main className="flex flex-col gap-[32px] items-center lm:items-start"  >
          <Image
            className="rounded-xl absolute left-[1vw] z-10"
            src="/LOGO1.png"
            alt="Next.js logo"
            width={200}
            height={48}
            priority
          />
          <div  style={{ display: !chosen ? "none" : "block" }} className="absolute min-h-screen flex flex-col items-center justify-center  text-white">
            <div className="w-[100vw] flex  items-center h-screen">
              <div className=" absolute ">
                <div className=" relative left-[10dvw] sm:w-[30dvw] w-[90vw]   ">
                  <div
                    style={{
                      display: "flex",

                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "left",
                    }}
                  >
                    <Image
                      className="rounded-xl z-10 inline"
                      src="/teacher.png"
                      alt="Next.js logo"
                      width={isSmallScreen?100:200}
                      height={50}
                      priority
                    />
                    <h1
                      style={{ color: "rgb(255, 255, 255)", fontSize: isSmallScreen?'6vh':"10vh" }}
                      className="text-5xl font-bold text-left"
                    >
                      {items.name}&nbsp;
                    </h1>
                  </div>
                  <p style={{ color: "rgb(223, 168, 168)" }}>{items.class}</p>
                  <p style={{ color: "rgb(192, 192, 192)" }}>
                    {items.desc}{" "}
                  </p>
                </div>
                 
                <div
                  className="p-5  
"
                >
                 
                  <h2 className="text-2xl font-bold text-white mb-4">
                   <br/> Trending Now
                  </h2>

                  <motion.div
                    className="overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <motion.div
                      drag="x"
                      dragConstraints={{
                        left: -((items.books.length -9) *( elent.innerWidth/10)) ,
                        right: 0,
                      }}
                      className="flex gap-4"
                    >
                      {items.books.map((item) => (
                        <motion.div
                          key={item.id}
                          className="min-w-[160] h-[220] bg-gray-800 rounded-2xl overflow-hidden relative cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            draggable="false"
                            className="w-full h-full object-cover cursor-pointer"
                          />
                          <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black via-transparent to-transparent text-white text-sm font-semibold">
                            {item.title}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <div
                style={{ backgroundColor: "rgb(61, 165, 87)" }}
                className="rounded-xl  absolute right-[10vw] z-0 top-[10vh] flex justify-center items-center"
              >
               {isSmallScreen?<></> :<Image
                  className="rounded-xl"
                  src={items.img}
                  alt="Next.js logo"
                  width={300}
                  height={48}
                  priority
                />}
              </div>
            </div>
          </div>



          <div className="min-h-screen flex flex-col items-center justify-center  text-white">
            <h1
              className="text-4xl font-bold mb-8 z-1"
              style={{ display: chosen ? "none" : "block" }}
            >
              Who’s teaching?
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
              {profiles.map((item, index) => (
                <AnimatePresence key={index + 1}>
                  {chosen !== index + 1 && chosen !== null ? null : (
                    <>
                      {" "}
                      <motion.div
                        key={index + 1}
                        onClick={(e) => handleChoose(index + 1, e)}
                        initial={{ opacity: 1 }}
                        animate={
                          chosen === null
                            ? { opacity: 1, x: 0, y: 0, scale: 1 }
                            : chosen === index + 1
                            ? {
                                x:
                                  windowWidth -
                                  positions.left -
                                  positions.width,
                                y: -positions.top - (isSmallScreen ? 10 : 55),

                                scale: 0.35,
                                duration: 0.8,
                                transition: { type: "tween" },
                              }
                            : { opacity: 0 }
                        }
                        exit={{ opacity: 0 }}
                        className="w-32 h-32 sm:w-40 sm:h-60  overflow-hidden "
                        style={{
                          position:
                            chosen === index + 1 ? "absolute" : "relative",
                          top: chosen === index + 1 ? positions.top : "auto",
                          left: chosen === index + 1 ? positions.left : "auto",
                          zIndex: chosen === index + 1 ? 50 : "auto",
                        }}
                      >
                        <Image
                          src={item.img}
                          alt={item.name}
                          style={{ backgroundColor: item.color }}
                          width={160}
                          height={160}
                          className="object-cover w-32 h-32 sm:w-40 sm:h-40 p-2 rounded-3xl  border-4 border-transparent rounded-xl hover:border-white transition-all duration-300"
                        />
                        <p
                          style={{ display: chosen ? "none" : "block" }}
                          className="mt-4 text-lg group-hover:text-gray-300"
                        >
                          {item.name}
                        </p>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              ))}
              {console.log(scrollY)}
            </div>
          </div>
        </main>


      </div>



{/* Section 5 */}
<div className="relative z-10 min-h-[100dvh] w-full p-5 bg-[#0d0c0d] snap-start hide-scrollbar">
  <main className="flex flex-col gap-[32px] items-center justify-center h-full">
    <div className="w-full flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{backgroundColor: color, borderColor: color1 , border:"4px solid white" , color:color1}}
        className="px-16 py-8 rounded-xl  text-4xl overflow-hidden group w-3/4"
        onClick={() => {
          clearInterval(int);
          window.location.href = "/signup/form";
        }
        }
      >
        <span className="relative z-10" style={{ color:color1}}>Join Us Now</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </div>
  </main>
</div>

{/* Footer */}

     
    </div>
  );
}
