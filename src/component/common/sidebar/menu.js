// iconbar-mainmenu-close

import React from 'react'
export const MENUITEMS = [
    {
        title: 'Dashboard', icon: <i className="pe-7s-home pe-lg"></i>, path: '/', type: 'sub',active: true,bookmark: true
    },
    {
        title: 'Purchase History', icon: <i className="pe-7s-note2"></i>, type: 'sub', path: '/purchases',active: false
    },
    {
        title: 'Redeem', icon: <i className="pe-7s-id"></i>, type: 'sub',path: '/redeem',aactive: false
    },
    {
        title: 'Sales Statement', icon: <i className="pe-7s-graph3"></i>, type: 'sub',path: '/sales',active: false
    },
    {
        title: 'Wallet', icon: <i className="pe-7s-server"></i>, type: 'sub',path: '/wallet',active: false}

]
