import React from 'react'
import buttonStore from '../stores/buttonStore.js'
import ButtonActions from '../actions/buttonAction.js'
import MyButton from '../components/mybutton.js'


export default class MyButtonController extends React.Component{
  constructor(props){
    console.log(buttonStore)


    super(props);
    let defaultItems = buttonStore.getItems();
    this.state={
      items:defaultItems
    }
    this.addItem = this.addItem.bind(this);
    this.initItem = this.initItem.bind(this);
  }

  componentDidMount() {
    buttonStore.addListener(this.initItem)
  }
  componentWillUnmount() {
    buttonStore.removeListener(function (){
      console.log( `component will unmount `)
    })
  }
  initItem() {
    this.setState(
      {
        items:buttonStore.getItems()
      }
    )
  }
  addItem(){
    ButtonActions.addNewItem('add_new_item');
  }

  render(){
    return (
      <div>
        <MyButton  items={this.state.items}/>
        <button onClick={this.addItem}>click</button>
      </div>
    )
  }
}
