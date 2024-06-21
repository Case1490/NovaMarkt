import Heart from "../icons/Heart";

const CardProductos = ({
  product,
  fotoProducto,
  onFavoriteToggle,
  isFavorited,
}) => {
  const toggleFavorite = () => {
    onFavoriteToggle({ name: product, image: fotoProducto });
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 relative">
      <div className="h-48 flex items-center justify-center">
        <img
          src={fotoProducto}
          alt={product}
          className="object-contain h-full"
        />
      </div>
      <button
        className={`absolute top-2 right-2 focus:outline-none ${
          isFavorited ? "text-red-500" : "text-gray-400"
        }`}
        onClick={toggleFavorite}
      >
        <Heart isFavorited={isFavorited} />
      </button>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product}</div>
        <p className="text-gray-700 text-base">
          Descripción del producto aquí...
        </p>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <span className="font-bold text-lg">$99.99</span>
        <button className="bg-black text-white font-bold py-2 px-4 rounded">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CardProductos;
