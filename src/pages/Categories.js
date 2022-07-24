
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, productList } from "stores/ProductStore";
import { addCart } from "stores/CartStore";
import MessageBox from "components/MessageBox";


export default function Categories() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const product = (useSelector(state => state.productStore).products).find(item => item.id == id);
    const [messageContent, setMessageContent] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const addCartItem = async (product) => {
        await dispatch(addCart(product));
        setShowMessage(true);
        setMessageContent("Product added to cart");
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    }
    return (
        <>
            <MessageBox show={showMessage} message={messageContent} />
            <div className="hero-container">
                <div className="container">
                    <div className="grid lg:grid-cols-2 md:grid-col-1 gap-10">
                        <div className="hero-text">
                            <div className="text-content">
                                <h1>
                                    {product?.name}
                                </h1>
                                <p className="text-md">
                                    {product?.description}
                                </p>
                                <button onClick={() => addCartItem(product)}>
                                    Add to cart
                                    <i className="ph-game-controller"></i>
                                </button>
                            </div>

                        </div>
                        <div className="hero-product">
                            <img
                                src={product?.image}
                                alt="product"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
