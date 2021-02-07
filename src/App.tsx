import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { IProduct } from "./models/IProduct";
import Product from "./components/Product";
import Drawer from "@material-ui/core/Drawer";
import Basket from "./components/Basket";

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [basket, setBasket] = useState<IProduct[]>([]);
    const [allProducts, setAllProducts] = useState<IProduct[]>([
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 10,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 5,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 3,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 5,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 4,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 5,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
    ]);

    const addToBasket = (productToAdd: IProduct) => {
        setBasket([...basket, productToAdd]);
    };
    const deleteFromBasket = (productToDelete: IProduct) => {
        const newBasket = basket.filter(
            (product) => product.id != productToDelete.id
        );
        setBasket(newBasket);
    };

    const getProductCount = (products: IProduct[]) => {
        return basket.length;
    };
    return (
        <div className="App">
            <Header
                basketCount={getProductCount(basket)}
                setCartOpen={() => {
                    setCartOpen(true);
                }}
            />
            <div className="grid">
                {allProducts.map((product) => {
                    return (
                        <Product
                            buttonClick={addToBasket}
                            buttonName="Add"
                            key={product.id}
                            product={product}
                        />
                    );
                })}
            </div>
            <Drawer
                anchor="right"
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            >
                <Basket basket={basket} deleteFromBasket={deleteFromBasket} />
            </Drawer>
        </div>
    );
};

export default App;
