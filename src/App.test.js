import { render, screen } from "@testing-library/react";
import Example from "./components/Example";
import { colors } from "./App";

const htmlStyle = `
html {
  overflow: hidden;
  font-family: sans-serif;
}
`;

const cssDynamic = `.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: #eee;
}`;

const cssStatic = `
* {
box-sizing: border-box;
}

body {
  margin: 0;
}

`;

const html = `<div class='container'>
<div data-testid="test-box" class='box coral' contenteditable>(^ڡ^)</div>
</div>`;

const example = {
  title: "Centered",
  html: html,
  cssStatic: cssStatic,
  cssDynamic: cssDynamic,
};

// needed for components with codemirror
document.createRange = () => {
  const range = new Range();

  range.getBoundingClientRect = jest.fn();

  range.getClientRects = () => {
    return {
      item: () => null,
      length: 0,
      [Symbol.iterator]: jest.fn(),
    };
  };

  return range;
};

test("codemirror object renders", () => {
  render(<Example example={example} colors={colors} />);
  expect(screen.getAllByRole("presentation").length).toBeGreaterThan(0);
});

test("iframe renders on load and contains codemirror data", () => {
  render(<Example example={example} colors={colors} />);
  const iframe = screen.getByTestId("iframe");
  const srcdoc = iframe.getAttribute("srcdoc");
  expect(srcdoc).toContain(cssDynamic);
});
