import React from "react"
import styled from 'styled-components'
import { Location } from '@reach/router'
import { Link } from "gatsby"

import Logo from '../../assets/qa-logo.png'

const Header = ({ siteTitle }) => (<HeaderWrapper>
                                        <LogoWrapper>
                                            <img src={Logo} alt="logo" />
                                        </LogoWrapper>
                                        <nav>
                                            <div><a href="">Videos</a></div>
                                            <div><a href="">Blog</a></div>
                                        </nav>
                                  </HeaderWrapper>)


export default Header


const HeaderWrapper = styled.header`
    background: #000;
    padding: 25px 0;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid rgb(21, 23, 24);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-family: sans-serif;

    nav {
        display: flex;
        text-transform: uppercase;
        justify-content: space-between;
        width: 100%;
        max-width: 175px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`


const LogoWrapper = styled.div`
    max-width: 100px;
    padding: 15px;
    height: 100px;
`
