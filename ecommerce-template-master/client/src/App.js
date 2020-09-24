import React from 'react'
import './App.css'
import styles from './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer.js'
import Navbar from './components/Navbar/Navbar.js'
import Table_Products from './components/Table_Products/Table_Products.jsx'
import FormProduct from './components/FormProduct/FormProduct'

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Route path='/'>
          <Navbar />
        </Route>
        <Switch>
          <Route path='/table' exact>
            <Table_Products />
          </Route>
          <Route path='/product' exact>
            <FormProduct />
          </Route>
          <Route path='/' exact>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
