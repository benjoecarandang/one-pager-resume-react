import Header from "./components/Header" 
import Footer from "./components/Footer" 
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="details-container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
