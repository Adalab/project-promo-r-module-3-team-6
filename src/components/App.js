import { useState } from 'react';
import '../styles/App.scss';
import defaultAvatar from '../images/default_image.jpg';

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
    photo: { defaultAvatar },
  });
  const [dataResult, setDataResult] = useState({});
  const [avatar, setAvatar] = useState('');
 

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
    setAvatar('');
  };

  const handleShare = () => {
    callToApi(person).then((data) => {
      setDataResult(data);
      console.log(data);
    });
  };

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
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
        updateAvatar={updateAvatar}
        avatar={avatar}
      ></Card>
    </div>
  );
}

export default App;
