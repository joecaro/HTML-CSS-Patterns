import "./App.css";
import Example from "./components/Example";

const colors = `
.coral {
  background-color: #ffa07d;
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
    <div class='box coral' contenteditable>(^ڡ^)</div>
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
      font-size: 1.3rem;
      display: grid;
      place-items: center;
    }`,
    cssDynamic: `.container {
      height: 100vh;
      width: 100vw;
      display: grid;
      place-items: center;
      background-color: #eee;
    }`,
  },
  {
    title: "Tiled List - Grid",
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
    cssDynamic: `.container {
      background-color: white;
      padding: .5rem;
      height: 100vh;
      width: 100vw;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }`,
  },
  {
    title: "Tiled List - Flex",
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
    cssDynamic: `.container {
      background-color: white;
      padding: .5rem;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    
    .box {
      /* flex shorthand */
      /* change values to see change */
      /* flex-grow  flex-shrink  flex-basis */
      flex: 1 0 200px;

    }
    `,
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
    title: "Cards List",
    html: `<div class='container'>
    <div class='box lightskyblue'></div>
    <div class='box lightskyblue'></div>
    <div class='box lightskyblue'></div>
    <div class='box lightskyblue'></div>
    <div class='box lightskyblue'></div>
    <div class='box lightskyblue'></div>
    <div class='box lightskyblue'></div>
    <div class='box lightskyblue'></div>
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
      overflow-y: scroll;
      padding: 1rem;
      background: white;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-content: flex-start;
    }

    `,
  },
  {
    title: "Clamped Card Size",
    html: `<div class='container'>
    <div class='card coral'>
    <h4>TITLE<h4>
      <div class='pic lightskyblue'></div>
      <p>Pariatur nulla nisi excepteur ad aliquip magna esse culpa sint adipisicing et consectetur proident.</p>
    </div>
  </div>`,
    cssStatic: `  
    * {
    box-sizing: border-box;
  }

    body {
      margin: 0;
    }
    .container {
      height: 100vh;
      width: 100vw;
      overflow-y: scroll;
      padding: 1rem;
      background: white;
      display: grid;
      place-items: center;
    }

    .container div {
      border-radius: .3rem;
    }

    h4 {
      font-size: 1.4rem;
      margin: 1rem;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
    }
    
    `,
    cssDynamic: `
    .card {
      width: clamp(25ch, 50%, 40ch);
      height: 350px;
      display: flex;
      flex-direction: column;
      padding: .5rem;
    }

    .pic {
      height: 125px;
      width: 100%;
    }
    `,
  },
  {
    title: "Maintain Image Aspect Ratio",
    html: `<div class='container'>
    <div class='card coral'>
    <h4>TITLE<h4>
      <div class='pic lightskyblue'></div>
      <p>Pariatur nulla nisi excepteur ad aliquip magna esse culpa sint adipisicing et consectetur proident.</p>
    </div>
  </div>`,
    cssStatic: `  
    * {
    box-sizing: border-box;
  }

    body {
      margin: 0;
    }
    .container {
      height: 100vh;
      width: 100vw;
      overflow-y: scroll;
      padding: 1rem;
      background: white;
      display: grid;
      place-items: center;
    }

    .container div {
      border-radius: .3rem;
    }

    h4 {
      font-size: 1.4rem;
      margin: 1rem;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
    }
    
    `,
    cssDynamic: `
    .card {
      width: clamp(25ch, 50%, 40ch);
      height: 350px;
      display: flex;
      flex-direction: column;
      padding: .5rem;
    }

    .pic {
      width: 100%;
      aspect-ratio: 16/9;
    }
    `,
  },
  {
    title: "Masonry",
    html: `<div class='container'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
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

    .box:nth-child(n) {
      height: 130px;
      background-color: #ffa07d;
    }
    .box:nth-child(3n) {
      height: 100px;
      background-color: pink;
    }
    .box:nth-child(2n) {
      height: 80px;
      background-color: lightskyblue;
    }
    `,
    cssDynamic: `
    .container {
      height: 100vh;
      width: 100vw;
      padding: 1rem;
      background: white;
      columns: auto;
      column-width: 100px;
      column-gap: 1rem;
    }
    
    .box {
      width: 100px;
      border-radius: 1rem;
      display: inline-block;
    }
    `,
  },
  {
    title: "Tree",
    html: `<div class='container'>
    <ul>
      <li >
      <div class="box"></div>
          <ul>
            <li><div class="box"></div></li>
            <li><div class="box"></div></li>
          </ul>
      </li>
      <li >
      <div class="box"></div>
          <ul>
            <li><div class="box"></div></li>
            <li><div class="box"></div></li>
          </ul>
      </li>
    </ul>
  </div>`,
    cssStatic: `  
    * {
    box-sizing: border-box;
  }

    body {
      margin: 0;
    }

    .container {
      height: 100vh;
      width: 100vw;
      background: white;
      display: grid;
      place-items: center;

    }

    .box {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 3px;
      background-color: #64A664;
    }
    `,
    cssDynamic: `    
    /* tree level */
    ul {
      position: relative;
      display: flex;
      justify-content: center;
      list-style-type: none;
      margin: 0;
      padding: 2rem 1rem 0rem 1rem;
    

    }

    /* node */
    li {
      padding: 2rem 1rem 0rem 1rem;
      position: relative;

      /* Center the content */
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    /* vertical line before node */
    li::before {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      content: '';

      /* Position */
      position: absolute;
      top: 0;
      right: 50%;

      /* Size */
      height: 2rem;
      width: 50%;
    }

    /* vertical line after node */
    ul::before {
      border-right: 1px solid #000;
      content: '';

      /* size */
      width: 50%;
      height: 2rem;

      /* postition */
      position: absolute;
      top: 0;
      right: 50%;
    }

    /* horizontal line */
    li::after {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      content: '';

      /* Position */
      position: absolute;
      top: 0;
      right: 0;

      /* Size */
      width: 50%;
    }

    li:first-child::before,
    li:last-child::after {
      /* Remove the top of border from the first and last items */
      border-top: none;
    }

    /* Add a root item if you want */
    li_root::before {
      border-right: none;
    }
    `,
  },
];

function App() {
  return (
    <div className='App'>
      <section className='section-container'>
        <h1>CSS Design Patterns</h1>
        <p>CSS patterns that I find useful and you may too. :)</p>
      </section>
      {examples.map((example) => (
        <Example example={example} colors={colors} />
      ))}
    </div>
  );
}

export default App;
