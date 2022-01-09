const initialState = {
    token: '',
    regData: '',
}

const register = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                token: ''
            };
        case 'REGISTER_SUCCESS':
            return{
                ...state,
                token: action.token,
            }
        case 'REGISTER_FAILED':
            return state;
        default:
            return state;
          
    }
}

export default register;