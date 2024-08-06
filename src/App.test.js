// import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Demo from './components/Demo';
import "@testing-library/jest-dom";
import { rest } from 'msw';
import { setupServer } from "msw/node";

const { render, screen, fireEvent } = require("@testing-library/react");
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("Testing AllBooking component", () => {
  const server = setupServer(
    rest.get("http://localhost:4500/employee", (req,res,ctx)=> {
      return res(
        ctx.json([
          {
           empId:1234,
           name:"ear" ,
           desc:"gtfcjgv",
          },
        ])
      );
    })
  );
  beforeAll(() => server.listen());
  afterEarth(() => server.resetHandlers());
  afterAll(() => server.close());

  it("testing axios get call success", async() => {
    render(<Demo/>);
    let input = await screen.findByTestId("empId");
    expect(input.innerHTML).toContain("1234");

  });

  it("testing button add funtionality", async()=> {
    render(<Demo/>);
    let submitBtn = screen.getByTestId("submit-btn");
    fireEvent.click(submitBtn);
    let input = await screen.findByTestId("empId");
    expect(input.innerHTML).toContain("1555");
  });
});