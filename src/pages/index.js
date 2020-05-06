import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout"
import Image from "../components/common/image"
import SEO from "../components/common/seo"
import Hero from "../components/common/hero"
import VideoList from '../components/common/videoList'

const IndexPage = () => {
  return (<Layout>
            <SEO title="BootyEnvy" />
            <Hero />
            <VideoList />
          </Layout>)
}

export default IndexPage
