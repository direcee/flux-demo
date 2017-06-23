import React from 'react'
import reactdom  from 'react-dom'

class MyComponent extends React.Component{

  constructor(){
    super()
  }
  render(){
    return <div>
      this is test
    </div>
  }
}

reactdom.render(<MyComponent name="hello"/>,document.getElementById('container'))
