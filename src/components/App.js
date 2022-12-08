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
  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');

  // Events
  const handleCollapseDesign = () => {
    setDesignIsOpen(!designIsOpen);
  };

  const handleCollapseFill = () => {
    setFillIsOpen(!fillIsOpen);
  };

  const handleCollapseShare = () => {
    setShareIsOpen(!shareIsOpen);
  };

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
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/card"
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
              handleCollapseDesign={handleCollapseDesign}
              arrowDesign={arrowDesign}
              fillIsOpen={fillIsOpen}
              handleCollapseFill={handleCollapseFill}
              shareIsOpen={shareIsOpen}
              handleCollapseShare={handleCollapseShare}
            ></Card>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
