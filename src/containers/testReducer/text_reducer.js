const textReducer = (state=null, action) =>{
    switch (action.type){
        case 'TEXT_YO':
            if (action.payload != "") {
                if (state == null){
                    return [action.payload]
                }
                return [...state, action.payload]
            }
            return state
        case 'TEXT_CLEAR':
            return null
        default:
            return state
    }
}
export default textReducer