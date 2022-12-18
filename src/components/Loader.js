import React from 'react'
import "./Loader.css"
import MESA from './MESA.svg'

function Loader() {
    return (
        <div className='Loader-page' style={{ backgroundColor: "#818485" }}>
            <body>
                <div class='loader'>
                    <div class="loader_overlay"></div>
                    <div class='loader_cogs'>
                        <div class='COGfirst'>
                            <div class='firstPart'></div>
                            <div class='firstPart'></div>
                            <div class='firstPart'></div>
                            <div class='firstHole'></div>
                        </div>
                        <div class='COGsecond'>
                            <div class='secondPart'></div>
                            <div class='secondPart'></div>
                            <div class='secondPart'></div>
                            <div class='secondHole'></div>
                        </div>
                        <div class='COGthird'>
                            <div class='thirdPart'></div>
                            <div class='thirdPart'></div>
                            <div class='thirdPart'></div>
                            <div class='thirdHole'></div>
                        </div>
                        <p>loading...</p>
                    </div>
                </div>
            </body>
        </div>

    )
}

export default Loader