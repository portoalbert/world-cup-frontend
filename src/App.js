import GroupTab from "./components/GroupTab";
import "./app.css";
import Navbar from "./components/Navbar";
import MatchList from "./components/MatchList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <GroupTab />
        <MatchList />
      </div>
    </div>
  );
}

export default App;
