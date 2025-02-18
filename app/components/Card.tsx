import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-[600px]">
      <div>
        <h1 className="text-lg">James Nguyen</h1>
        <small>11/2/2025</small>
        <p className="pb-3">
          <span className="text-yellow-400"> A Docker file is here</span>, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi autem
          illo aut perferendis eligendi labore? Esse culpa inventore sapiente
          debitis quis.
        </p>
        <div className="">
          <Image
            src={
              "https://images.pexels.com/photos/21430967/pexels-photo-21430967/free-photo-of-plate-of-snacks-on-a-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10"
            }
            alt=""
            width={200}
            height={200}
            className="w-full rounded-xl"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
