import './App.css';
import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import {useEffect} from "react";
import {auth} from "./firebase";

function App() {
    const user = null;
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
            if(userAuth){
                //logged in
                console.log(userAuth);
            }else{
                //logged out
            }
        })
        return unsubscribe;
    },[])

  return (
    <div className="App">
        <Router>
            { !user ?(
                <LoginScreen/>
                ):(
            <Routes>
                <Route path ="/" element={<HomeScreen/>}/>
            </Routes>
                )}
        </Router>
    </div>

  );
}

export default App;
