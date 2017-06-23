import EventEmitter from 'events'


class ButtonStore extends EventEmitter{
  items = [];

  getItems() {
    return Array.from(this.items)
  }

  addItem(action) {
    this.items.push(action.text)
  }

  emitAdd(action) {
    this.addItem(action);
    this.emit('add');
  }

  addListener(callback) {
    this.on('add',callback)
  }

  removeListener(callback){
    this.removeListener('add',callback)
  }
}
const buttonStore = new  ButtonStore()
export default buttonStore;
