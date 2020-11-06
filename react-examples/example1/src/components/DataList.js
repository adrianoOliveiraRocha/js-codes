import React from 'react'
import ReactDOM from 'react-dom'
import Item from './Item'
import './assets/bootstrap.min.css'

function DataList(props) {	
	
	return (	
		<ul className="list-group">
			{props.dataList.map(obj => {
				return (
					<li className="list-group-item" key={obj.id}>
						{obj.data} <Item id={obj.id} onDeleteItem={props.onDeleteItem}/>
					</li>
				)
			})}			
		</ul>
	)
}

export default DataList