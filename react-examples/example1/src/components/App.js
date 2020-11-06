import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import DataList from './DataList'
import './assets/bootstrap.min.css'


function App() {
	const [dataList, setDataList] = React.useState([])
	
	function AddDate(newData) {
		setDataList(dataList => dataList.concat(newData))		
	}
	
	function deleteItem(itemId) {
		dataList.forEach(obj => {			
			if(itemId == obj.id) {
				// how to delete this?
			} 
		})		
				
	}
	
	return (
		<div className="container">
			<h1>Test Functional React</h1>
			<Form onAddData={AddDate} />
			<hr />
			<DataList dataList={dataList} onDeleteItem={deleteItem}/>
		</div>
	)
}

export default App