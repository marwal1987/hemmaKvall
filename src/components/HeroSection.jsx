const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center p-12 bg-gradient-to-tr from-emerald-500 to-gray-400 ">
      <div className="max-w-96 h-full flex flex-col items-center justify-center gap-12">
        <h1>VAD SKA DU TITTA PÅ IKVÄLL?</h1>
        <p className="xl:text-xl lg:text-lg md:text-base ">
          Hitta din favoritfilm genom att söka direkt i OMDB's filmdatabas nedan
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
