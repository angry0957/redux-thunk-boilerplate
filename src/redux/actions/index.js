import{LOADING}from"./types";

export function loadingPureFunction(){
    return {
        type:LOADING
    }
}

export function AsyncLoading(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch(loadingPureFunction())
        },
        2000)
    }
}