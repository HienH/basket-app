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
            <h1 style={{ fontFamily: "Lexend Mega", fontSize: "40px" }}>
                {" "}
                Fake Store
                <Badge badgeContent={basketCount} color="primary">
                    <Button onClick={setCartOpen}>
                        <ShoppingBasketIcon
                            color="secondary"
                            fontSize="large"
                        />
                    </Button>
                </Badge>
            </h1>
        </header>
    );
};

export default Header;
