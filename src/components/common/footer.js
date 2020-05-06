import React from 'react'
import styled from 'styled-components'

import FooterLogo from '../../images/bootyenvy-logo-2.png'

import InstagramIcon from '../../assets/instagram.svg'
import FacebookIcon from '../../assets/facebook.svg'
import YouTubeIcon from '../../assets/youtube.svg'



export const Footer = () => {
    return (
         <FooterWrapper>
            <FooterInner>
                <LogoContainer>
                    <img src={FooterLogo} />
                </LogoContainer>
                <ListElement>
                    <ListItem><a href="https://www.facebook.com/bootyenvy" target="_blank"><FacebookIcon /></a></ListItem>
                    <ListItem><a href="https://www.instagram.com/bootyenvyclub" target="_blank"><InstagramIcon /></a></ListItem>
                    <ListItem><a href="https://www.youtube.com/bootyenvy" target="_blank"><YouTubeIcon /></a></ListItem>
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
const LogoContainer = styled.div``
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