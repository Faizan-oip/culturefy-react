import React from 'react'

//header
import Header from '../../components/partials/dashboard/HeaderStyle/header'

//sidebar
import RightSidebar from '../../components/partials/dashboard/SidebarStyle/rightsidebar'

//sidebar
import Sidebar from '../../components/partials/dashboard/SidebarStyle/sidebar'

//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'

//default 
import Layout1Router from '../../router/layout1-router'

// share-offcanvas
import ShareOffcanvas from '../../components/share-offcanvas'

//settingoffCanvas
import SettingOffCanvas from '../../components/setting/SettingOffCanvas'

const Layout1 = () => {
    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-content">
                <div id="content-page" className="content-page">
                    <Layout1Router />
                </div>
            </div>
            <RightSidebar />
            <Footer />
            <SettingOffCanvas />
            <ShareOffcanvas />
        </>
    )
}

export default Layout1
