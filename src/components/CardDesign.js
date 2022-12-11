import React from 'react'
import "./CardDesign.css"
import CardGroup from 'react-bootstrap/CardGroup';

function CardDesign() {
    return (

        <main >
            <div className='CardDesign'>
                <div className='info'>
                    <h1 className='title'>HOD's message</h1>
                    <p className='description'> Dear Students,

                        Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>
                </div>
            </div>
            <div className='CardDesign'>
                <div className='info'>
                    <h1 className='title'>Coordinator's message</h1>
                    <p className='description'> Dear Students,

                        Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>
                </div>
            </div>
            <div className='CardDesign'>
                <div className='info'>
                    <h1 className='title'>President's message</h1>
                    <p className='description'> Dear Students,

                        Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>
                </div>
            </div>
        </main>
    )
}

export default CardDesign