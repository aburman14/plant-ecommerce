import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import Cart  from "./components/Cart"
import Products from "./components/Products";
import {About} from "./components/About"
import Test from "./components/Test";
import FixedNav from "./components/FixedNav";
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FixedNav />}>
          <Route index element={<Hero />} />
          <Route path='products' element={<Products />}/>
          <Route path='cart' element={<Cart /> }/>
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;
