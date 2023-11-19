import './App.css';

import { BrowserRouter } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import Router from './components/Router';

function App() {
  return <>
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    {/* </ErrorBoundary> */}
  </>

    ;
}

export default App;
