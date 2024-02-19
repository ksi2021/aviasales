const initialState = {
  filters: {
    all: true,
    transfer_0: true,
    transfer_1: true,
    transfer_2: true,
    transfer_3: true,
  },
  data: [],
  sort:'cheap',
  currentData: [],
  availableTicketCount:5,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_FILTER':
    return { ...state, filters: action.payload };
  case 'ADD_TICKETS':
    return {
      ...state,
      data: [...state.data, ...action.part.tickets]
    };
  case 'ADD_COUNT':
    return {
      ...state,
      availableTicketCount: state.availableTicketCount + 5,
    };
  case 'CHANGE_SORT':
    return{
      ...state,
      sort: action.payload
    };
  default:
    return state;
  }
};

export default reducer;
