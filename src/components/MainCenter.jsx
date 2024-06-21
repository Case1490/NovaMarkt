import PresentationMainCenter from "./PresentationMainCenter";
import Productos from "./Productos";

const MainCenter = ({searchResults, products, isWriting}) => {

    return (
      <div className="">
        {isWriting ? "" : <PresentationMainCenter />}
        <Productos searchResults={searchResults} products={products} />
      </div>
    );
}
 
export default MainCenter;