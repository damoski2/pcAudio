export default (state,action)=>{
    switch(action.type){
        
        case 'TOGGLE_NAV':
            return{
                ...state,navdrawerOpen:!state.navdrawerOpen
            }

        case 'CLOSE_NAV':
            return{
                ...state,navdrawerOpen:false
            }
    }
}