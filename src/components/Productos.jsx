import { useState } from "react";
import CardProductos from "./CardProductos";

const Productos = ({ searchResults, products }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (product) => {
    if (favorites.find((fav) => fav.name === product.name)) {
      // Si el producto ya está en favoritos, lo quitamos
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.name !== product.name)
      );
    } else {
      // Si el producto no está en favoritos, lo añadimos
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  };

  return (
    <div className="mt-10 w-[90%] m-auto" id="productos">
      <h1 className="text-3xl text-center tituloProductos">
        Nuestros Productos
      </h1>
      <div className="mt-10">
        <ul className="grid grid-cols-4 gap-4">
          {(searchResults.length > 0 ? searchResults : products).map(
            (product, index) => (
              <li key={index}>
                <CardProductos
                  product={product.name}
                  fotoProducto={product.image}
                  onFavoriteToggle={handleFavoriteToggle}
                  isFavorited={favorites.some(
                    (fav) => fav.name === product.name
                  )}
                />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl">Favoritos</h2>
        <div className="grid grid-cols-4 gap-4">
          {favorites.map((favorite, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={favorite.image}
                alt={favorite.name}
                className="h-24 object-contain mb-2"
              />
              <span>{favorite.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
