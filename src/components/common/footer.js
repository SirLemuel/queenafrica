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
                    <ListItem><FacebookIcon /></ListItem>
                    <ListItem><InstagramIcon /></ListItem>
                    <ListItem><YouTubeIcon /></ListItem>
                </ListElement>
            </FooterInner>
        </FooterWrapper>
    )
}

 

export default Footer



const FooterWrapper = styled.footer `
    color: #fff;
    border-top: 1px solid rgb(21, 23, 24);
    margin-top: 50px;

    img {
        max-width: 450px;
    }
`

const FooterInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoContainer = styled.div``
const ListElement = styled.ul`
    width: 100%;
    display: flex;
    list-style-type: none;
    max-width: 130px;
    justify-content: space-between;
    margin-right: 150px;
`
const ListItem = styled.li`
    svg {
        height: 35px;
        width: 35px;
        fill: #fff;
    }
`