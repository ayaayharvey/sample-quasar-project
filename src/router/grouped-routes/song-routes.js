import SongList from "../../pages/song/SongList.vue";
import AddSong from "../../pages/song/AddSong.vue";
import ViewSong from "../../pages/song/ViewSong.vue";

const SongRoutes = {
  path: "songs",
  children: [
    {
      path: "",
      component: SongList,
    },
    {
      path: "add-song",
      component: AddSong,
    },
    {
      path: ":id",
      component: ViewSong,
    },
  ],
};

export default SongRoutes;
