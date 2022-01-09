const initialState = {
  userprofile: null,
};

const moreUserProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PROFILE':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_USER_PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        userprofile: action.data,
      };
    case 'EDIT_USER_PROFILE':
      return {
        ...state,
        isLoading: false,
      };
    case 'EDIT_USER_PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        userprofile: action.data,
      };
    default:
      return state;
  }
};

export default moreUserProfile;
