import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1> Poznaj nasze produkty: </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-1.jpg"
                            text="Explor the hidden waterfall deep inside the Amazon Jungle"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-3.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-5.jpg"
                            text="Explor the hidden waterfall deep inside the Amazon Jungle"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-6.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-1.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-3.jpg"
                            text="Explor the hidden waterfall deep inside the Amazon Jungle"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-5.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-6.jpg"
                            text="Explor the hidden waterfall deep inside the Amazon Jungle"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-1.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />
                        <CardItem
                            src="images/img-3.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Produkty'
                            path='/product'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
