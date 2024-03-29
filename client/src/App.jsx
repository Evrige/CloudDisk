import Navbar from "./components/navbar/Navbar";
import './app.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./components/authorization/Registration";
import Login from "./components/authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./action/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(auth())
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="wrap">
                    {!isAuth &&
                        <Routes>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
