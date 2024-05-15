import { Outlet } from 'react-router-dom';
import Nav from './components/NavBtn';
import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        {/* outlet is where the children components are rendered */}
        <Outlet />
      </main>
    </>
  );
}

export default App
