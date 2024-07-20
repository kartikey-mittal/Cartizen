


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserLayout from './Users/Page/UserLayout';
import CompanyLayout from './Company/Page/CompanyLayout';
import Test from './Company/Page/Test';

const routes = [
  { path: '/home', element: <UserLayout />,},
  { path: '/comp', element: <CompanyLayout />,},
  
  { path: '/test', element: <Test />,},
  
  

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