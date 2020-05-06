import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Grid } from '@material-ui/core'


import Header from "./header"
import Footer from "./Footer"

import "../layout.css"



const Layout = ({ children }) => {

  return (<Grid container spaces={3}>
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