import React from "react";
import PropTypes from 'prop-types';
import '../cssOfComponents/header.css'

export default function Header(props){
    return(
        <div>
            <nav id="navber">
                <a className="contt" >Home</a>
                <a className="contt" >Work</a>
                <a className="contt" >About</a>
                <a className="contt" >contact</a>
            </nav>
           
        </div>
    )
}
Header.defaultProps={
    title: "your titel is here"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}