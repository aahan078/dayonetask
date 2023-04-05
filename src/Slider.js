import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../src/slider.css'

export default function Slider() {
  return (
  
<div className='container--slide'>
    
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_960_720.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
        
          <h3 className='ih--name'>India Hikes</h3>
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
        <h1>India Hikes</h1>
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
    

  )
}
