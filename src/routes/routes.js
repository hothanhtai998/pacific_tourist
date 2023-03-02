//
import config from '~/config';

//* page
import Home from '~/pages/Home';
import AboutPage from '~/pages/AboutPage';
import DestinationPage from '~/pages/DestinationPage';
import HotelPage from '~/pages/HotelPage';
import BlogPage from '~/pages/BlogPage';
import SingleBlogPage from '~/pages/SingleBlogPage';
import ContactPage from '~/pages/ContactPage';

//* Public Routes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.about,
    component: AboutPage,
  },
  {
    path: config.routes.destination,
    component: DestinationPage,
  },
  {
    path: config.routes.hotel,
    component: HotelPage,
  },
  {
    path: config.routes.blog,
    component: BlogPage,
  },
  {
    path: config.routes.singleblog,
    component: SingleBlogPage,
  },
  {
    path: config.routes.contact,
    component: ContactPage,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
