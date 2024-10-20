import './App.css';
import SumComp from "./shared/SumComp";
import AnotherSumComp from "./shared/AnotherSumComp";
import AppNavBar from "./shared/NavBar";
import MainLayout from "./shared/MainLayout";
import ParentComponent from "./shared/ParentComponent";

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <MainLayout/>
      <SumComp/>
      <AnotherSumComp/>
        <ParentComponent/>
    </div>
  );
}

export default App;
