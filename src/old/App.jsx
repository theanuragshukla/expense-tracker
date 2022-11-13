import { useState } from 'react'
import './App.css'

function App() {
	const [amt, setAmt] = useState(0)
	const [sign, setSign] = useState(1)
	const handleEnter = (e) => {
		if(e.code=="Enter"){
			let val = e.target.value
			val=Number(val)
			setAmt(temp=>{
				return Number(temp)+(val*sign)
			})
			e.target.value=''
		}
	}
	const toggleSign = (e) => {
		if(e.target.checked)
			setSign(Number(e.target.value))	
	}
	return (
		<div className="App">
		<h2>Amount: {amt}</h2>
		<input type="radio" checked="true" name="neg" value="1" id="" onChange={toggleSign}>
		</input>
		<input type="radio" name="neg" value="-1" id="" onChange={toggleSign}>
		</input>
		<input type="number" name="" id="" onKeyDown={handleEnter}/>
		</div>
	)
}

export default App
