import React from 'react';
import './../css/TitleDescription.css'

const TitleDescription = () => {
    return (
        <section className='container'>
            <div className='title-description'>
                <h4 className='name-company'>Sneaker Company</h4>
                <h2 className='title-product'>Fall Limited Edition <br /> Sneakers</h2>

                <p className='description'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
            </div>
        </section>
    );
}
 
export default TitleDescription;