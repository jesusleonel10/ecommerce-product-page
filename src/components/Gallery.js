import React from 'react';
// import styled from 'styled-components';
import './../css/Gallery.css'
import image1 from './../img/image-product-1.jpg'
import image2 from './../img/image-product-2.jpg'
import image3 from './../img/image-product-3.jpg'
import image4 from './../img/image-product-4.jpg'

import thumbnail1 from './../img/image-product-1-thumbnail.jpg'
import thumbnail2 from './../img/image-product-2-thumbnail.jpg'
import thumbnail3 from './../img/image-product-3-thumbnail.jpg'
import thumbnail4 from './../img/image-product-4-thumbnail.jpg'
 
const Gallery = () => {

    
    let currentImage = 0;
    let imagesSlides = document.getElementsByClassName('mySlides');
    let thumbnails = document.getElementsByClassName('thumbnail');

    //Al abrir la galeria lighbox redefinimos las miniaturas y las slides
    const openLightbox = () => {
        document.getElementById('Lightbox').style.display = 'block';
            imagesSlides = document.getElementsByClassName('mySlides-modal')
            thumbnails = document.getElementsByClassName('thumbnail-modal')
      };

    const closeLightbox = () => {
        document.getElementById('Lightbox').style.display = 'none';
            imagesSlides = document.getElementsByClassName('mySlides')
            thumbnails = document.getElementsByClassName('thumbnail')
      };

    const reset = () => {
        for (let img of imagesSlides){
            img.classList.remove('show')
        }
        for (let thumbs of thumbnails) {
            thumbs.firstElementChild.classList.remove('active')
        }
    }

    const hiLiteThumbnail = (e) => {
        let thumbnail = thumbnails[currentImage].firstElementChild
        thumbnail.classList.add('active')
    }

    const thumbImgCont = (e) => {
        reset()
        if (e.target.nodeName !== 'IMG') return false;
        const index = [...thumbnails].indexOf(e.target.parentNode)
        imagesSlides[index].classList.add('show')
        currentImage = index;
        hiLiteThumbnail(e)
    }

    const goBack = (e) => {
        reset()
        if (e.target.classList.contains('previous') && currentImage > 0) {
            currentImage -= 1
            imagesSlides[currentImage].classList.add('show')
            hiLiteThumbnail()
        } else if (e.target.classList.contains('previous') && currentImage === 0) {
            currentImage = thumbnails.length-1
            imagesSlides[currentImage].classList.add('show')
            hiLiteThumbnail()
        }
    }

    const goFwd = (e) => {
        reset()
        if (e.target.classList.contains('next') && currentImage < thumbnails.length-1) {
            currentImage += 1
            imagesSlides[currentImage].classList.add('show')
            hiLiteThumbnail()
        } else if (e.target.classList.contains('next') && currentImage === thumbnails.length-1) {
            currentImage = 0
            imagesSlides[currentImage].classList.add('show')
            hiLiteThumbnail()
        }
    }

    const arrow = (e) => {
        if (e.target.nodeName !== 'A') return false;
        e.target.classList.contains("next") ? goFwd(e) : goBack(e);  
    }

    return (  
        <>
            <section className='container'>
                <div className='gallery_product'>
                    <div className='fullimg'>
                        <div className='mySlides cursor show' onClick={openLightbox}>
                            <img src={image1} alt="" />
                        </div>

                        <div className='mySlides cursor' onClick={openLightbox}>
                            <img src={image2} alt="" />
                        </div>

                        <div className='mySlides cursor' onClick={openLightbox} >
                            <img src={image3} alt="" />
                        </div>

                        <div className='mySlides cursor' onClick={openLightbox}>
                            <img src={image4} alt="" />
                        </div>

                        <div className='arrow-buttons__mobile'>
                            <a className="previous" onClick={arrow}>&#10094;</a>
                            <a className="next" onClick={arrow}>&#10095;</a>
                        </div>

                    </div>
                    
                    <section className='row' id='thumbnail-section'>
                        <div className='thumbnail' onClick={thumbImgCont}>
                            <img className='demo cursor active' src={thumbnail1} alt="" />
                        </div>

                        <div className='thumbnail' onClick={thumbImgCont}>
                            <img className='demo cursor' src={thumbnail2} alt="" />
                        </div>

                        <div className='thumbnail' onClick={thumbImgCont}>
                            <img className='demo cursor' src={thumbnail3} alt="" />
                        </div>

                        <div className='thumbnail' onClick={thumbImgCont}>
                            <img className='demo cursor' src={thumbnail4} alt="" />
                        </div>
                    </section>
                </div>

                <div className='gallery_product_modal' id='Lightbox'>
                    <div className='fullimg modal-content'>
                    <span className="close cursor" onClick={closeLightbox}>&times;</span>
                        <div className='mySlides-modal show'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='mySlides-modal'>
                            <img src={image2} alt="" />
                        </div>

                        <div className='mySlides-modal'>
                            <img src={image3} alt="" />
                        </div>

                        <div className='mySlides-modal'>
                            <img src={image4} alt="" />
                        </div>

                        <div className='arrow-buttons'>
                            <a className="previous" onClick={arrow}>&#10094;</a>
                            <a className="next" onClick={arrow}>&#10095;</a>
                        </div>

                        <section className='row' id='thumbnail-section-modal'>
                            <div className='thumbnail-modal' onClick={thumbImgCont}>
                                <img className='demo cursor active' src={thumbnail1} alt="" />
                            </div>

                            <div className='thumbnail-modal' onClick={thumbImgCont}>
                                <img className='demo cursor' src={thumbnail2} alt="" />
                            </div>

                            <div className='thumbnail-modal' onClick={thumbImgCont}>
                                <img className='demo cursor' src={thumbnail3} alt="" />
                            </div>

                            <div className='thumbnail-modal' onClick={thumbImgCont}>
                                <img className='demo cursor' src={thumbnail4} alt="" />
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Gallery;