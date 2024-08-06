import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { themeContext } from '../../context'
import { useContext } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name' style={{ color: darkMode ? 'white' : '' }}>
          Korede
        </div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <Link
              spy={true}
              to='Navbar'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to='Services' smooth={true}>
              <li>Services</li>
            </Link>

            <Link spy={true} to='Experience' smooth={true}>
              <li>Experience</li>
            </Link>

            <Link spy={true} to='Portfolio' smooth={true}>
              <li>Portfolio</li>
            </Link>

            <Link spy={true} to='Testimonial' smooth={true}>
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>

        <div className="n-button">
        <Link spy={true} to='Contact' smooth={true} className="button n-button">
         <span>Contact</span>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
