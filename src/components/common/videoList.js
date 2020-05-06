import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';



const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        playsinline: 1,
        showInfo: 0,
        allowFullScreen: 1,
    }
};

const videoItems = [
    { videoId: "MwFNdR01gDw", videoTitle: "🍑 Big BOOTY Twerk At Beach 🍑 || Sanya Julee" },
    { videoId: "9pZ4saw5A_A", videoTitle: "Crazy Hot Latina Twerking" },
    { videoId: "f1TFJqPSyag", videoTitle: "Twerk by the Pool" },

    { videoId: "NHj1IPoL3ek", videoTitle: "Geri Hoops y Lucila Vit Twerking" },
    { videoId: "fs8BAbQZ7-o", videoTitle: "Shake It (city girls twerk I.B.Mixxx) - IslandBoy Yayo x YayoDaRoadRunna" },

    { videoId: "lCZYvvHGNs0", videoTitle: "Yota Poulidou Judge Solo | Twerk Battle Vol2" },
    { videoId: "uHKbLAmy-kg", videoTitle: "Hot Twerk || Twerking Ass at home || Sanya Julee" },
    { videoId: "Z5xoFynUgY0", videoTitle: "Shaking Booty in garden || thrill your moods" },
    { videoId: "eDYTb8pDmN8", videoTitle: "Crazy Quarantine Twerk" },
]


const VideoList = () => {
    const renderVideoItems = videoItems.map(videoItem => {
        
        const { videoId, videoTitle } = videoItem

        return (<Grid item xs={12} sm={6} md={4}>
                    <VideoWrapper>
                        <VideoFrame>
                            <YouTube videoId={videoId} opts={opts} />
                        </VideoFrame>
                        <VideoCaption>
                            <VideoTitle><div>{videoTitle}</div></VideoTitle>
                        </VideoCaption>
                    </VideoWrapper>
                </Grid>)
    })

    return (
            <ListWrapper>
                <Grid container spacing={3}>
                    {renderVideoItems}
                </Grid>
            </ListWrapper>)
    }



export default VideoList




const ListWrapper = styled.div`
        // margin: 35px 5%;
        margin: 0 auto;
        max-width: 1440px;
        font-family: sans-serif;
`


const VideoCaption = styled.div`
`

const VideoWrapper = styled.div`
    font-family: sans-serif;
`

const VideoTitle = styled.h4`
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0px;
    line-height: 24px;
    // margin: 8px 0 0 0;
    margin-top: -20px;

    @media( max-width: 768px) {
        font-size: 16px;
    }
`

const VideoFrame = styled.div`
    border-radius: 6px;

    iframe {
        border-radius: 6px 6px 0 0;
    }
    
    .ytp-chrome-top ytp-show-cards-title {
        display: none;
    }

    @media(max-width: 600px) {
        max-width: 100%;
    }
    
    img, iframe {
        width: 100%;
        min-height: 238px;

        @media(max-width: 600px) {
            max-width: 100%;
        }
    }
`

