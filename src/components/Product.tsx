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
            style={{
                margin: "40px",
                height: "300px",
                overflow: "hidden",
                position: "relative",
                border: "2px solid #d3d3d3 ",
                borderRadius: "30px",
                alignItems: "center",
            }}
        >
            <img src={product.image} style={imageStyle} alt={product.title} />
            <p>{product.title}</p>
            <p>£{product.price.toFixed(2)}</p>
            <div className="action-button">
                <Button
                    style={{ width: "100%" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        buttonClick(product);
                    }}
                >
                    {buttonName}
                </Button>
            </div>
        </div>
    );
};

const imageStyle = {
    height: "100px",
    paddingTop: "20px",
};
export default Product;
