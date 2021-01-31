import React from 'react'
import styled from 'styled-components'

import FooterLogo from '../../assets/qa-logo.png'

import InstagramIcon from 'src/assets/svg/instagram.svg'
import FacebookIcon from 'src/assets/svg/facebook.svg'
import YouTubeIcon from 'src/assets/svg/youtube.svg'



export const Footer = () => {
    return (
         <FooterWrapper>
            <FooterInner>
                <LogoContainer>
                    <img src={FooterLogo} />
                </LogoContainer>
                <ListElement>
                    <ListItem><a href="https://www.facebook.com/myqueenafrica" target="_blank"><FacebookIcon /></a></ListItem>
                    <ListItem><a href="https://www.instagram.com/myqueenafrica" target="_blank"><InstagramIcon /></a></ListItem>
                    <ListItem><a href="https://www.youtube.com/myqueenafrica" target="_blank"><YouTubeIcon /></a></ListItem>
                </ListElement>
            </FooterInner>
        </FooterWrapper>
    )
}

 

export default Footer



const FooterWrapper = styled.footer `
    color: #fff;
    border-top: 1px solid rgb(21, 23, 24);
    margin-top: 10%;
    width: 100%;

    img {
        max-width: 450px;
    }
`

const FooterInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;

    @media(max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }
`
const LogoContainer = styled.div`
    img {
        max-width: 150px;

    }
`
const ListElement = styled.ul`
    width: 100%;
    display: flex;
    list-style-type: none;
    max-width: 130px;
    justify-content: space-between;
    margin-right: 150px;

    @media(max-width: 600px) {
        margin: 0;
        margin-top: -25px;
    }

`
const ListItem = styled.li`
    svg {
        height: 35px;
        width: 35px;
        fill: #fff;
    }
`