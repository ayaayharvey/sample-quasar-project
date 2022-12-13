import ArtistList from "../../pages/artist/ArtistList.vue";
import AddArtist from "../../pages/artist/AddArtist.vue";
import ViewArtist from "../../pages/artist/ViewArtist.vue";

const ArtistRoutes = {
  path: "artists",
  children: [
    {
      path: "",
      component: ArtistList,
    },
    {
      path: "add-artist",
      component: AddArtist,
    },
    {
      path: ":id",
      component: ViewArtist,
    },
  ],
};

export default ArtistRoutes;
