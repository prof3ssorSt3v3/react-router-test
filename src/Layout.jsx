import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <header>
        <h1>Web Site</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Home</Link>
        <Link to="/asdf">Unknown</Link>
      </nav>

      <Outlet />

      <footer>
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
}

export default Layout;
