var React = require('react')
var DefaultLayout = require('./layouts/default')

function HelloMessage (props) {
  return (
    <DefaultLayout>
      <div className='jumbotron'>Hello {props.name}</div>
    </DefaultLayout>
  )
}

module.exports = HelloMessage
