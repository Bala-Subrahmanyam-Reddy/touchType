import './index.css';
import { useEffect, useState } from 'react';
import { RiTimerFlashLine } from 'react-icons/ri';
import { useSource } from '../../context/sourceContext';

const HomeLeftBar = () => {
  const [countDown, setCountDown] = useState(0);
  const [runTimer, setRunTimer] = useState(true);
  const { changeSourceType } = useSource();

  useEffect(() => {
    let timerId;
    if (runTimer) {
      setCountDown(60 * 5);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log('expired');
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  return (
    <div className='home-left-bar-screen'>
      <div className='col-12 shadow bg-white p-4 rounded'>
        <div className='list-group mb-4'>
          <div className='btn btn-info font-weight-bold'>
            <span className='font-weight-bold'>
              <RiTimerFlashLine />
            </span>{' '}
            <span>
              {minutes}:{seconds}
            </span>
          </div>
        </div>
        <ul className='list-group'>
          <li
            className='list-group-item bg-dark text-light font-weight-bold'
            aria-current='true'
          >
            Source Type
          </li>
          <li className='list-group-item'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                value=''
                defaultChecked={true}
                name='sourceType'
                onChange={() => changeSourceType(0)}
              />
              <label className='form-check-label'>Keys</label>
            </div>
          </li>
          <li className='list-group-item'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='sourceType'
                value=''
                onChange={() => changeSourceType(1)}
              />
              <label className='form-check-label'>Word</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeLeftBar;
