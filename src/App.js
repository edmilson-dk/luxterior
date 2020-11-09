import Theme from './Styles/theme';
import GlobalStyles from './Styles/globals';

import HomePage from './Screens/HomePage/';
import Header from './Components/UI/Header/';

function App() {
  return (
    <Theme>
      <GlobalStyles/>
      <Header/>
      <HomePage/>
    </Theme>
  );
}

export default App;
