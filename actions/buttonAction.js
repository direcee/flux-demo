import AppDispatcher from '../dispatcher/appDispatcher.js'

const ADD_NEW_ITEM='ADD_NEW_ITEM'

const buttonActions =  {
  addNewItem:function(text){
    AppDispatcher.dispatch({
        actionType:ADD_NEW_ITEM,
        text:text
      }
    )
  }

}

export default  buttonActions;
