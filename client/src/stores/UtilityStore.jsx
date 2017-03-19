import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class UtilityStore extends EventEmitter {

  constructor() {
    super();
    this.streamStatus = false;
  }

  stopRequest() {
    this.streamStatus = true;
  }

  stopStream() {
    return this.streamStatus;
  }

  handleActions(action) {
    switch(action.type) {
      case 'STOP_STREAM': {
        this.stopRequest();
        this.emit('change');
        break;
      }
    }
  }
}

const utilityStore = new UtilityStore;
dispatcher.register(utilityStore.handleActions.bind(utilityStore));

export default utilityStore;
