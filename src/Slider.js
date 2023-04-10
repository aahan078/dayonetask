import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../src/slider.css'

export default function Slider() {
  return (
  
<div className='section'>
<div className='container--fluid '>
    
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png"
          alt="First slide"
          
        />
        <Carousel.Caption>
        
        <h1>India Hikes</h1>
          <h3 className='ih--name2'>India’s Largest & Safest Trekking Organisation</h3>
         
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"
          alt="Second slide"
          
        />

        <Carousel.Caption>
        
          <h3>More than 12 years of operations in wilderness</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/07/27/17/14/mountains-862870_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Book your Treks now</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>

  )
}
