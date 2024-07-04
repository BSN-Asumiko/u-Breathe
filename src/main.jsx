import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DisaseList from './components/disease/DisaseList.jsx'
import { dataDisease } from "./utils/dataDisease.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DisaseList />
    <DisaseList DisaseList={dataDisease} />
  </React.StrictMode>,
)
