import { Outlet } from "react-router-dom";
import Nav from "./components/NavBtn";
import "./App.css";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <header>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>"The most difficult thing is the decision to act, the rest is merely tenacity"</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title" className='text-primary'>Amelia Earhart</cite>
          </figcaption>
        </figure>
      </header>
      <Nav />
      <main className="mx-3">
        {/* outlet is where the children components are rendered */}
        <Outlet />
      </main>
      <footer className="lead">Made with 🩵 and dedication</footer>
    </>
  );
}

export default App;
