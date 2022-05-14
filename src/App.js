import { useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Header from './components/Header';
import { useDispatch } from "react-redux";
import { fetchProducts, fetchCategories, fetchCart } from './Reducer/Slices/prodSlice'
import MainPage from './pages/MainPage';
import Policy from './components/MainPage/Policy';
import Subscribe from './components/MainPage/Subscribe';
import Footer from './components/Footer';

function App({ isLogged }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchCart())
  }, [dispatch])

  return (
    <>
      <TopNav />
      <Header />
      <MainPage />
      <Policy />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
