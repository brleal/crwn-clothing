import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss';

const Checkout = () => {

    const {cartItems, addItemToCart, removeItemToCart} = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Produto</span>
                </div>
                <div className='header-block'>
                    <span>Descrição</span>
                </div>
                <div className='header-block'>
                    <span>Quantidade</span>
                </div>
                <div className='header-block'>
                    <span>Preço</span>
                </div>
                <div className='header-block'>
                    <span>Remover</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <span className='total'>Total: 0</span>
        </div>
    )
}

export default Checkout;