import React from 'react';
import cx from 'classnames';
import { useParallax } from 'react-scroll-parallax';
// import { BgContainer } from '../bg-container';

const shared =
    'bg-blue-100 border-2 border-blue-500 border-solid rounded-lg h-14 w-14 flex items-center justify-center';

const RotationAxis = () => {
    const parallax = useParallax < HTMLDivElement > ({
        rotate: [0, 360],
    });
    return (
        // <BgContainer>
        <div ref={parallax.ref} className="spinner">
            😵‍💫
            <div className="diamond">💎</div>
            <div className="clown">🤡</div>
            <div className="money">💰</div>
            <div className="hand">👌🏻</div>
        </div>
        // </BgContainer>
    );
};
export default RotationAxis;