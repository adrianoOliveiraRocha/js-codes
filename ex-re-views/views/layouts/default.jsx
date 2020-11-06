var React = require('react')

function DefaultLayout (props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <script src='/bootstrap.min.css' rel='stylesheet' />
      </head>
      <body>
        <div className='container'>
          {props.children}
        </div>
      </body>
    </html>
  )
}

module.exports = DefaultLayout
