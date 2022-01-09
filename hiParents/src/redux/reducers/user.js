const initialState = {
    token: '',
    userPassword: ''
}

const user = (state=initialState,action) => {
    switch (action.type) {
        case 'REQ_EDIT_PASSWORD':
            return {
                ...state,
                token: ''
            };
        case 'EDIT_PASSWORD_SUCCESS':
            return{
                ...state,
                token: action.token,
            }
        case 'REQ_EDIT_FAILED':
            return state;
        default:
            return state;
    }
}

export default user;