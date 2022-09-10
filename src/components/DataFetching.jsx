import axios from 'axios';
import React, { useEffect,useReducer } from 'react'

const initialState ={
    loading:true,
    data:{},
    err:"",
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case "Fetch Success": 
        return{
            ...prevState,
            loading:false,
            data:action.payload,
        };
        case "Fetch Error": 
        return{
            ...prevState,
            loading:false,
            data:action.payload,
    };
    default:
        return prevState;
}

};

const DataFetching = () => {
    const [state, dispatch] =useReducer(reducer, initialState);


    useEffect (()=> {
        getUsers();
    },[]);

    const getUsers=async() => {
        try {

            const res=await axios.get ("https://jsonplaceholder.typicode.com/users/1");
            console.log(res);
            dispatch({type:"Fetch Success", payload:res.data});
        } catch(err) {
            dispatch({type:"Fetch Error", payload:err.message});
        }
    };
  
    if(state.loading) {
        return <h1>Loading..... </h1>;
    } 
    if(state.err){
        return <p> { state.err}</p>;
    } 
   
        return <h1> {state.data.name}</h1>;
};

    

export default DataFetching;