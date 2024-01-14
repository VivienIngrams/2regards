import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <div className="md:p-16 mr-8 text-neutral-500 ">
      <div className=" grid md:grid-cols-2">
      <div className="m-6 text-center text-neutral-400">
          <p className=" text-[80px] font-normal font-italiana uppercase leading-[38px] tracking-tighter">
            2 regards{" "}
          </p>
          <p className=" text-[80px] font-normal font-italiana leading-[38px] tracking-tighter">
            Atelier
          </p>
        </div>
        <div className="mt-10">
          <p>
            2regards Atelier is a space dedicated to creation and visual arts,
            founded by Mathilde Cudeville and Paulo Bastos in 2019. One of their
            areas of action is advertising, through photography, video and
            graphic design. The Atelier has partnerships with various
            international companies.
          </p>
        </div>
       
      </div>
      <div className="my-8 mx-auto max-w-[60%] ">
        <p>
         The Atelier is also an art gallery, where numerous national and
          international artists are welcomed throughout the year. The artistic
          component of the gallery is complemented by the analogue
          photography laboratory, where training sessions for analogue capture
          and development are facilitated.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="">
          <div className="flex">
            <div className="flex">
              <Image
                src="/images/Mathilde2.jpeg"
                width={180}
                height={200}
                alt="Mathilde Cudeville"
              />
            </div>
            <div className="flex items-center">
              <h1 className="p-6 max-w-[160px] font-italiana text-4xl text-black leading-1">
                Mathilde Cudeville
              </h1>
            </div>
          </div>
          <p className="mt-6 pb-2 pr-14">
            Mathilde Cudeville absorbs the world around her and reflects it back
            with a highly personal poetic touch. She dissolves into the
            surroundings before revealing the most unusual elements, which are
            often the most expressive. Her connection to nature is profound,
            defending it by unveiling its absolute grandeur captured in the
            subtlest details. The same applies to her relationship with
            humanity.
          </p>
          <p className="pb-2 pr-14">
            It was through initiating a dreamlike photopoetry collaboration that
            the extent of Mathilde's imagination became apparent to me,
            seemingly boundless. Our shared reverie gave rise to improbable
            shots with seemingly unrelated subjects, such as a lighthouse in
            Saint-Pierre-et-Miquelon, a naked man in a forest, or a Tuareg tent.
            Yet, the underlying thread, however faint, naturally unfolds before
            the viewer's eye. It is in this unrestrained creation and recreation
            that Mathilde's unique talent resides. The exploration of her
            previous and ongoing works further solidified this impression.
            Initially delving into insularity and isolated territories, notably
            through a documentary on the Saint-Pierre-et-Miquelon archipelago
            ("Les onze mille vierges"), she then engaged in a correspondence
            book, playing the exquisite corpse game with a writer in Paris. This
            work is a fleeting photo/writing dialogue questioning the concept of
            solitude. Subsequently, she embarked on a series of self-portraits
            ("Rêverie Odisseia"), baring herself both literally and
            figuratively, driven by the desire to explore herself more and more,
            body and soul intertwined. "En suspension (S)" follows a similarly
            liberated dual approach, using otherness as a vehicle, without
            artifice or mask.{" "}
          </p>
          <p className="pb-2 pr-14">
            Speaking of the form, Mathildes artistic practice revolves around
            the photographic medium and silver printing, with her works
            oscillating between ambient photography and plastic photography.
            They are often exhibited in unexpected places, reflecting her daring
            nature. I invite poetry, intimacy, and uniqueness enthusiasts to
            meet Mathildes gaze. MICHEL LE ROUX Poet and friend
          </p>
        </div>

        
          
            <div className="pl-14">
          <div className="flex">
            <div className="flex">
              <Image
                className=""
                src="/images/Paulo2.jpeg"
                width={180}
                height={200}
                alt="Paulo Bastos"
              />
            </div>
            <div className="flex items-center">
              <h1 className="p-6 max-w-[160px] font-italiana text-4xl text-black leading-1">
                Paulo Bastos
              </h1>
            </div>
          </div>
          <p className="mt-6 pb-2">
            Paulo Bastos is a Portuguese video director based in Porto. After
            completing his higher education at HEI Lille in France, he worked as
            a civil engineering engineer. He expatriated to the USA, Central
            America, and the Nordic countries. His extensive travels fueled his
            passion for visual storytelling. In 2017, he embarked on a career as
            a video director. Currently, he collaborates with various clients in
            advertising, communication, and documentary projects through the
            company 2regards, which he co-founded with his partner Mathilde
            Cudeville.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
