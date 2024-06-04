import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet /> // Outlet is a component that will render the appropriate child route component
      </main>
    </>
  );
}

export default App;