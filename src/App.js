import './App.css';
// import {BrowserRouter } from "react-router-dom";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import NavBar from './components/NavBar';
import ItemDetail from './pages/ItemDetail';
import ErrorPage from './pages/ErrorPage';

function App() {

  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path='/' element={<Home />} />
  //     <Route path='/about' element={<About />} />
  //     <Route path='/items' element={<Items />} />
  //   </>
  // );

  // const routers = createBrowserRouter(routes);

  const routers = createBrowserRouter([{
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/items", element: <Items /> },
      { path: "/items/:id", element: <ItemDetail /> }
    ]
  }]);

  return (
    <div className="App">
      <RouterProvider router={routers} />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
