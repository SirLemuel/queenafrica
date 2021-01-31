import React from 'react'
import styled from 'styled-components'

import modelOne from '../../images/models/nastya_nass_.jpg'


const Carousel = () => {
    return (
        <CarouselWrapper>
            <CarouselInner>
                <CarouselItem>
                    <ModelWrapper>
                        <Model>
                            <ModelPhoto src={modelOne} />
                            <ModelCaption>@nastya_nass_</ModelCaption>
                        </Model>
                    </ModelWrapper>
                </CarouselItem>
                <CarouselItem>
                    <ModelWrapper>
                        <Model>
                            <ModelPhoto src={modelOne} />
                            <ModelCaption>@nastya_nass_</ModelCaption>
                        </Model>
                    </ModelWrapper>
                </CarouselItem>
                <CarouselItem>
                    <ModelWrapper>
                        <Model>
                            <ModelPhoto src={modelOne} />
                            <ModelCaption>@nastya_nass_</ModelCaption>
                        </Model>
                    </ModelWrapper>
                </CarouselItem>
                <CarouselItem>
                    <ModelWrapper>
                        <Model>
                            <ModelPhoto src={modelOne} />
                            <ModelCaption>@nastya_nass_</ModelCaption>
                        </Model>
                    </ModelWrapper>
                </CarouselItem>
                <CarouselItem>
                    <ModelWrapper>
                        <Model>
                            <ModelPhoto src={modelOne} />
                            <ModelCaption>@nastya_nass_</ModelCaption>
                        </Model>
                    </ModelWrapper>
                </CarouselItem>
            </CarouselInner>
        </CarouselWrapper>)
}


export default Carousel



const CarouselWrapper = styled.div`
    // margin-bottom: 100px;
`

const CarouselInner = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
`
const CarouselItem = styled.div``
const ModelWrapper = styled.div`
    margin-top: 50px;
`
const Model = styled.div`
    color: #fff;
    font-size: 14px;
    text-align: center;
`

const ModelPhoto = styled.img`
        max-width: 80px;
        max-height: 80px;
        width: 100%;
        border-radius: 50%;
        // border: 2px solid #b760e6;
        border: 2px solid #fff;
        margin: 0;
`

const ModelCaption = styled.div``