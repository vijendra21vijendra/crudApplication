import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router';
import ShowEmployees from './components/ShowEmployees';
import AddEmployee from './components/AddEmployee';
import './App.css';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<>This is just a simple home page.</>} />
          <Route
            path="addEmployee"
            element={<AddEmployee/>}
          />
        <Route path="showEmployee" element={<ShowEmployees/>} />
      </Routes>
    </>
  )
}

export default App;