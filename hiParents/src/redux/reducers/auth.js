const initialState = {
    isLoggedIn: false,
    token: '',
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                isLoggedIn: true,
                token: ''
            };
            case 'STORE_TOKEN':
            return {
                ...state,
                token: action.savetoken,
            };
            case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.token,
                isLoggedIn: false,
            };
            case 'LOGIN_FAILED':
            return {
                ...state,
                isLoggedIn: true,
            };
            case 'REMOVE_TOKEN':
            return {
                ...state,
                token: action.token,
                isLoading: false,
                isLoggedIn: false,
                token: '',
            };
            case 'REMOVE_TOKEN_SUCCESS':
            return {
                ...state,
                isLoading: true,
                token: '',
            };
            default:
            return state;
          
    }
}


export default auth;