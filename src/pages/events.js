import React from "react"
import { Link, graphql } from "gatsby"
console.log("EVENTS PAGE")

export default ({ data }) => {
	console.log({ data })
	return (
		<div>
			<Link to="/">home</Link>
		</div>
	)
}

export const query = graphql`
	query EventsPageQuery {
		allEvent {
			nodes {
				title
				body {
					value
				}
				centre {
					title
				}
			}
		}
	}
`
