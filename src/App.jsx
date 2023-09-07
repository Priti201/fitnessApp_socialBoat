import React, { Suspense, lazy, useState } from 'react'
import Header from './Header'
// import VideoGallery from './components/VideoGallery'
import VideoGallery from'./VideoGallery'

const App = () => {
  const [search ,setSearch] = useState('')
  const [numResult ,setNumResult] = useState(30)
  return (
    <>
      <Header search={search} setSearch={setSearch} setNumResult={setNumResult}/>
      <Suspense fallback={<div style={{height:'90vh', display:'flex',justifyContent:'center',alignItems:'center',fontSize:'50px'}}><i className="fa-solid fa-loader fa-spin"></i></div>}>
        <VideoGallery search={search} numResult={numResult}/>
      </Suspense>
    </>
  )
}

export default App