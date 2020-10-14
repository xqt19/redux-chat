const textReducer = (state=[], action) =>{
    switch (action.type){
        case 'TEXT_YO':
            return action.payload
        default:
            return "DEFAULT TEXT"
    }
}
export default textReducer