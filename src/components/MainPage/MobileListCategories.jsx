import React from 'react'
import { Link } from 'react-router-dom'

const MobileListCategories = (props) => {
    return (
        <>
            <li><Link to="/" onClick={props.handleFilter} >{props.category.name}</Link></li>
        </>
    )
}

export default MobileListCategories