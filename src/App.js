import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import {ToastContainer} from "react-toastify";
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <Shop/>
      <Footer/>
    </div>
  );
};
export default App;
