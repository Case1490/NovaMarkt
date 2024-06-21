import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainCenter from "./components/MainCenter";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [products, setProducts] = useState([]);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSearch = (query) => {
    if (query === "") {
      setSearchResults([]);
      setIsWriting(false);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsWriting(true);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json"); // Ruta al archivo JSON
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        const data = await response.json();
        setProducts(data); // Guardar productos en el estado
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen ${
          darkMode ? "dark" : ""
        } transition-colors duration-500 ease-in-out`}
      >
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onSearch={handleSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MainCenter
                searchResults={searchResults}
                products={products}
                isWriting={isWriting}
              />
            }
          />
          <Route path="/nosotros" element={<h1>Sobre Nosotros</h1>} />
          <Route path="/contacto" element={<h1>Contacto</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
