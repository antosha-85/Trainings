import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TaskBar from './components/taskbar'
import TaskList from './components/tasklist'

function App() {
  return (
   <div>
     <Header/>
     <TaskBar/>
     <TaskList/>
   </div>
  )
}

export default App;
