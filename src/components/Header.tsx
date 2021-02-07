import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";

export interface HeaderProps {
    setCartOpen: () => void;
    basketCount: number;
}
const Header = ({ setCartOpen, basketCount }: HeaderProps) => {
    return (
        <header>
            <h1> Fake Store</h1>

            <Badge badgeContent={basketCount} color="primary">
                <Button onClick={setCartOpen}>
                    <ShoppingBasketIcon />
                </Button>
            </Badge>
        </header>
    );
};

export default Header;
