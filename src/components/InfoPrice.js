import React, {useState, useContext} from 'react';
import minus from './../img/icon-minus.svg'
import plus from './../img/icon-plus.svg'
import './../css/InfoPrice.css'
import { ContextCart } from './../context/contextCart';
import priceFormat from './../functions/formatNumbers'

const InfoPrice = () => {
    const {cart, setCart} = useContext(ContextCart)

    const [amount, setAmount] = useState(0);

    const addAmount = () => setAmount(amount + 1)

    const deleteAmount = () => {
       if (amount === 0) return false
       setAmount(amount - 1)
    }

    const product = {
        uid: '0001',
        name: 'Fall Limited Edition Sneakers',
        priceU: 250,
        discount: 0.5,
        priceFinal: 125,
        amounts: amount
    }

    const submitCart = () => {
        if (amount === 0 && !cart.uid) {
            alert('Debe seleccionar una cantidad')
            return false
        }

        else if (cart.uid === product.uid) {
            alert('Ya tiene este producto en su carrito')
            return false
        }
        setCart({...product, totalToPay: product.priceFinal * product.amounts})

        setAmount(0)
    }

    return (
        <section className='container'>
            <div className='numbers'>
                <h2 className='price'>{priceFormat(product.priceFinal)}</h2>
                <h4 className='discount'>50%</h4>
                <h4 className='saving'>{priceFormat(product.priceU)}</h4>
            </div>

            <div className='cart-container'>
                <div className='cart-container__btn'>
                    <button onClick={deleteAmount} className='amount-btn'>
                        <img src={minus} alt="" />
                    </button>

                    <p className='amount'>{amount}</p>

                    <button onClick={addAmount} className='amount-btn'>
                        <img src={plus} alt="" />
                    </button>
                </div>

                <button onClick={submitCart} className='add-cart'>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg>
                    <p>Add to cart</p>
                </button>
            </div>
        </section>
    );
}
 
export default InfoPrice;