import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  const handleSearch = () => {
    console.log('Search clicked');
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='tiktok' />
        </div>

        <div className={cx('main_search')}>
          <input placeholder='Search accounts or videos' spellCheck={false} />

          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} className={cx('btn-clse')} />  
          </button> 

          <FontAwesomeIcon icon={faSpinner} className={cx('loading', 'fa-spin')} />   
           

          <button className={cx('search-btn')} onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('chidr-search')}/>
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
