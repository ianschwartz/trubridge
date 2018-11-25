import React from 'react'
import Layout from '../components/layout'
import Contact from '../components/contact'
import Services from '../components/services'
import AboutUs from "../components/aboutus";
import Dna from "../components/dna";
import MyCarousel from "../components/carousel";

const IndexPage = () => (
  <Layout>
    <MyCarousel/>
    <Dna />
    <AboutUs />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
