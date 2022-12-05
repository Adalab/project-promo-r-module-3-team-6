import { useState } from 'react';
import '../styles/App.scss';
import defaultAvatar from '../images/default_image.jpg';

import callToApi from '../services/api';
import Card from './Card';
//Components
import GetAvatar from './GetAvatar';

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
    photo: { defaultAvatar },
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

  const handleShare = () => {
    callToApi(person).then((data) => {
      setDataResult(data);
      console.log(data);
    });
  };

  const handleAvatar = (avatar) => {
    setPerson({ ...person, photo: avatar });
  };

  //Render
  return (
    <div>
      <Card
        handleInput={handleInput}
        person={person}
        handleShare={handleShare}
        dataResult={dataResult}
        handleReset={handleReset}
        handleAvatar={handleAvatar}
      ></Card>
    </div>
  );
}

export default App;
