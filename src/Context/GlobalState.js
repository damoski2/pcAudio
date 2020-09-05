import React, {createContext,useReducer} from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';
const initialState = {
    sunday_service:[
        {src:"1"},
        {src:"2"},
        {src:"3"}
    ],
    wednesday_service :[
        {src:"1"},
        {src:"2"},
        {src:"3"}
    ]
}

const url ='https://sleepy-everglades-26976.herokuapp.com';

export const fetchData = async ()=>{
    try{
        const data = await axios.get(`${url}/api/wednesday`);
        console.log(data);
       return data;

    }catch(err){
        console.log(err);
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

return(
    <GlobalContext.Provider value={{
        SundayAudios:state.sunday_service,
        WednesdayAudios:state.wednesday_service
    }}>
        {children}
    </GlobalContext.Provider>
)

}