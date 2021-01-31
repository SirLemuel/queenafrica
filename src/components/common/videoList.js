import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube'; 


const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: false,
        controls: true,
        modestbranding: 1,
        playsinline: 1,
        showInfo: 0,
        allowFullScreen: 1,
    }
};

const videoItems = [
    { videoId: "OSVzWO_9wlE", videoTitle: "So Beautiful 'Short Film' Directed by Jamel Wiggins" },
    { videoId: "FWnLuH_Runs", videoTitle: "Madeleine" },
    { videoId: "lxeVpMRHUSg", videoTitle: "This Can't Be Love" },
    { videoId: "5-RZFmZwXc4", videoTitle: "Anything But Love" },
]

const VideoList = () => {
    const renderVideoItems = videoItems.map(videoItem => {
        
        const { videoId, videoTitle } = videoItem

        return (<Grid item xs={12} sm={6}>
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
        min-height: 400px;

        @media(max-width: 600px) {
            max-width: 100%;
        }
    }
`

