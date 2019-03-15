import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import './slideshow.css'

// import Link from 'gatsby-link'
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 43.221373, lng: 2.359586 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.221373, lng: 2.359586 }} />}
  </GoogleMap>
))

const IndexPage = () => (
  <div>
    <a name='home' className='' />
    <div id='headerwrap'>
      <header className='clearfix'>
        <h1>The Address<br />Carcassonne<br />France</h1>
        <p>Self catering apartment in the South of France</p>
        <p>
          <br /><br />
          <a className='btn btn-primary btn-lg' href='http://www.booking.com/Share-pJxWxmC'>BOOK NOW</a>
        </p>
      </header>
      <ul className='slideshow'>
        <li><span>Image 01</span><div><h3>Peaceful</h3></div></li>
        <li><span>Image 02</span><div><h3>Comfort</h3></div></li>
        <li><span>Image 03</span><div><h3>Spacious</h3></div></li>
        <li><span>Image 04</span><div><h3>Canal du midi</h3></div></li>
        <li><span>Image 05</span><div><h3>Sunshine</h3></div></li>
        <li><span>Image 06</span><div><h3>Le Cite</h3></div></li>
      </ul>
    </div>

    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <h1 className='centered'>About our apartment</h1>
        <hr />
        <br />
        <div className='col-lg-offset-2 col-lg-8'>
          <p>
          ‘The Address’ is a self contained one bedroom apartment situated in a quiet cul de sac. It is situated within a 10 minute walk to town along the canal de midi and the cité is a 20 minute walk away.
          <br />
          The apartment offers a king size bed, built in wardrobe, modern bathroom and well equipped kitchen which leads to double doors onto a private terrace which has a table and chairs. You are able to park your car directly outside.
          </p>
        </div>
      </div>
      <div className='row'>
        <h1 className='centered'>Where we are</h1>
        <hr />
        <br />
        <div className='col-lg-12'>
          <iframe
            width='100%'
            height='450'
            frameBorder='0'
            style={{ border: '0' }}
            src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCqla1IMTIRuXZ8AXMhVA85OL9jKDmzSio&q=place_id:ChIJoRZBTiIsrhIR63BvmEQMetE'
            allowFullScreen />
        </div>
      </div>
    </div>

    <div className='container' id='contact' name='contact'>
      <div className='row'>
        <br />
        <br />
        <h1 className='centered'>Contact us</h1>
        <hr />
        <br />
        <div className='col-md-6'>
          <p>
            <span className='fa fa-home' /> 9 rue des Troenes, 11000 Carcassonne <br />
            <span className='fa fa-phone' /> 06 06 42 47 35 <br />
            <span className='fa fa-phone' /> 00336 06 42 47 35 (from UK) <br />
          </p>
        </div>
        <div className='col-md-6'>
          <p>
            <span className='fa fa-envelope' /> <a href='mailto:theaddressfrance@gmail.com'> theaddressfrance@gmail.com</a> <br />
            <span className='fa fa-instagram' /> <a href='https://www.instagram.com/theaddressfrance/'> Follow us on instagram</a><br />
            <span className='fa fa-address-book' /> <a className='' href='http://www.booking.com/Share-pJxWxmC'>Book now</a>
          </p>
        </div>
      </div>

    </div>
  </div>
)

export default IndexPage
