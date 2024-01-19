import AppRouter from "./router/AppRouter";
import { ProductProvider } from "./context/ProductProvider";


const App = () => {
  return (
    <>
    <ProductProvider>
      <AppRouter/>
    </ProductProvider>
    </>
  );
};

export default App;
