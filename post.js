import React, { useState, useEffect } from 'react';
import './post.css';
import emailjs from 'emailjs-com';

function Post() {
  const [initialInputValue, setInitialInputValue] = useState('');
  const [inputValues, setInputValues] = useState([]);
  const [inputStatus, setInputStatus] = useState(false);

  const handleInputChange = (e) => {
    setInitialInputValue(e.target.value);
  };

  const handlePost = () => {
    if (initialInputValue !== '') {
      setInputValues([...inputValues, initialInputValue]);
      setInitialInputValue('');
      setInputStatus(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handlePost();
    }
  };

  useEffect(() => {
    if (initialInputValue === '') {
      setInputStatus(false);
    }
  }, [initialInputValue]);

  const sendEmail = () => {
    const serviceID = 'service_p37braq';
    const templateID = 'template_gyy2w4q';
    const userID = 'KLUJXlUDLs5Ucadat';

    const templateParams = {
      message: inputValues[inputValues.length - 1],
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('E-mail wysłany!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Błąd podczas wysyłania e-maila:', error);
      });
  };

  useEffect(() => {
    if (inputStatus) {
      sendEmail();
    }
  }, [inputStatus]);

  return (
    <div className='post'>
      <div className='postinput'>
        <img
          style={{ width: '40px', height: '40px', marginRight: '10px', paddingTop: '37px' }}
          src='https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'
          alt=''
        />
        <input
          style={{ fontSize: '18px', borderRadius: '25px', width: '400px', height: '35px' }}
          type='text'
          placeholder='What do you want to talk about'
          value={initialInputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className='btninput'>
        <button
          onClick={handlePost}
          style={{
            width: '60px',
            height: '35px',
            borderRadius: '15px',
            color: 'white',
            backgroundColor: '#144fa3',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Post
        </button>
      </div>

      <div className='map'>
        {inputValues.map((item, index) => (
          <div className='card' key={index}>
            <div className='cardtextnick'>
              <h3>Karol Rzeczkowski</h3>
            </div>
            <div className='card-content'>{item}</div>
            <div className='card-image'>
              <img
                style={{ width: '30px', height: '30px' }}
                src='https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'
                alt=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;

