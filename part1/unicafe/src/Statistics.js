import React from 'react'

const StatisticLine = ({ text, value }) => {
	return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = ({ good, neutral, bad }) => {
	const sum = good+neutral+bad // total amount of answers
	const percentage = (good/sum)*100 // percentage of positive answers
	const average = (1/sum*good)-(1/sum*bad) // average of positive to negative answers

	if (sum === 0) {
		return <p>No feedback given</p>
	}

	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
				<StatisticLine text="all" value={sum} />
				<StatisticLine text="average" value={average} />
				<StatisticLine text="positive" value={percentage + " %"} />
			</tbody>
		</table>
	)
}

export default Statistics