"use client";
import Image from "next/image";
import { useEffect, useState,useRef } from "react";
export default function Home() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [phase, setPhase] = useState("Inhale");
  const [size, setSize] = useState("w-32 h-32");
  const [timeLeft, setTimeLeft] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const phases = [
    { name: "Inhale", duration: 4, size: "w-64 h-64" },
    { name: "Hold", duration: 3, size: "w-64 h-64" },
    { name: "Exhale", duration: 4, size: "w-32 h-32" },
    { name: "Hold", duration: 3, size: "w-32 h-32" },
  ];

  const currentIndexRef = useRef(0);

  const startPhase = () => {
    const currentPhase = phases[currentIndexRef.current];
    setPhase(currentPhase.name);
    setSize(currentPhase.size);
    setTimeLeft(currentPhase.duration);

    if (navigator.vibrate) navigator.vibrate(100);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      clearInterval(intervalRef.current);
      currentIndexRef.current =
        (currentIndexRef.current + 1) % phases.length;
      startPhase();
    }, currentPhase.duration * 1000);
  };

  const startExercise = () => {
    if (!isRunning) {
      setIsRunning(true);
      startPhase();
    }
  };

  const pauseExercise = () => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);


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
        alt="Next.js logo"
        width={380}
        height={68}
        priority
      />
      <div>
        <h1
          style={{ fontSize: "8vw", flexWrap: "wrap", display: "flex" }}
          className=" font-bold text-center flex-col flex;"
        >
          Welcome to{" "}
          <span style={{ textAlign: "center", color: "rgb(85, 85, 85)" }}>
            {" "}
            &nbsp;Venture Academy{" "}

        
          </span>
        </h1>
        
      </div>
      < div className="sm:hidden"> 
    { showStartScreen?   <div className="flex flex-col items-center justify-center rounded-xl p-8 bg-gradient-to-br from-green-100 via-green-150 to-green-400">
  <h1 className="text-5xl font-bold text-gray-800 drop-shadow-lg mb-6">
    Breathing Exercise
  </h1>
  <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
    Take a moment for yourself. Tap below to begin a guided breathing exercise and reset your mind.
  </p>
  <button
    onClick={() => setShowStartScreen(false)}
    className="px-6 py-3 bg-yellow-500 text-white rounded-2xl shadow-lg text-lg font-medium hover:bg-blue-700 transition"
  >
    Begin Exercise
  </button>
</div>:
  <div className="flex flex-col items-center justify-center p-16 rounded-xl bg-gradient-to-br from-green-200 via-green-300 to-green-400">
  <div
    className={`rounded-full bg-gradient-to-r from-green-600 to-green-700 shadow-2xl transition-all duration-4000 linear ${size}
    flex items-center justify-center ${isRunning ? "animate-pulse" : ""}`}
  >
    <span className="text-white text-4xl font-semibold">{timeLeft}</span>
  </div>

  <h1 className="text-5xl font-bold text-gray-800 mt-10 drop-shadow-lg">
    {phase}
  </h1>
  <p className="text-gray-600 mt-4">Focus on your breath </p>

  <div className="mt-10 flex gap-4">
    {!isRunning ? (
      <button
        onClick={startExercise}
        className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg text-lg font-medium hover:bg-green-600 transition"
      >
        Start
      </button>
    ) : (
      <button
        onClick={pauseExercise}
        className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow-lg text-lg font-medium hover:bg-red-600 transition"
      >
        Pause
      </button>
    )}
  </div>
</div>}</div>
    </main>
  </div>
  );
}
