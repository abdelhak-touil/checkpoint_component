import "./App.css";
import ProfilPhoto from "./component/profil/ProfilPhoto";
import FullName from "./component/profil/FullName";
import Address from "./component/profil/Address";

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
