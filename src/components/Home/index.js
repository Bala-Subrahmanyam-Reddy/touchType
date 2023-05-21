import './index.css';
import HomeLeftBar from '../HomeLeftBar';
import HomeRightBar from '../HomeRightBar';

const Home = () => {
  return (
    <div className='home-screen'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <HomeLeftBar />
          </div>
          <div className='col-md-8 col-12'>
            <HomeRightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
