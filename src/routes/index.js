import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/upload';
import Search from '../pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search },
    { path: '/upload', component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
