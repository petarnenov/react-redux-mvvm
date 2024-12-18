import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "../TopNavigation/TopNavigation.module.scss";

const TopNavigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={classNames([styles.li])}>
                    <NavLink to="/" className={({ isActive }) => classNames(styles.navLink, { [styles.active]: isActive })}>
                        Home
                    </NavLink>
                </li>
                <li className={classNames([styles.li])}>
                    <NavLink to="/todos" className={({ isActive }) => classNames(styles.navLink, { [styles.active]: isActive })}>
                        Todos
                    </NavLink>
                </li>
                <li className={classNames([styles.li])}>
                    <NavLink to="/services" className={({ isActive }) => classNames(styles.navLink, { [styles.active]: isActive })}>
                        Services
                    </NavLink>
                </li>
                <li className={classNames([styles.li])}>
                    <NavLink to="/contact" className={({ isActive }) => classNames(styles.navLink, { [styles.active]: isActive })}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default TopNavigation;