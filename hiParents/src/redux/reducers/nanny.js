const initialState = {
  nannyListDefault: {},
  nannyListActive: {},
  nannyListInactive: {},
  nannyListAscending: null,
  nannyListDescending: null,
  sort: 'status',
  sortby: 'sortby',
  listsortfilter: null,
  assignChild: null,
  nannyChild: [],
  nannyId: ''
};

const nannyList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NANNY_LIST':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_NANNY_LIST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        nannyListDefault: action.data,
      };
    case 'GET_NANNY_ACTIVE':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_NANNY_ACTIVE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        nannyListActive: action.data,
      };
    case 'GET_NANNY_INACTIVE':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_NANNY_INACTIVE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        nannyListInactive: action.data,
      };
    case 'GET_NANNY_ASCENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_NANNY_ASCENDING_SUCCESS':
      return {
        ...state,
        isLoading: false,
        nannyListAscending: action.data,
      };
    case 'GET_NANNY_DESCENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_NANNY_DESCENDING_SUCCESS':
      return {
        ...state,
        isLoading: false,
        nannyListDescending: action.data,
      };
    case 'UPDATE_SORT':
      return {
        ...state,
        sort: action.data,
      };
    case 'SORT_BY':
      return {
        ...state,
        sortby: action.data,
      };
    case 'GET_NEW_DATA':
      return {
        ...state,
        listsortfilter: action.data,
      };
      case 'REQ_ASSIGN_CHILD':
      return {
        ...state,
       assignChild: null
      };
    case 'CHILD_ASSIGNED':
      return {
        ...state,
        assignChild: action.data
      };
      case 'GET_NANNYCHILD_DATA':
      return {
        ...state,
       nannyChild: [],
       nannyId: ''
      };
    case 'CHILD_DATA_RECEIVED':
      return {
        ...state,
        nannyChild: action.data
      };
    default:
      return state;
  }
};

export default nannyList;
