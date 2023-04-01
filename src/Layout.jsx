import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <header>
        <h1>Web Site</h1>
      </header>

      <Outlet />

      <footer>
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
}

export default Layout;
