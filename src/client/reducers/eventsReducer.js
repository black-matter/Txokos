import * as types from '../constants/actionTypes';

const initialState = {
  eventsImInvitedTo: [],
  eventsImHosting: []
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_EVENTS_HOSTING:
      return {
        ...state,
        eventsImHosting: action.payload.events
      };

    case types.CREATE_EVENT:
      const { host, location, time, date, foodList, invitees } = action.payload;

      const newEvent = {
        host,
        location,
        time,
        date,
        foodList,
        invitees
      };

      const eventsImHosting = state.eventsImHosting.slice();

      eventsImHosting.push(newEvent);

      return {
        ...state,
        eventsImHosting
      };
    case types.ADD_FOOD_TO_EVENT:

    case types.INVITE_PEOPLE:

    case types.VIEW_ATTENDEES:

    default:
      return state;
  }
};

export default eventsReducer;
