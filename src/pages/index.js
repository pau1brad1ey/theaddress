import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
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
      </header>
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
          ‘The Address’ is a self contained one bedroom apartment situated in a quiet cul de sac. It is situated within a 10 minute walk to town along the canal de midi and the cité is a 20 walk away.
          <br />
          The apartment offers a king size bed, built in wardrobe, modern bathroom and well equiped kitchen which leads to double doors onto a private terrace which has a table and chairs. You are able to park your car directly outside.
          </p>
        </div>
      </div>
      <div className='row'>
        <h1 className='centered'>Where we are</h1>
        <hr />
        <br />
        <div className='col-lg-12'>
          <MyMapComponent
            isMarkerShown
            googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>

    <div className='container' id='contact' name='contact'>
      <div className='row'>
        <br />
        <br />
        <h1 className='centered'>Contact Us</h1>
        <hr />
        <br />
        <div className='col-sm-offset-2 col-sm-4'>
          <p>
            <span className='fa fa-home' /> 9 rue des Troenes, 11000 Carcassonne <br />
            <span className='fa fa-phone' /> 06 65 06 05 74 <br />
            <span className='fa fa-phone' /> 00336 65 06 05 74 (from UK) <br />
          </p>
        </div>
        <div className='col-sm-offset-2 col-sm-4'>
          <p>
            <span className='fa fa-envelope' /> <a href='mailto:theaddressfrance@gmail.com'> theaddressfrance@gmail.com</a> <br />
            <span className='fa fa-instagram' /> <a href='https://www.instagram.com/theaddressfrance/'> Follow us on instagram</a><br />
          </p>
        </div>
      </div>

    </div>
  </div>
)

export default IndexPage
