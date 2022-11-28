//
import config from '../config';

//* page
import Home from '../pages/Home';
import About from '../pages/About';
import Destination from '../pages/Destination';
import Hotel from '../pages/Hotel';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

//* Public Routes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.about,
    component: About,
  },
  {
    path: config.routes.destination,
    component: Destination,
  },
  {
    path: config.routes.hotel,
    component: Hotel,
  },
  {
    path: config.routes.blog,
    component: Blog,
  },
  {
    path: config.routes.contact,
    component: Contact,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
