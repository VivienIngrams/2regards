import React from "react";

const Contact = () => {
  return (
    <div className="relative h-full mr-12">
      <div className="w-4 md:w-6 z-50 fixed h-screen right-0 top-0">
        <div className="right-0 top-4 md:top-6 relative min-h-screen border-l-black border-[1px] bg-stone-200" />
      </div>
      {/* Newsletter Subscription Form */}
      <div className="relative flex flex-col items-end">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email here"
          className="w-[400px] h-8 p-2 border border-black rounded-sm my-2"
        />
        <button
          type="submit"
          className="bg-neutral-500 text-white h-8 px-4 border border-black rounded-sm "
        >
          Subscribe to our newsletter
        </button>
      </div>

      {/* Gallery Information */}
      <div className="absolute left-14 top-8 w-2/5">
        <div className="text-black text-5xl font-normal font-italiana pb-6 border-black border-b-[1px]">
          gallery.
        </div>
        <div className="w-96 h-80 mt-8 text-neutral-500 text-lg font-light leading-relaxed">
          <div>Rua do Duque da Terceira 358</div>
          <div>4300-096 Porto</div>
          <div>
            Wednesday to Saturday <span>2p.m - 7p.m.</span>
          </div>
          <div>atelier@2regards.com</div>
          <div>+351 933 119 390</div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="absolute right-10 bottom-20 w-2/5">
        <div className="text-black text-5xl font-normal font-italiana pb-6 border-black border-b-[1px]">
          contact.
        </div>
        <div className="w-96 h-64 mt-4 text-right text-neutral-500 text-lg font-light leading-relaxed">
          <div>Mathilde Cudeville copy</div>
          <div>mathilde@2regards.com</div>
          <div>Tel: +33 6 79 76 14 88</div>
          <div>Paulo Bastos</div>
          <div>paulo@2regards.com</div>
          <div>Tel: +33 7 87 38 36 32</div>
          <div>www.2regards.com</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
