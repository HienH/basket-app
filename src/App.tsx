import "./App.css";
import Header from "./components/Header";
import { useQuery } from "react-query";
import { useState } from "react";
import { IProduct } from "./models/IProduct";
import Product from "./components/Product";
import Drawer from "@material-ui/core/Drawer";
import Basket from "./components/Basket";
import LinearProgress from "@material-ui/core/LinearProgress";

const App = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [cartOpen, setCartOpen] = useState(false);
    const [basket, setBasket] = useState<IProduct[]>([]);

    const getProducts = async (): Promise<IProduct[]> => {
        const res = await fetch(API_URL);
        return await res.json();
    };

    const { data, isLoading, error } = useQuery<IProduct[]>(
        "products",
        getProducts
    );
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

    if (isLoading) return <LinearProgress />;
    if (error)
        return (
            <h2 className="error-message">
                Sorry something went wrong, please try again later
            </h2>
        );
    return (
        <div className="App">
            <Header
                basketCount={getProductCount()}
                setCartOpen={() => {
                    setCartOpen(true);
                }}
            />
            <div className="grid">
                {data?.map((product) => {
                    return (
                        <div className=" grid-template-columns">
                            <Product
                                buttonClick={addToBasket}
                                buttonName="Add"
                                key={product.id}
                                product={product}
                            />
                        </div>
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
