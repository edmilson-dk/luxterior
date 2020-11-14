import React, { Suspense } from 'react';

import Theme from './Styles/theme';
import GlobalStyles from './Styles/globals';

//import HomePage from './Screens/HomePage/';
//import Header from './Components/UI/Header/';
import Loading from './Components/UI/Loading/';

const Header = React.lazy(() => import('./Components/UI/Header/'));
const HomePage = React.lazy(() => import('./Screens/HomePage/'));
const Footer = React.lazy(() => import('./Components/UI/Footer/'));

function App() {
  return (
    <Theme>
      <GlobalStyles/>
      <Suspense fallback={<Loading/>}>
        <Header/>
        <HomePage/>
        <Footer/>
      </Suspense>
    </Theme>
  );
}

export default App;
