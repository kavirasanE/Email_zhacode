import React, { useContext } from 'react';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import DataContext from '../context/DataProvider';

const Sidebar = () => {
    const data = useContext(DataContext);
    return (
        <div style={{ display: 'flex-row', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff">
                {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} >
                </CDBSidebarHeader> */}
                <CDBSidebarContent className="sidebar-content fa-large" style={{ padding: '50px 0px' }}>
                    <CDBSidebarMenu>
                        {data.map((datas, i) => (
                            <CDBSidebarMenuItem icon="columns" onClick={() => {console.log(datas.description)}}> {datas.name}</CDBSidebarMenuItem>
                        ))}

                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
       </div>
    );
};

export default Sidebar;