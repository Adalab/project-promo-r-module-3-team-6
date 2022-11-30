import { useState } from 'react';
import '../styles/App.scss';


import callToApi from '../services/api';
import Card from './Card';
//Components


function App() {
  // State Variables
  const [person, setPerson] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });
  const [dataResult, setDataResult] = useState({});

  // Events
  const handleInput = (data) => {
    setPerson({ ...person, [data.name]: data.value });
  };

 

  const handleReset = () => {
    setPerson({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };

  const handleShare = (ev) => {
    ev.preventDefault();
    callToApi(person).then((data) => {
      console.log(data);
      setDataResult(data);
    });
  };

  //UseEffect

  //Render
  return (
    <div>
      <Card handleInput={handleInput} person={person} handleShare={handleShare} dataResult={dataResult} handleReset={handleReset}>

      </Card>
    </div>
  );
}

export default App;
