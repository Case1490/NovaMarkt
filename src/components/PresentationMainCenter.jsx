const PresentationMainCenter = () => {
  return (
    <div className="fondoPresentation flex items-center justify-center">
      <div className=" text-center">
        <h1 className=" text-6xl text-white italic font-bold">NovaMarket</h1>
        <p className="text-xl text-white">
          Encuentra calidad y variedad al mejor precio, siempre para ti
        </p>

        <a href="#productos" className="mt-10 block text-white w-[140px] m-auto rounded-xl py-2 borderWhite hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Ver más</a>
      </div>
    </div>
  );
};

export default PresentationMainCenter;
