import { lazy } from 'react'
// import { Navigate } from 'react-router-dom'
const Unit = lazy(() => import('../../viewscafe/unit/Unit'))
const Recipes = lazy(() => import('../../viewscafe/recipes'))
const Product = lazy(() => import('../../viewscafe/product/Product'))
const Productmanu = lazy(() => import('../../viewscafe/productManu'))
const Expenses = lazy(() => import('../../viewscafe/expense'))
const Customer = lazy(() => import('../../viewscafe/customer/Customer'))
const Category = lazy(() => import('../../viewscafe/category'))
const Employeesview = lazy(() => import('../../viewscafe/employees/Employeesview'))
const AdminRoutes = [
    {
        element: <Unit />,
        path: '/unit',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    },
    {
        element: < Recipes />,
        path: '/recipes',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    },
    {
        element: <Product />,
        path: '/product',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    },
    {
        element: <Productmanu />,
        path: '/menu',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    },
    {
        element: <Expenses />,
        path: '/expense',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    },
    {
        element: <Customer />,
        path: '/customer',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    },
    {
        element: <Category />,
        path: '/category',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    },
    {
        element: <Employeesview />,
        path: '/employees',
        meta: {
            appLayout: true,
            className: 'email-application'
        }
    }
]
export default AdminRoutes
