import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
export interface HeaderProps {
    setCartOpen: () => void;
}
const Header = ({ setCartOpen }: HeaderProps) => {
    return (
        <header>
            <h1> Fake Store</h1>
            <Button onClick={setCartOpen}>
                <ShoppingBasketIcon />
            </Button>
        </header>
    );
};

export default Header;
