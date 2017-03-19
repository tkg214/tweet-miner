import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class InputStore extends EventEmitter {

  constructor() {
    super();
    this.query = '';
  }

  sendQuery(query) {
    this.query = query;
  }

  getQuery() {
    return this.query;
  }

  handleActions(action) {
    switch(action.type) {
      case 'SEND_QUERY': {
        this.sendQuery(action.query);
        this.emit('change');
      }
    }
  }
}

const inputStore = new InputStore;
dispatcher.register(inputStore.handleActions.bind(inputStore));

export default inputStore;
