import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed left-0 bottom-0">
    <div className=" h-8  w-screen border-t-black border-2  bg-stone-200">
      <div className="ml-20 justify-start items-start gap-14 inline-flex">
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
    </div>
  </footer>
  )
}

export default Footer