import { IProduct } from "../models/IProduct";
import Button from "@material-ui/core/Button";

interface ProductProps {
    product: IProduct;
    buttonClick: (product: IProduct) => void;
    buttonName: string;
}

const Product = ({ product, buttonName, buttonClick }: ProductProps) => {
    return (
        <div
            className=" grid-template-columns"
            style={{ borderStyle: "solid" }}
        >
            <img
                src={product.image}
                width="30%"
                height="40%"
                alt={product.title}
            />
            <p>{product.title}</p>
            <p>£{product.price}</p>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                    buttonClick(product);
                }}
            >
                {buttonName}
            </Button>
        </div>
    );
};

export default Product;
