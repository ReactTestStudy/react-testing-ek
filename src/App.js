import './App.css';
import styled from 'styled-components'
import { useState } from 'react';


const Button = styled.button`
padding:5px 10px;
border:none:
font-weight:bold;
&:hover{
  transform:scale(1.05);
  background:pink;
}
`
const P = styled.p`
padding:5px 10px;
border:1px solid pink;
border-radius:10px;
color:#ccc;
font-size:12px;`

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <P>react-testing-exercise #1</P>
        <h4>Increment Counter🎅</h4>
        <div>
          {/* 테스트1 */}
          <div data-testid="counter">{counter}</div>
          <div>
            <Button>+</Button>
            <Button>-</Button>
          </div>
          <Button>on &#47; off</Button>

        </div>
      </header>
    </div>
  );
}
export default App;
