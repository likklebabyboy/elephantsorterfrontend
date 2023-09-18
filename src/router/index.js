import { createRouter, createWebHistory } from 'vue-router';

// Import your components and views
import Home from "../views/Home.vue";
import ArtistList from '../components/ArtistList.vue';
import CreateArtist from '../components/CreateArtist.vue';
import ArtistDetail from '../views/ArtistDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/view-artists',
    name: 'ArtistList',
    component: ArtistList,
  },
  {
    path: '/create-artist',
    name: 'CreateArtist',
    component: CreateArtist,
  },
  {
    path: '/artist/:id', // Assuming you want dynamic routing for artist details
    name: 'ArtistDetail',
    component: ArtistDetail,
  },
  // {
  //   path: '/loginpage',
  //   component: () => import('@/auth/Loginpage.vue'),
  // },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
