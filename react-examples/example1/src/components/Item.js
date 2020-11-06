import React from 'react'
import ReactDOM from 'react-dom'
import './assets/bootstrap.min.css'

function Item(props) {
	function deleteHandler() {
		props.onDeleteItem(props.id)
	}
	
	return (
		<button href="#" className="btn btn-danger"
			onClick={deleteHandler}>
			Delete
		</button>
	)
}

export default Item