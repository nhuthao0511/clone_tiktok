import classNames from "classnames/bind.js";
import Header from "../component/Header";
import Sidebar from "./Sidebar";
import styles from './DefaulLayout.module.scss'

const cx = classNames.bind(styles)

function DefaulLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}> 
            <Header />
            <div className={cx('container')}> 
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
     );
}

export default DefaulLayout;
