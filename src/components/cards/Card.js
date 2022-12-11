import React from 'react'
import bce from '../../images/bce cover book.png'
import maths from '../../images/krezig book.png'

function Card() {
    return (
        <>
            <div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src={bce} alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div>
            <div className='cards'>
                <a href='https://drive.google.com/file/d/1BPNFde02LudceYBSWMn5g1VgaCRnuqQ-/view?usp=sharing' target="_blank">
                    <img src={maths} alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>Maths 1 </p>
            </div>


        </>

    )
}

export default Card