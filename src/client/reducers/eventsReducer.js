import * as types from '../constants/actionTypes';

const initialState = {
  eventsImHosting: [],
  eventsImInvitedTo: [],
  foodsToBring: [],
  listOfAttendees: {
    invited: [],
    rsvpd: []
  },
  seeEventDetails: false
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_EVENTS_HOSTING:
      return {
        ...state,
        eventsImHosting: action.payload
      };

    case types.LOAD_EVENTS_INVITED:
      return {
        ...state,
        eventsImInvitedTo: action.payload
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
    return {
      ...state,
      foodsToBring: action.payload
    }

    case types.INVITE_PEOPLE:

    case types.VIEW_ATTENDEES:
      return {
        ...state,
        seeEventDetails: true,
        listOfAttendees: action.payload
      };

    default:
      return state;
  }
};

export default eventsReducer;