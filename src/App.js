import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Character from './components/Character';
import Details from './components/Details';


// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const StyledApp = styled.div`
  font-family: sans-serif;
`
const StyledHeader = styled.h1`
  font-size: 3rem;`

const App = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [currentId, setCurrentId] = useState('');
  
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  },[]

  )

  return (
    <StyledApp className="App">
    <StyledHeader className="Header">Characters of The Star Wars Universe!</StyledHeader>
    {
      currentId && <Details data={data} currentId={currentId}/>
    }
    {
      data.map((data, idx) => {
        return <Character id={idx} data={data} />
      })
    }
  </StyledApp>
  );
}

export default App;
