import  Flux from 'flux'
import  ButtonStore from '../stores/buttonStore.js'

let  AppDispatcher = new Flux.Dispatcher();


AppDispatcher.register(function(action) {
  if (action.actionType === 'ADD_NEW_ITEM') {
    ButtonStore.emitAdd(action)
  }
});

export default AppDispatcher;
