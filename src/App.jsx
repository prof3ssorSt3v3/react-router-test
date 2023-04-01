import { Route, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Dunno from './Dunno';
import Layout from './Layout';
import Users from './Users';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/404" element={<Dunno />} />
      <Route path="*" element={<Dunno />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
