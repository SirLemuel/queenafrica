import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Grid } from '@material-ui/core'

import Favicon16 from '../../assets/favicon-16x16.png'
import Favicon32 from '../../assets/favicon-32x32.png'
import FaviconApple from '../../assets/apple-touch-icon.png'

import Header from "./header"
import Footer from "./footer"

import "../layout.css"



const Layout = ({ children }) => {

  return (<Grid container spaces={3}>
            <Helmet
               link={[
                  { rel: "icon", type: "image/png", sizes: "16x16", href: `${Favicon16}` },
                  { rel: "icon", type: "image/png", sizes: "32x32", href: `${Favicon32}` },
                  { rel: "apple-touch-icon", type: "image/x-icon", href: `${FaviconApple}` },
                ]}
            />
            <LayoutWrapper>
              <Header />
                <MainElement>{children}</MainElement>
              <Footer />
            </LayoutWrapper>
          </Grid>)
}

export default Layout



const LayoutWrapper = styled.div`
    width: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0 5%;
`

const MainElement = styled.main`
  flex: 1;
  width: 100%;
`