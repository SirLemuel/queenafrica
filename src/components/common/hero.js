import React from 'react'
import styled from 'styled-components'

import YouTube from 'react-youtube'; 


const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        playsinline: 1,
        showInfo: 0,
        allowFullScreen: 1,
    }
};


const Hero = () => {
    return (<HeroWrapper>
                <HeroInner>
                    <FeaturedVideoWrapper>
                        <YouTube videoId={"3IzGlKsl0us"} opts={opts} />
                    </FeaturedVideoWrapper>

                    <FeaturedVideoDesc>

                    </FeaturedVideoDesc>
                </HeroInner>
            </HeroWrapper>)
}


export default Hero



const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: #000;
    padding: 50px 0;
    margin-bottom: 100px;
    img {
        margin-bottom: 0;
        width: 100%;
        max-width: 900px;
    }
`

const HeroInner = styled.div``

const FeaturedVideoWrapper = styled.div`
    iframe {
        width: 1100px;
        height: 600px;
    }
`

const FeaturedVideoDesc = styled.div``

