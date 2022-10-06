import React from 'react';
import Styles from './styles.module.scss'
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/fontawesome-free-solid'

const AccSidebar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <>
            <div className={Styles.sidebarAcc}>
                <ul>
                    <li>
                        <Link
                            to={'/dashboards/accountsettingqa/notification'}
                            className={`${Styles.linkAcc} ${splitLocation[splitLocation.length-1] === "notification" ? Styles.activeLink : ""}`}
                        >
                            Notification
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/dashboards/accountsettingqa/messagerequests'}
                            className={`${Styles.linkAcc} ${splitLocation[splitLocation.length-1] === "messagerequests" ? Styles.activeLink : ""}`}
                        >
                            Message Requests
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/dashboards/accountsettingqa/mycampaigns'}
                            className={`${Styles.linkAcc} ${splitLocation[splitLocation.length-1] === "mycampaigns" ? Styles.activeLink : ""}`}
                        >
                            My Campaigns
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/dashboards/accountsettingqa/myworkspaces'}
                            className={`${Styles.linkAcc} ${splitLocation[splitLocation.length-1] === "myworkspaces" ? Styles.activeLink : ""}`}
                        >
                            My Workspaces
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/dashboards/accountsettingqa/profilesettings'}
                            className={`${Styles.linkAcc} ${splitLocation[splitLocation.length-1] === "profilesettings" ? Styles.activeLink : ""}`}
                        >
                            Profile Settings
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/dashboards/accountsettingqa/users'}
                            className={`${Styles.linkAcc} ${splitLocation[splitLocation.length-1] === "users" ? Styles.activeLink : ""}`}
                        >
                            Users
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <span className={`${Styles.linkAcc}`} >
                            Password Reset
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </span>
                    </li>
                    <li>
                        <span className={`${Styles.linkAcc}`} >
                            Logout
                            <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AccSidebar;