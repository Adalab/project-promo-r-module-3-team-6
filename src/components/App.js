import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import defaultAvatar from '../images/default_image.jpg';
import callToApi from '../services/api';
//Components
import Card from './Card';
import Landing from './Landing';

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

  //Collapsables
  const [designIsOpen, setDesignIsOpen] = useState(true);
  const [fillIsOpen, setFillIsOpen] = useState(false);
  const [shareIsOpen, setShareIsOpen] = useState(false);

  // Events
  const handleInput = (data) => {
    setPerson({ ...person, [data.name]: data.value });
  };

  const handleCollapse = (ev) => {
    const sectionId = ev.currentTarget.id;
    if (sectionId === 'design') {
      setDesignIsOpen(true);
      setFillIsOpen(false);
      setShareIsOpen(false);
    } else if (sectionId === 'fill') {
      setDesignIsOpen(false);
      setFillIsOpen(true);
      setShareIsOpen(false);
    } else if (sectionId === 'share') {
      setDesignIsOpen(false);
      setFillIsOpen(false);
      setShareIsOpen(true);
    }
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
    });
  };

  const updateAvatar = (avatar) => {
    setPerson({
      ...person,
      photo: avatar,
    });
    setAvatar(avatar);
  };

  //Render
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route
          path='/card'
          element={
            <Card
              handleInput={handleInput}
              person={person}
              handleShare={handleShare}
              dataResult={dataResult}
              handleReset={handleReset}
              updateAvatar={updateAvatar}
              avatar={avatar}
              designIsOpen={designIsOpen}
              handleCollapse={handleCollapse}
              fillIsOpen={fillIsOpen}
              shareIsOpen={shareIsOpen}
            ></Card>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
