import text from './alltext'

export const textYo = () =>{
    return {
        type: 'TEXT_YO',
        payload: text
    }
}
export const textDefault =()=>{
    return {
        type: ''
    }
}