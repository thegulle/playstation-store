import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Header() {
    const cart = useSelector(state => state.cartStore).cart;
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        setCartTotal(
            cart.reduce((acc, curr) => {
                return acc + curr.price
            }, 0)
        )
    }, [cart])

    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink to="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png"
                            alt="logo"
                        />
                    </NavLink>
                </div>

                <ul>
                    <li>
                        <NavLink to="/categories/1" activeClassName="active">Game Controller</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories/2" activeClassName="active">PS 5</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories/3" activeClassName="active">PS VR</NavLink>
                    </li>
                    <li>
                        <a href="#" className="cart">
                            <i className="ph-shopping-cart"></i>
                            <span>{cart?.length}</span>
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.image} alt="product" />
                                        <div className="product-info">
                                            <h3>{item.name}</h3>
                                            <p>{(item.price).toFixed(2)} $</p>
                                        </div>
                                    </li>
                                ))}
                                <div className="sub-info">
                                    <h5>
                                        Total : {cartTotal} $
                                    </h5>
                                </div>
                            </ul>
                        </a>
                    </li>
                </ul>
            </nav>
        </header >
    )
}