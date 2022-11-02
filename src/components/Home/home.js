import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
        <div>
            <h2>
                <Link to="/login">login</Link>
            </h2>
            <h2>
                <Link to="/signup">signup</Link>
            </h2>
        </div>
        <br/>
        <h2>{props.name?`Welcome -${props.name}`:"login please"}</h2>
    </div>
  )
}

export default Home