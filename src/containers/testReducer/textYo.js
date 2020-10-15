// import text from './alltext'
//this is all the actions associated with the dummy test
export const TEXT_YO = 'TEXT_YO'
export const textYo = (text) =>{
    return {
        type: TEXT_YO,
        payload: text
    }
}
export const TEXT_CLEAR = 'TEXT_CLEAR'
export const textClear =()=>{
    return {
        type: TEXT_CLEAR
    }
}
export const NEW_JOKE = 'NEW_JOKE'
export const chucknorrisjoke =()=>{
    return fetch('http://api.icndb.com/jokes/random')
    .then(response =>response.json())
    .then((data)=>{
        return {
            type: NEW_JOKE,
            payload: data.value.joke
        }
    })

}