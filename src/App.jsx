import Chat from "./components/chats/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import "./App.css";
import { useStateValue } from "./components/StateProvider";
import Footer from "./components/Footer";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__body">
            <Router>
              <Sidebar />
              <Routes>
                <Route path="/rooms/:roomId" element={<Chat />} />
              </Routes>
            </Router>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
