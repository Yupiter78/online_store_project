import React from "react";
import Carousel from "./components/carousel";
import RibbonMenu from "./components/ribbonMenu";
import StepSlider from "./components/stepSlider";
import ProductGrid from "./components/productGrid";
import CartIcon from "./components/cartIcon";
import Cart from "./components/cart";

function App() {
    return (
        <>
            <div className="App">App</div>
            <Carousel />
            <RibbonMenu />
            <StepSlider />
            <ProductGrid />
            <CartIcon />
            <Cart />
        </>
    );
}

export default App;
