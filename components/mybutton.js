import React from 'react'

function MyButton(props){
  let items = props.items;
  let itemsList = items.map((item,index) => {
    return <li key={index}>item</li>
  })
  return(
    <div>
      <ul>
        {itemsList}
      </ul>
    </div>
  )
}

export default MyButton;
