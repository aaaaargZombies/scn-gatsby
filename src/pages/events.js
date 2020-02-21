import React from "react"
import { StaicQuery, Link, graphql } from "gatsby"
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
						<h6>
							{n.date_time[0].value} - {n.date_time[0].value2} @{" "}
							{n.centre.title}
						</h6>
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
		allEvent(sort: { fields: centre___events___date_time___time_start }) {
			nodes {
				imageUrl
				body {
					value
				}
				title
				date_time {
					time_start
					time_end
					value
					value2
				}
				centre {
					title
				}
			}
		}
	}
`
