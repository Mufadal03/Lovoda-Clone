import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Layout } from './components/Layout/Layout';
import { Homepage } from './components/Pages/Homepage';
import { AllRoutes } from './components/Routes/Alloutes';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Footer /> */}
      {/* <Layout >
        <Homepage />
      </Layout> */}
      <AllRoutes />
    </div>
  );
}

export default App;
