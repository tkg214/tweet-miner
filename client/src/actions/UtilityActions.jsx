import dispatcher from '../dispatcher.jsx';

export function stopRequest() {
  dispatcher.dispatch({
    type: 'STOP_STREAM'
  });
}
