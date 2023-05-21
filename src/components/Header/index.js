/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = () => {
  

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-primary shadow'>
      <a className='navbar-brand text-white font-weight-bold' href='#'>
        Touch Type
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        
      </div>
    </nav>
  );
};

export default Header;
