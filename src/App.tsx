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
            amount: 0,
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 5,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            amount: 0,
        },
        {
            id: 3,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 5,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            amount: 0,
        },
        {
            id: 4,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 5,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            amount: 0,
        },
    ]);

    const addToBasket = (productToAdd: IProduct) => {
        // check if product is in array
        const isInBasket = basket.findIndex(
            (product) => product.id == productToAdd.id
        );
        if (isInBasket != -1) {
            setBasket((prevBasket) => {
                return prevBasket.map((product) =>
                    product.id === productToAdd.id
                        ? { ...product, amount: product.amount + 1 }
                        : product
                );
            });
        } else {
            setBasket([...basket, { ...productToAdd, amount: 1 }]);
        }
    };

    const deleteFromBasket = (productToDelete: IProduct) => {
        // if more than one in basket
        if (productToDelete.amount > 1) {
            setBasket((prevBasket) => {
                return prevBasket.map((product) =>
                    product.id === productToDelete.id
                        ? { ...product, amount: product.amount - 1 }
                        : product
                );
            });
        } else {
            setBasket(
                basket.filter(
                    (prevBasket) => prevBasket.id != productToDelete.id
                )
            );
        }
    };

    const getProductCount = () => {
        return basket.reduce((ack: number, product) => ack + product.amount, 0);
    };

    return (
        <div className="App">
            <Header
                basketCount={getProductCount()}
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
