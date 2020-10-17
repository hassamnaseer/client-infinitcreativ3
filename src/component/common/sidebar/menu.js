// iconbar-mainmenu-close

import React from 'react'
export const MENUITEMS = [
    {
        title: 'Dashboard', icon: <i className="pe-7s-home pe-lg"></i>, path: '/dashboard/default', type: 'sub',active: true,bookmark: true
    },
    {
        title: 'Purchase History', icon: <i className="pe-7s-note2"></i>, type: 'sub', path: '/form/form-validation',active: false
    },
    {
        title: 'Redeem', icon: <i className="pe-7s-id"></i>, type: 'sub',path: '/tables/bootstrap-basic-table',aactive: false
    },
    {
        title: 'Sales Statement', icon: <i className="pe-7s-graph3"></i>, type: 'sub',path: '/charts/apexcharts',active: false
    },
    {
        title: 'Wallet', icon: <i className="pe-7s-server"></i>, type: 'sub',path: '/ecommerce-app/product',active: false}

]
