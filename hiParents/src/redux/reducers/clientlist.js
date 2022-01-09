const initialState = {
    dataAppointment: [],
    appointStatus: [],
    sortedData: null,
    filter: null
}

const client = (state = initialState, action) => {
    switch (action.type) {
      case 'REQ_APPOINTMENT_DATA':
          return {
            ...state,
            dataAppointment: []
          };
      case 'APPOINTMENT_DATA_RECEIVED':
        // console.log('DATA RECIEVED', action.data);
          return {
            ...state,
            dataAppointment: action.data,
          };
      case 'REQ_UPDATE_APPOINTMENT_STATUS':
          return {
            ...state,
            appointStatus: []
          };
      case 'APPOINTMENT_STATUS_UPDATED':
          return {
            ...state,
            appointStatus: action.data
          };
      case 'SORTED_DATA':
          return {
            ...state,
            sortedData: action.data
          };
      case 'GET_CHECKED_FILTER':
        return{
          ...state,
          filter: action.data
        }
      default:
          return state;
}
}

export default client;