import {Fragment} from 'react'

function App() {
  const name = '리액트2';
  return (
    <>
        {name === '리액트'&&<h1>리액트입니다</h1>}
    </>
  );
}

export default App;
