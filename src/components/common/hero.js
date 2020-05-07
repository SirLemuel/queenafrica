import React from 'react'
import styled from 'styled-components'

import BgLogo from '../../images/booty-envy.png'


const Hero = () => {
    return (<HeroWrapper>
                <img src={BgLogo} />
            </HeroWrapper>)
}


export default Hero



const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: #000;

    img {
        margin-bottom: 0;
        width: 100%;
        max-width: 900px;
    }
`