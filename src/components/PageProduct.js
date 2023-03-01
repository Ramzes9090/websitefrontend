import React, { useState } from 'react'
import './PageProduct.css'
import '../App.css'

const Item = (props) => {
    return (
        <>
            <div className='product-text'>
                <h2> Przedmiot: {props.item} </h2>
                <p> Opis: {props.description}</p>
                <h3>Cena: {props.price}</h3>
            </div>
        </>
    )
}

function PageProduct() {
    const [counter, setCounter] = useState(0);

    return (
        <div className='product-container'>
            <div className='product-img'></div>
            <div className='product-description'>
                <Item
                    item={'Zestaw do golenia'}
                    description={"Profesjonalny zestaw do golenia, sprawdza się w każdych warunkach w zależności od potrzeb. Produkt zawiera: żyletkę z uchytem do golenia, szczotkę z włosia, mydło do golenia, kubek na wodę. "}
                    price={"130 zł"}
                />
                <div className='product-number-btn'>
                    <button className='product-btn1' onClick={() => setCounter((prevCount) => prevCount - 1)}> - </button>
                    <h1 className='product-number-text'>{counter}</h1>
                    <button className='product-btn2' onClick={() => setCounter((prevCount) => prevCount + 1)}> + </button>
                </div>
                <div className='product-order-btn'>

                    <button className='product-btn3' onClick={() => alert('Zamówienie w trakcie realizacji!')}>Zamów ! </button>
                </div>
            </div>



        </div>
    )
}

export default PageProduct
