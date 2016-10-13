// This is an example of a react component that can be reused throughout a site

import React, { Component, PropTypes } from 'react'

import Link from './../Link/Link' 
// local styles
import s from './styles.css'

class CardComponent extends Component {
	
	// To catch errors, this specifies what properties the	 component expects passed in as this.props
	static propTypes = {
		header: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		target: PropTypes.string.isRequired
	}

  render() {
    return(
    	<div className={s.card}>
    		<Link to={this.props.target}>
    			<h1 className={s.cardHeader}>{this.props.header}</h1>
    		</Link> 
    		<p className={s.cardBody}>{this.props.body}</p>
    	</div>
    )
  }
}

export default CardComponent

