import React from 'react'
import ProgressBar from 'react-progressbar-on-scroll';
import MainLayout from './components/MainLayout'
import classes from './App.module.css'

const App = () => {
  return (
    <div className={classes.layout}>
     <ProgressBar color="blue" gradient={false} height={5} />
    <MainLayout/>
    </div>
  )
}

export default App