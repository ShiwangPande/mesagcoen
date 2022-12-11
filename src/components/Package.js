import React from 'react'
import "./Package.css"

function Package() {
    return (
        <div className='package_Page'>
            <div className="package_main">
                <section className="card-area">
                    <section className="card-section">
                        <div className="card_package">
                            <div className="flip-card">
                                <div className="flip-card__container">
                                    <div className="card-front">
                                        <div className="card-front__tp card-front__tp--city">
                                            <h2 className="card-front__heading"> Max. Package </h2>
                                            <p className="card-front__text-price"> Rs. 10 LPA</p>
                                        </div>
                                        <div className="card-front__bt">
                                            <a href='' className="card-front__text-view card-front__text-view--city"> View me </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card-section">
                        <div className="card_package">
                            <div className="flip-card">
                                <div className="flip-card__container">
                                    <div className="card-front">
                                        <div className="card-front__tp card-front__tp--ski">
                                            <h2 className="card-front__heading"> Avg Package </h2>
                                            <p className="card-front__text-price">
                                                Rs. 5.5 LPA
                                            </p>
                                        </div>
                                        <div className="card-front__bt">
                                            <a href='' className="card-front__text-view card-front__text-view--city"> View me </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card-section">
                        <div className="card_package">
                            <div className="flip-card">
                                <div className="flip-card__container">
                                    <div className="card-front">
                                        <div className="card-front__tp card-front__tp--beach">
                                            <h2 className="card-front__heading">
                                                Total Placements
                                            </h2>
                                            <p className="card-front__text-price">
                                                600+
                                            </p>
                                        </div>
                                        <div className="card-front__bt">
                                            <a href='' className="card-front__text-view card-front__text-view--city"> View me </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

            </div></div>
    )
}

export default Package