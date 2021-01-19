import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './about.css'


const BarUi = ({name, percent}) => {
    return (
        <div>
            <span class="skill">{name} <i class="val">{percent.toString()+'%'}</i></span>
            <ProgressBar now={percent} variant="progress"/>
        </div>
    )
}

BarUi.propTypes = {
    name: PropTypes.string.isRequired, 
    percent: PropTypes.number.isRequired
}


BarUi.defaultProps = { 
    name: "Title",
    percent: 0
}


export default BarUi
