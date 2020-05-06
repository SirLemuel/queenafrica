import React from "react"
import styled from 'styled-components'
import { Location } from '@reach/router'
import { Link } from "gatsby"


const Header = ({ siteTitle }) => (<HeaderWrapper>
                                        <nav>
                                            <div><a href="">All Booty</a></div>
                                            <div><a href="">Black Booty</a></div>
                                            <div><a href="">White Booty</a></div>
                                            <div><a href="">Latin Booty</a></div>
                                        </nav>
                                  </HeaderWrapper>)


export default Header


const HeaderWrapper = styled.header`
    background: #000;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid rgb(21, 23, 24)  ;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: sans-serif;

    nav {
        display: flex;
        text-transform: uppercase;
        justify-content: space-between;
        width: 100%;
        max-width: 600px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`
