import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from "../components/common/layout"
import Image from "../components/common/image"
import SEO from "../components/common/seo"
import Hero from "../components/common/hero"
import VideoList from '../components/common/videoList'
import Carousel from '../components/common/carousel'

const IndexPage = () => {
  return (<Layout>
            <SEO title="QueenAfrica" />
            <Hero />

            <SectionTitle>
              <h2>Featured</h2>
            </SectionTitle>
            <VideoList />
          </Layout>)
}

export default IndexPage



const SectionDivider = styled.div`
    height: 2px;
    width: 100%;
    max-width: 800px;
    background: rgb(21,23,24);
    border-radius: 0px;
    margin: 100px auto;
`

const SectionTitle = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  h2 {
    color: #fff;
  }
`