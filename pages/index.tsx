import React, { useReducer, useCallback, useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout'
import { useQuery, gql } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/getCharacter';
import Greeting from '../notes/hooks';
import ListCreator, {ListItem, ListItems} from '../components/ListCreator/ListCreator';
const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer");
  switch(action.type) {
    case "enteredName":
      if(state.enteredName === action.payload) {
        return state;
      }
      return { ...state, enteredName: action.payload}
    case "message":
      return { ...state, message: `Hello, ${action.payload}` }
    default:
      throw new Error("Invalid action type " + action.type);
  }
}

const initialState = {
  enteredName: "",
  message: "",
};


const Home = () => {
  const [{ message, enteredName }, dispatch] = React.useReducer(reducer, initialState);  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "enteredName", payload: e.target.value
    });
    dispatch({ type: "name", payload: e.target.value });
  }

  const [startCount, setStartCount] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const setCountCallback = React.useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc);
  }, [count, startCount]);

  const [listItems, setListItems] = React.useState<Array<ListItem>>();

  useEffect(() => {
    const li = [];
    for(let i = 0; i < count; i++) {
      li.push({ id: i });
    }
    setListItems(li);
    console.log("LIST: ", li)
  }, [count]);

  const onWelcomeBtnClick = () => {
    setCountCallback();
  }

  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  }

  console.log("App.tsx render");
  return (    
  <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
      <Greeting 
        message={message} 
        enteredName={enteredName} 
        greetingDispatcher={dispatch} />

      <div style={{marginTop: '10px'}}>
        <label>Enter a number then increment it</label>
        <br/>
        <input value={startCount} onChange={onChangeStartCount} style={{width: '.75rem'}} />&nbsp;
        <label>{count}</label>
        <br/>
        <button onClick={onWelcomeBtnClick}>Increment count</button>
      </div>

      <div>
        <ListCreator listItems={listItems} />
      </div>
    </header>
  </div>
  )
}

export default Home
