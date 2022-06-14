import { useEffect, useState } from "react"

export const useCounter = (componentName) => {
	const [counter, setCounter] = useState(0)
	
	const increment = () => { 
		setCounter(counter + 1)
	}
	
	const decrement = () => { 
		setCounter(counter - 1)
	}
	
	useEffect(() => {
		localStorage.setItem('counter' + componentName, counter)
	}, [counter])

	useEffect(() => {
		const localCounter = localStorage.getItem('counter' + componentName)
		setCounter(Number(localCounter) || 0)
	}, [])
	
	return {counter, increment, decrement }
}
