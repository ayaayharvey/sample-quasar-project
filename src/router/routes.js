import MainLayout from "layouts/MainLayout.vue";
import DashboardRoutes from "./grouped-routes/dashboard-routes";
import ArtistRoutes from "./grouped-routes/artist-routes";
import SongRoutes from "./grouped-routes/song-routes";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [DashboardRoutes, ArtistRoutes, SongRoutes],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
