import './../css/Cart.css'
import React, {useContext} from 'react';
import { ContextCart } from './../context/contextCart';
import CartProduct from './CartProduct';

const Cart = () => {
    const {cart} = useContext(ContextCart)
   

    return (
        <section className='cart'>
            <h2 className='title'>Cart</h2>
            {cart.amounts ? 
                <CartProduct />
                :
            <h2 id='empty' className='empty'>Your cart is empty.</h2>
            }
        </section>

    );
}
export default Cart;