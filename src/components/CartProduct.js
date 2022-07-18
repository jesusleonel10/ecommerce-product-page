import React, {useContext} from 'react';
import { ContextCart } from './../context/contextCart';
import thumbnail1 from './../img/image-product-1-thumbnail.jpg';
import {ReactComponent as SvgDelete} from './../img/icon-delete.svg';
import priceFormat from './../functions/formatNumbers'


const CartProduct = () => {
    const {cart, setCart} = useContext(ContextCart)

    const deleteProduct = () => {
        setCart({})
    }
    return (
        <div id='Card-Content' cart={cart}>
                <div className='cart__info'>
                    <img src={thumbnail1} alt="" />
                    <div className='cart__description'>
                        <p className='cart__product'>Fall Limited Edition Sneakers</p>
                        <span className='cart__price'>{priceFormat(cart.priceFinal)} x {cart.amounts}</span>
                        <span className='cart__total'>{priceFormat(cart.totalToPay)}</span>
                    </div>
                    <button onClick={deleteProduct} className='delete' title='Delete Item'>
                        <SvgDelete />
                    </button>
                </div>
                <div className='checkout'>
                    <button className='checkout__button'>
                        Checkout
                    </button>
                </div>
            </div>
    );
}
 
export default CartProduct;