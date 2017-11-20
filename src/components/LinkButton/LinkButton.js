import React from 'react'
import { Button } from 'odeum-ui'
import { Link } from 'react-router-dom'

const LinkButton = (props) => {
	if (props.route) {
		return (
			<Link to={props.route}>
				<Button {...props} />
			</Link>
		)
	}
	else {
		return <Button {...props} />
	}
}

export default LinkButton
