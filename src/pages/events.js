import React from "react"
import { Link, graphql } from "gatsby"
console.log("EVENTS PAGE")

export default ({ data }) => {
	console.log(data)
	return (
		<div>
			<Link to="/">home</Link>
			<ul>
				{data.allEvent.nodes.map(n => (
					<li>
						<h2>{n.title}</h2>
						<h6>@ {n.centre.title}</h6>
						<img src="n.imageUrl" alt="event poster" />
						<div dangerouslySetInnerHTML={{ __html: n.body.value }} />
					</li>
				))}
			</ul>
		</div>
	)
}

export const query = graphql`
	query {
		allEvent {
			nodes {
				imageUrl
				body {
					value
				}
				title
				centre {
					title
				}
			}
		}
	}
`
