import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About/About';
import { Property } from '../pages//Property/Property';
import { Error } from '../pages/Error/Error';
import { Layout } from "../components/Layout";

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'property/:id',
                element: <Property />,
            },
            {
                path: '*',
                element: <Error />,
            }
        ]
    }
])

export function AppRouter() {
    return <RouterProvider router={routerConfig} />;
}
