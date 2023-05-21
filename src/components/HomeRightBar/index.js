import './index.css';
import { useState } from 'react';
import { CiKeyboard } from 'react-icons/ci';
import { FaPercentage } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';
import usePressKey from '../../hooks/usePressKey';
import { generate } from '../utils/words';
import { currentTime } from '../utils/time';

const initialWords = generate(10);

const HomeRightBar = () => {
  const { keyPressed, downHandler } = usePressKey();
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join('')
  );
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
  //wpm
  const [startTime, setStartTime] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  //accuracy
  const [accuracy, setAccuracy] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  //errors
  const [errorCount, setErrorCount] = useState(0);

  const handleKeyDown = (event) => {
    downHandler(event.key);
    handleChange();
  };
  const handleChange = () => {
    if (!startTime) {
      setStartTime(currentTime());
    }
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    if (keyPressed === currentChar) {
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }

      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);
      setCurrentChar(incomingChars.charAt(0));
      updatedIncomingChars = incomingChars.substring(1);

      if (updatedIncomingChars.split(' ').length < 10) {
        updatedIncomingChars += ' ' + generate();
      }
      setIncomingChars(updatedIncomingChars);

      //wpm calculation
      if (incomingChars.charAt(0) === ' ') {
        setWordCount(wordCount + 1);
        const durationInMinutes = (currentTime() - startTime) / 60000.0;
        setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
      }
    }
    if (keyPressed !== currentChar && keyPressed !== undefined) {
      setErrorCount(errorCount + 1);
    }

    //accuracy calculation
    const updatedTypedChars = typedChars + keyPressed;
    setTypedChars(updatedTypedChars);
    setAccuracy(
      ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
        2
      )
    );
  };

  return (
    <div className='right-bar-screen'>
      <div className='col-12 shadow bg-white p-2 rounded'>
        <p className='Character'>
          <span className='Character-out'>
            {(leftPadding + outgoingChars).slice(-20)}
          </span>
          <span className='Character-current'>{currentChar}</span>
          <span className='character-incoming'>
            {incomingChars.substr(0, 30)}
          </span>
        </p>
        <div className='form-group p-3'>
          <label htmlFor='exampleFormControlTextarea1'>Input</label>
          <textarea
            className='form-control'
            placeholder='enter a character'
            rows='5'
            onKeyDown={(event) => handleKeyDown(event)}
          ></textarea>
        </div>
        <div className='d-flex flex-row justify-content-center p-2'>
          <div>
            <p className='type-calc-text wpm-text'>
              <span>
                <CiKeyboard />
              </span>
              WPM: <span>{wpm}</span>
            </p>
          </div>
          <div>
            <p className='type-calc-text accuracy-text'>
              <span>
                <FaPercentage />
              </span>
              Accuracy: <span>{accuracy}</span>
            </p>
          </div>
          <div>
            <p className='type-calc-text error-text'>
              <span>
                <BiErrorCircle />
              </span>
              Errors: <span>{errorCount}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRightBar;
