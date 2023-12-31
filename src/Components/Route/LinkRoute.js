 import React from 'react'
 import PropTypes from 'prop-types'
 import {Link} from 'react-router-dom'
 
 
 export const LinkRoute = props => {
     return (
         <Link {...props}  >
             {props.children}
         </Link>
     )
 }
 
 LinkRoute.propTypes = {
     to: PropTypes.string.isRequired
 }
 