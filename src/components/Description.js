import React from 'react'
import { Link } from "react-router-dom";
function Description({ id, img, price, title, rating }) {
    return (
        <Link to="/">
            <div className='description'>
                <p>{title}</p>
            </div>
        </Link>

    )
}

export default Description