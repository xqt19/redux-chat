// import text from './alltext'

export const textYo = (text) =>{
    return {
        type: 'TEXT_YO',
        payload: text
    }
}
export const textClear =()=>{
    return {
        type: 'TEXT_CLEAR'
    }
}