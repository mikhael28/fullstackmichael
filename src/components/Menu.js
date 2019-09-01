import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pareto">Pareto</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/persisto">Persisto Labs</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/apprenticehsip">Full-Stack Apprenticeship</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/revercare">ReverCare (YC S19)</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/workandrise">Work & Rise</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/history">My Past Life</Link></li>



            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
