import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataFromApi } from './utils/api'
import { getApiConfiguration } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/index'
import Home from './pages/home/home'
import Datails from './pages/details/details'
import SearchResult from './pages/SerchResult/SerchResult'
import Explore from './pages/explore/explore'
import PageNotFound from './pages/404/pageNotFound'

function App() {


  const dispatch = useDispatch()
  const { url } = useSelector((state => state.home))

  useEffect(() => {
    fechApiConfig()
  }, [])

  const fechApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        const url={
          backdrop:res.images.secure_base_url + 'original',
          poster:res.images.secure_base_url + 'original',
          profile:res.images.secure_base_url + 'original',
        }
        dispatch(getApiConfiguration(url))

      })
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Datails />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
