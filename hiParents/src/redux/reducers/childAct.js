const initialState = {
    childActData: [],
    eachChildData: [],
    appointment_id: [],
    actData: [],
    updatedAct: [],
    deleteAct: ''
}

const childAct = (state=initialState, action) =>{
    switch (action.type) {
        case 'REQ_CHILD_ACT_DATA':
            return{
                ...state,
                childActData: []
            };
        case 'CHILD_ACT_DATA_RECEIVED':
            return{
                ...state,
                childActData: action.data
            };
        case 'REQ_ALL_ACT_FROM_EACH_CHILD':
            return{
                ...state,
                eachChildData: []
            }
        case 'ALL_ACT_FROM_EACH_CHILD_RECEIVED':
            return{
                ...state,
                eachChildData: action.data
            }
            case 'REQ_CREATE_ACTIVITY':
            return {
                ...state,
                appointment_id: [],
                actData: []
            };
        case 'ACTIVITY_CREATED':
            return{
                ...state,
                actData: action.data
            }
            case 'REQ_UPDATE_ACTIVITY':
            return {
                ...state,
                updatedAct: []
            };
        case 'ACTIVITY_UPDATED':
            return{
                ...state,
                updatedAct: action.data
            }
            case 'REQ_DELETE_ACTIVITY':
            return {
                ...state,
                deleteAct: ''
            };
        case 'ACTIVITY_DELETED':
            return{
                ...state,
                deleteAct: action.data
            }
        default:
            return state;
    }
}

export default childAct