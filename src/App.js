import { Fragment } from 'react/jsx-runtime';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRouter } from './router/index';
import { DefaulLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRouter.map((route, index) => {
            let Layout = DefaulLayout
            if (route.layout){
              Layout = route.layout
            }else if(route.layout === null ){
              Layout = Fragment
            }

            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
