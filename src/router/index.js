import Home from 'pages/Home';
import Categories from 'pages/Categories';
import NotFound from 'pages/ErrorsPage/NotFound';

const routes = [
    {
        path: '/',
        name: 'home',
        element: <Home />
    },
    {
        path: "/categories/:id",
        name: "categories",
        element: <Categories />
    },
    {
        path: "*",
        name: "notFound",
        element: <NotFound />
    }
]

export default routes;