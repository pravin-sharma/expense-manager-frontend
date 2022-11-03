
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Auth from './components/pages/Auth';
import NavigationBar from './components/layouts/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Auth />
    </div>
  );
}

export default App;
