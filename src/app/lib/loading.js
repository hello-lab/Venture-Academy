import Image from "next/image";
export default function spinner() {
return (<div className="fixed inset-0 flex items-center flex-col justify-center bg-[#fcfcfd] text-black text-xl">
    <Image
      className="rounded-xl"
      src="/spinner.gif"
      alt="Next.js logo"
      width={380}
      height={68}
      priority
    />
    Loading your experience...
  </div>
);}