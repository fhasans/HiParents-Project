const initialState = {
  activeNanny: {},
  data: {},
  activeClient: {},
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NANNY':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_NANNY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        activeNanny: action.data,
      };
    case 'GET_APPOINTMENT':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_APPOINTMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case 'GET_CLIENT':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_CLIENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        activeClient: action.data,
      };
    default:
      return state;
  }
};

export default dashboard;
