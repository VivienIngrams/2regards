import Image from "next/image";

export default function Home() {
  return (
    <main className="font-italiana w-screen max-h-screen">
      <div className="w-[50px] h-screen left-0 top-0">
        <div className="left-[10px] top-[50%] absolute origin-top-left -rotate-90 text-black text-2xl font-normal font-['Inter']">
          2regards
        </div>
      </div>
      <div className="w-[1990px] h-[85%] left-[76px] top-[70px] flex-col absolute">
        <div className="h-[28%]  justify-start items-end gap-5 inline-flex">
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        </div>
        <div className="h-[28%]  justify-start items-end gap-5 inline-flex">
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        </div>
        <div className="h-[28%] justify-start items-end gap-5 inline-flex">
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        <Image src="/images/2regards.png" width={200} height={200} alt=""/>
        </div>
      </div>
      <div className="absolute left-[100px] bottom-0 justify-start items-start gap-14 inline-flex">
        <div className="text-black text-[17px] font-normal leading-loose">
          Products
        </div>
        <div className="text-black text-[17px] font-normal leading-loose">
          Studio
        </div>
        <div className="text-black text-[17px] font-normal leading-loose">
          Gallery
        </div>
        <div className="text-black text-[17px] font-normal leading-loose">
          About
        </div>
        <div className="text-black text-[17px] font-normal leading-loose">
          Contact
        </div>
      </div>
    </main>
  );
}
