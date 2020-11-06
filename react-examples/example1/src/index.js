import React from 'react'
import ReactDOM from 'react-dom'
import './assets/bootstrap.min.css'
import App from './components/App'

const root = document.getElementById('root')
if(root) {
	ReactDOM.render(<App />, document.getElementById('root'))
}

 
//
//function Item(props) {
//	function deleteHandler() {
//		props.onDeleteItem(props.id)
//	}
//	
//	return (
//		<button href="#" className="btn btn-danger"
//			onClick={deleteHandler}>
//			Delete
//		</button>
//	)
//}
//
//function DataList(props) {	
//	
//	return (	
//		<ul className="list-group">
//			{props.dataList.map(obj => {
//				return (
//					<li className="list-group-item" key={obj.id}>
//						{obj.data} <Item id={obj.id} onDeleteItem={props.onDeleteItem}/>
//					</li>
//				)
//			})}			
//		</ul>
//	)
//}
//
//function Form(props) {
//	
//	function formHandler(event) {
//		event.preventDefault()
//	
//		const newData = {
//			id: Math.random().toString(),
//			data: document.getElementById('data').value
//		};	
//		
//		props.onAddData(newData)
//		document.getElementById('data').value = ''
//	
//	}
//	
//	return (
//		<form onSubmit={formHandler}>
//			<div className="form-group">
//				<label htmlFor="data">Data:</label>
//				<input type="text" className="form-control" id="data"/>
//			</div>			
//			<button type="submit" className="btn btn-primary">Submit</button>
//		</form> 
//	)
//}
//
//function App() {
//	const [dataList, setDataList] = React.useState([])
//	
//	function AddDate(newData) {
//		setDataList(dataList => dataList.concat(newData))		
//	}
//	
//	function deleteItem(itemId) {
//		console.log(itemId)
//	}
//	
//	return (
//		<div className="container">
//			<h1>Test Functional React</h1>
//			<Form onAddData={AddDate} />
//			<hr />
//			<DataList dataList={dataList} onDeleteItem={deleteItem}/>
//		</div>
//	)
//}



//Test
/*
function Test() {
	return (
		<div>
			<h1>Test</h1>
		</div>
	)
}
ReactDOM.render(<Test />, document.getElementById('test'))
*/