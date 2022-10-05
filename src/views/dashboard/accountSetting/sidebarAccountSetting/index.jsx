import React from 'react';
import Styles from './styles.module.scss'
import { Link } from "react-router-dom";

const AccSidebar = () => {
    return (
        <>
            <div className={Styles.sidebarAcc}>
                <ul>
                    <li>
                        <Link to={'/dashboards/accountsettingqa/notification'} className={Styles.cSecondary}>
                            Notification
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboards/accountsettingqa/messagerequests'} className={Styles.cSecondary}>
                            Message Requests
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboards/accountsettingqa/mycampaigns'} className={Styles.cSecondary}>
                            My Campaigns
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboards/accountsettingqa/myworkspaces'} className={Styles.cSecondary}>
                            My Workspaces
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboards/accountsettingqa/profilesettings'} className={Styles.cSecondary}>
                            Profile Settings
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboards/accountsettingqa/users'} className={Styles.cSecondary}>
                            Users
                        </Link>
                    </li>
                    <li>
                        Password Reset
                    </li>
                    <li>
                        Logout
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AccSidebar;