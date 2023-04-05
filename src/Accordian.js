import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../src/accordian.css'

export default function Accordian() {
  return (
    <div className='accordian--1'>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Which Trek is best in Winters</Accordion.Header>
        <Accordion.Body>
        Winter is among the best seasons to experience snow on treks. To experience maximum snow, higher chances of snowfall and least crowds, choose Jan, Feb or March to do any of the treks below. Winter lasts all the way till mid-March.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are some easy treks for beginners?</Accordion.Header>
        <Accordion.Body>
        It’s wonderful that you’re planning to start trekking in the Himalayas. You’d be happy to know that around 70% of our trekkers are beginners and always get hooked to trekking after their first trek!Having said that, you must choose your trek wisely — something that is not too difficult, yet will allow you to experience the grand settings of the Himalayas.From a decade of experience, these are the treks we find best suited for
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I join your treks as a solo trekker?</Accordion.Header>
        <Accordion.Body>
        It’s wonderful that you’re planning to start trekking in the Himalayas. You’d be happy to know that around 70% of our trekkers are beginners and always get hooked to trekking after their first trek!Having said that, you must choose your trek wisely — something that is not too difficult, yet will allow you to experience the grand settings of the Himalayas.From a decade of experience, these are the treks we find best suited for
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  
    </div>
    
  )
}
