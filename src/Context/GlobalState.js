import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';
const initialState = {
    sunday_data: [
        { src: "1" },
        { src: "2" },
        { src: "3" }
    ],
    wednesday_data: [
        { src: "1" },
        { src: "2" },
        { src: "3" }
    ],
    navdrawerOpen: false
}

const url = 'https://hidden-escarpment-90517.herokuapp.com/';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export const fetchWednesday = async () => {
    try {
        const { data } = await axios.get(proxyUrl + url + '/api/wednesday');
        //console.log(data);
        const wednesdayData = data.map((audioData) => ({
            id: audioData.id,
            name: audioData.name,
            link:audioData.link,
            lastUpdate: audioData.lastUpdate,
            uploadDate: audioData.uploadDate,
            ministration: audioData.sections.ministration,
            ministration_src: audioData.sections.ministration_src,
            praise_and_worship: audioData.sections.praise_and_worship,
            praise_and_worship_src: audioData.sections.praise_and_worship_src,
            message: audioData.sections.message,
            message_src: audioData.sections.message_src,
            benediction: audioData.sections.benediction
        }))
        return wednesdayData
    } catch (err) {
        console.log(err);
    }
}

export const fetchSunday = async () => {
    try {
        const { data } = await axios.get(proxyUrl + url + '/api/sunday');
        const sundayData = data.map((audioData) => ({
            id: audioData.id,
            name: audioData.name,
            link:audioData.link,
            lastUpdate: audioData.lastUpdate,
            uploadDate: audioData.uploadDate,
            ministration: audioData.sections.ministration,
            ministration_src: audioData.sections.ministration_src,
            praise_and_worship: audioData.sections.praise_and_worship,
            praise_and_worship_src: audioData.sections.praise_and_worship_src,
            message: audioData.sections.message,
            message_src: audioData.sections.message_src,
            benediction: audioData.sections.benediction
        }))
        return sundayData
    } catch (err) {
        console.log(err);
    }
}

export const fetchQuote = async()=>{
    try{
        const { data } = await axios.get(proxyUrl + url + '/api/quotes');
        const quoteData = data .map((quotes)=>({
            id: quotes.id,
            quote: quotes.quote,  
            By : quotes.By
        }))
        return quoteData
    }catch(err){
        console.log(err);
    }
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
   function TogglenavOpen(){
        dispatch({
            type: 'TOGGLE_NAV',
        })
   }

   function setnavClose(){
       dispatch({
           type:'CLOSE_NAV',
       })
   }

    return (
        <GlobalContext.Provider value={{
            SundayAudios: state.sunday_data,
            WednesdayAudios: state.wednesday_data,
            NavdrawerState: state.navdrawerOpen,
            TogglenavOpen,
            setnavClose
        }}>
            {children}
        </GlobalContext.Provider>
    )

}