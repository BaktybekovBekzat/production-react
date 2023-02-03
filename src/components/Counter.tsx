import { FC, useState } from 'react'
import classes from './Counter.module.scss'

export const Counter: FC = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<button className={classes.btn} onClick={() => setCount((val) => ++val)}>
				increment
			</button>
			<div>{count}</div>
			<button onClick={() => setCount((val) => --val)}>decrement</button>
		</div>
	)
}
