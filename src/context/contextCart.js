import React, {useState} from 'react';

// Creamos contexto = estado global.
const ContextCart = React.createContext();

const ProviderCart = ({children}) => {
    const [cart, setCart] = useState({});
    
    return (
        <ContextCart.Provider 
            value={
                {cart, setCart}
            }
        >
        {children}
        </ContextCart.Provider>
    );
}
 
export {ContextCart, ProviderCart}