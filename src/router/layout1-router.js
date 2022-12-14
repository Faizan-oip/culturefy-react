import React from 'react'

//router
import { Switch, Route } from 'react-router-dom'

//pages
import Groups from '../views/dashboard/app/groups';
import GroupDetail from '../views/dashboard/app/group-detail';
import FriendList from '../views/dashboard/app/friend-list'
import ProfileImages from '../views/dashboard/app/profile-images';
import ProfileVideos from '../views/dashboard/app/profile-videos';
import ProfileEvents from '../views/dashboard/app/profile-events';
import EventDetail from '../views/dashboard/app/event-detail';
import Calendar from '../views/dashboard/app/calendar';
import Birthday from '../views/dashboard/app/birthday';
import Weather from '../views/dashboard/app/weather'
import Music from '../views/dashboard/app/music';
import CatergoryGrid from '../views/dashboard/store/store-category-grid';
import CatergoryList from '../views/dashboard/store/store-category-list';
import StoreDetail from '../views/dashboard/store/store-detail';
import StoreCheckout from '../views/dashboard/store/store-checkout';

//market and profile pages
import Market1 from '../views/dashboard/market-place/market1';
import Market2 from '../views/dashboard/market-place/market2';
import Profile1 from '../views/dashboard/profiles/profile1';
import Profile2 from '../views/dashboard/profiles/profile2';
import Profile3 from '../views/dashboard/profiles/profile3';
import Community from '../views/dashboard/community';
import Community1 from '../views/dashboard/community1';
import ResourceGroup from '../views/dashboard/community1/resourceGroup';
import AccountSetting from '../views/dashboard/accountSetting';
import Notification from '../views/dashboard/accountSetting/notification';
import MessageRequest from '../views/dashboard/accountSetting/messageReq';
import ProfileSetting from '../views/dashboard/accountSetting/profileSetting';
import Users from '../views/dashboard/accountSetting/users';
// import MainLayout from '../layouts/dashboard/mainlayout';

const Layout1Router = () => {
    return (
        <>
            <Switch>
                <Route path="/dashboards/app/groups" component={Groups}></Route>
                <Route path="/dashboards/app/group-detail" component={GroupDetail}></Route>
                <Route path="/dashboards/app/friend-list" component={FriendList} />
                <Route path="/dashboards/app/profile-images" component={ProfileImages} />
                <Route path="/dashboards/app/profile-videos" component={ProfileVideos} />
                <Route path="/dashboards/app/profile-events" component={ProfileEvents} />
                <Route path="/dashboards/app/event-detail" component={EventDetail} />
                <Route path="/dashboards/app/calendar" component={Calendar} />
                <Route path="/dashboards/app/birthday" component={Birthday} />
                <Route path="/dashboards/app/weather" component={Weather} />
                <Route path="/dashboards/app/music" component={Music} />
                <Route path="/dashboards/store/store-category-grid" component={CatergoryGrid} />
                <Route path="/dashboards/store/store-category-list" component={CatergoryList} />
                <Route path="/dashboards/store/store-detail" component={StoreDetail} />
                <Route path="/dashboards/store/store-checkout" component={StoreCheckout} />
                <Route path="/dashboards/market-place/market1" component={Market1} />
                <Route path="/dashboards/market-place/market2" component={Market2} />
                <Route path="/dashboards/profiles/profile1" component={Profile1} />
                <Route path="/dashboards/profiles/profile2" component={Profile2} />
                <Route path="/dashboards/profiles/profile3" component={Profile3} />






                {/* Community Routes */}
                <Route path="/dashboards/community" component={Community} />
                {/* <Route path="/dashboards/community/socil-feed" component={Community} /> */}
                <Route path="/dashboards/community1" component={Community1} />
                <Route path="/dashboards/resourceGroup" component={ResourceGroup} />


                {/* <Route path="/dashboards/mainlayout" component={MainLayout} /> */}

                {/* Account Setting Routes  */}
                <AccountSetting>
                    <Route path="/dashboards/accountsettingqa/notification" component={Notification} />
                    <Route path="/dashboards/accountsettingqa/messagerequests" component={MessageRequest} />
                    <Route path="/dashboards/accountsettingqa/mycampaigns" component={Notification} />
                    <Route path="/dashboards/accountsettingqa/myworkspaces" component={Notification} />
                    <Route path="/dashboards/accountsettingqa/profilesettings" component={ProfileSetting} />
                    <Route path="/dashboards/accountsettingqa/users" component={Users} />
                </AccountSetting>



            </Switch>
        </>
    )
}

export default Layout1Router
