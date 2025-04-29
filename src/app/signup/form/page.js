import Image from "next/image";

export default function Home() {
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
              <div style={{    display: 'flex',

    width: '100dvw',
    flexDirection: 'column',
    height: '80vh'}}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScALwNsr5dg6mRODnZWFgaIb4lyHgcVYzxzZDkshqmc9Sudqw/viewform?embedded=true" style={{ width: 'fitContent', height: '100%' }} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
            </main>
          </div>
  );
}
