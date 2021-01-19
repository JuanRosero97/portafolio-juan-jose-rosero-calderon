import React from 'react'
import PropTypes from 'prop-types'
import './resume.css'

const resumeUi = ({title,date, ubication}) => {
    return (
        <div class="resume-item">
            <h4>{title}</h4>
            <h5>{date}</h5>
            <p><em>{ubication}</em></p>
        </div>
    )
}

resumeUi.propTypes = {
    title : PropTypes.string.isRequired, 
    date : PropTypes.string.isRequired,
    ubication : PropTypes.string.isRequired,
}

resumeUi.defaultProps = { 
    title: "Title",
    date: "Date",
    ubication: "Ubication"
}

export default resumeUi
