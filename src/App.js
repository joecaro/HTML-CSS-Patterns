import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Example";

const html = `<div class='container'><div class='box'></div></div>`;
const css = `
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: #999;
}

.box {
  width: 10px;
  height: 10px;
  background-color: black;
}
`;

function App() {
  return (
    <div className='App'>
      <Example Html={html} Css={css} />
      <Example Html={html} Css={css} />
    </div>
  );
}

export default App;
