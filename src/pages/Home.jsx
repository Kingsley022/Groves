import React from 'react'
import "../styles/Home.css"
import Navbar from '../components/Navbar'
import BlueBtn from '../components/BlueBtn'
import PlantsContainer from '../components/PlantsContainer'
import { section_one, section_three, section_two } from '../data'

const Home = () => {

  return (
    <>
      <section className="landing-page">
        <div className="contents">
          <Navbar/>

          {/* Text Area */}
          <div className="text-area">
            <h1>Transform Your Small Space <br /> into a Green Oasis</h1>
            <div>
              <p>Discover the joy of gardening with Green Groves. Whether you have a balcony, terrace, or cozy corner at home, our resources and guides will help you cultivate a thriving garden with confidence and ease. Join our community of gardening enthusiasts and start your green journey today.</p>
            </div>
            <BlueBtn label="Get Started"/>
          </div>
        </div>9
      </section>

      <PlantsContainer data={section_one}/>
      <PlantsContainer data={section_two}/>
      <PlantsContainer data={section_three}/>
    </>
  )
}

export default Home