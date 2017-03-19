import dispatcher from '../dispatcher.jsx';

export function sendQuery(query) {
  dispatcher.dispatch({
    type: 'SEND_QUERY',
    query: query
  })
}
