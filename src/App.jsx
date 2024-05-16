import { Outlet } from 'react-router-dom';
import Nav from './components/NavBtn';
import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <header>Noelia Basave's Porfolio</header>
      <Nav />
      <main className="mx-3">
        {/* outlet is where the children components are rendered */}
        <Outlet />
      </main>
      <footer className ='lead' >This is a footer</footer>
    </>
  );
}

export default App
