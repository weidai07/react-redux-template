// ------------ You will put your combined reducers here --------------

import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTicketList: ticketListReducer
});

export default rootReducer;
