


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserLayout from './Users/Page/UserLayout';

const routes = [
  { path: '/home', element: <UserLayout />,},
  

];

const App= ()=> {
  return (
    <>
    <div style={{}}>
    <Router>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
      </div>
        </>
);
}

export default App;