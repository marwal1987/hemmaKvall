import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-black">
      <div className="max-w-96 h-full flex flex-col items-center justify-center gap-12">
        <h1>VAD SKA DU TITTA PÅ IKVÄLL?</h1>
        <p className="xl:text-xl lg:text-lg md:text-base ">
          Hitta din favoritfilm genom att söka direkt i IMDB's filmdatabas nedan
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
