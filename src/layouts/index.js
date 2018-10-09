import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Navbar, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import './theme.css'

const Header = () => (
  <Navbar inverse collapseOnSelect fixedTop color='faded' id='navbar-main'>
    <Navbar.Header>
      <Navbar.Brand>
         The Address
       </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <NavItem href='#home'>Home</NavItem>
    </Navbar.Collapse>
  </Navbar>
)

const Footer = () => (
  <div id='footerwrap'>
    <div className='container'>
      <h4>Copyright {new Date().getFullYear()}</h4>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='The Address - Carcassonne, France'
      meta={[
        { name: 'description', content: 'The Address - Carcassonne, France. A one bedroom apartment for rent in the beautiful city of Carcassonne. Close to the city center, Canal du midi and the medieval cite.' },
        { name: 'keywords', content: 'The Address, Carcassonne, Apartment, Rent' }
      ]}
      link={[
        {rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic'},
        {rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,700'}
      ]}
    />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
