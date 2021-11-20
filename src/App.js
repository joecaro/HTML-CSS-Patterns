import "./App.css";
import Example from "./components/Example";

const colors = `
.coral {
  background-color: coral;
}

.lightskyblue {
  background-color: lightskyblue;
}

.palegreen {
  background-color: palegreen;
}

.moccasin {
  background-color: moccasin;
}

.pink {
  background-color: pink;
}`;

const examples = [
  {
    title: "Centered",
    html: `<div class='container'>
    <div class='box' contenteditable>(^ڡ^)</div>
  </div>`,
    cssStatic: `
    * {
    box-sizing: border-box;
  }

    body {
      margin: 0;
    }
    
    .box {
      padding: 1em;
      border-radius: 10px;
      background-color: coral;
      font-size: 1.3rem;
      display: grid;
      place-items: center;
    }`,
    cssDynamic: `

    .container {
      height: 100vh;
      width: 100vw;
      display: grid;
      place-items: center;
      background-color: #eee;
    }`,
  },
  {
    title: "Tiled List",
    html: `<div class='container'>
    <div class='box moccasin' contenteditable>1</div>
    <div class='box palegreen' contenteditable>2</div>
    <div class='box lightskyblue' contenteditable>3</div>
    <div class='box coral' contenteditable>4</div>
  </div>`,
    cssStatic: `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      max-height: 100vh;
    }
    
    .box {
      border-radius: 1rem;
      display: grid;
      place-items: center;
    }`,
    cssDynamic: `

    .container {
      background-color: white;
      padding: .5rem;
      height: 100vh;
      width: 100vw;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }`,
  },
  {
    title: "Holy Grail",
    html: `<div class='container'>
    <div class="header coral">Header</div>
    <div class="left-sidebar moccasin">Left Sidebar</div>
    <div class="main-content lightskyblue">Main Content</div>
    <div class="right-sidebar palegreen">Right Sidebar</div>
    <div class="footer pink">Footer</div>
  </div>`,
    cssStatic: `
    * {
    box-sizing: border-box;
  }

    body {
      margin: 0;
    }

    .container * {
      padding: 1rem;
    }
    `,
    cssDynamic: `

    .container {
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template: auto 1fr auto / auto 1fr auto;
      background: white;
    }
    
    .header{
      grid-column: 1 / 4;
    }
    
    .left-sidebar {
      grid-column: 1 / 2;
    }

    .main-content {
      grid-column: 2 / 3;
    }

    .right-sidebar {
      grid-column: 3 / 4;
    }

    .footer {
      grid-column: 1 / 4;
    }
    `,
  },
  {
    title: "Cards",
    html: `<div class='container'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>`,
    cssStatic: `  
    * {
    box-sizing: border-box;
  }

    body {
      margin: 0;
    }

    .box {
      width: 125px;
      height: 125px;
      border-radius: 1rem;
      background-color: grey;
    }
    `,
    cssDynamic: `

    .container {
      height: 100vh;
      width: 100vw;
      padding: 1rem;
      background: white;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-content: flex-start;
    }

    `,
  },
];
function App() {
  return (
    <div className='App'>
      {examples.map((example) => (
        <Example example={example} colors={colors} />
      ))}
    </div>
  );
}

export default App;
