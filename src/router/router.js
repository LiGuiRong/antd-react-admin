import React from 'react'
import Loadable from "react-loadable"

const routers = [
    {
        name: 'welcome',
        path: '/welcome',
        exact: true,
        component: Loadable({
            loader: () => import('../views/Welcome/index'),
            loading: () => <div />
        })
    },
    {
        name: 'Need',
        path: '/need',
        exact: true,
        component: Loadable({
            loader: () => import('../views/Need/index'),
            loading: () => <div />
        })
    },
    {
        name: 'CodeReview',
        path: '/codereview',
        exact: true,
        component: Loadable({
            loader: () => import('../views/CodeReview/index'),
            loading: () => <div />
        })
    }
]

export default routers
