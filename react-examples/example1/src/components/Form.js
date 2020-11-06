import React from 'react'
import ReactDOM from 'react-dom'
import './assets/bootstrap.min.css'

function Form(props) {
	
	function formHandler(event) {
		event.preventDefault()
	
		const newData = {
			id: Math.random().toString(),
			data: document.getElementById('data').value
		};	
		
		props.onAddData(newData)
		document.getElementById('data').value = ''
	
	}
	
	return (
		<form onSubmit={formHandler}>
			<div className="form-group">
				<label htmlFor="data">Data:</label>
				<input type="text" className="form-control" id="data"/>
			</div>			
			<button type="submit" className="btn btn-primary">Submit</button>
		</form> 
	)
}

export default Form