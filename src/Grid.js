import React from 'react'
import '../src/grid.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function Grid() {
  return (
    <div className='container mt-3' 
    
    >

      <h1 className='text-center mt-5'>Some Famous Treks</h1>

<CardGroup className='mt-5'>
      <Card >
        <Card.Img variant="top" src="https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160" />
        <Card.Body>
          <Card.Title>Rupin Pass</Card.Title>
          <Card.Text>
           Share your trek experiences and get featured on the main website
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.prismic.io/indiahike/14200-Deoriatal_DC_Mt-Chaukhamba-Rhododendrons-Manasa-Gollapinni-Instagrammer.jpg?auto=compress,format/100px160" />
        <Card.Body>
          <Card.Title>Kuari Pass</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 5 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160" />
        <Card.Body>
          <Card.Title>Chandra tal</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 5 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


    {/* <div className='container1'>
<div id='box-images'>
  <img src='https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160'></img>
  

</div>
<div id='box-images'>
  <img src='https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160'></img>


</div>
<div id='box-images'>
  <img src='https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160'></img>


</div>
    </div> */}

    <div className='container' >
    <div className='row'>
      <div className='col-lg-4 col-md-6 col-sm-12 mt-3' >
      <img className='set-img' src='https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160'></img>
      <h4 className='text-center'>Rupin Pass </h4>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
        <img className='set-img' src='https://images.prismic.io/indiahike/7d088f5c-455c-4e87-ac62-ae2ecbde102f_Ranthan+karak+Trek_Indiahikes_Nithesh+kumar_April+2022_Website+resolution_-213.jpg?auto=compress,format'></img>
        <h4 className='text-center'>AudonsCol </h4>
        </div>
      <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
         <img className='set-img' src='https://images.prismic.io/indiahike/3df99ba8-9e7c-4664-be35-f0ab7b721067_Ali+Bedni_AB_Roopkund_Sandhya+UC_Mt.Trishul_meadows_landscape_.jpg?auto=compress,format'></img>
         <h4 className='text-center'>Kuari Pass </h4>
         </div>
         <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
         <img className='set-img' src='https://indiahikes.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Findiahike%2F6e3f1c45-d360-45fb-a480-7fdd68b4c768_Kodaikanal%2BCampus_Indaihikes2.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75'></img>
         <h4 className='text-center'>Kedartal </h4>
         </div>

         <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
         <img className='set-img' src='https://images.prismic.io/indiahike/12fa684e-a79a-41f5-a4ce-8f31dc37630f_ali+bedni.jpeg?auto=compress,format&rect=0,118,1900,600&w=1900&h=600'></img>
         <h4 className='text-center'>Sandankphu </h4>
         </div>
         <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
         <img className='set-img' src='https://images.prismic.io/indiahike/b3e9236d-834c-4f46-8eae-0ac8d651387d_Har+Ki+Dun_HKD_Anirban+Banerjee_The+summit+view+of+Harkidun+with+river_.jpg?auto=compress,format'></img>
         <h4 className='text-center'>Harkidun </h4>
         </div>
         
    </div>
    </div>

    <h1 className='faq'>
    Frequenty Asked Questions
    </h1>

    
    </div>


    
  )
}
