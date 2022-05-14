import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import ProtectedPages from './pages/ProtectedPages';
import { useDispatch } from "react-redux";
import { fetchProducts, fetchCategories, fetchCart } from './Reducer/Slices/prodSlice'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchCart())
  }, [dispatch])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedPages />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

      </Routes>


    </div>
  );
}

export default App;
