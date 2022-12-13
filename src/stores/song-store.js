import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";
import { useQuasar } from "quasar";

export const useSongStore = defineStore("song", {
  state: () => ({
    data: [],
    formData: {
      id: null,
      title: null,
      year: null,
    },
    loading: true,
    authStore: useAuthStore(),
    $q: useQuasar(),
  }),
  getters: {
    getId: (state) => state.id,
    getTitle: (state) => state.title,
    getYear: (state) => state.year,
  },
  actions: {
    async getSongs() {
      try {
        await fetch(
          "http://" +
            this.authStore.link +
            "/api/master/payment-category/get/all",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              KEY: "$2y$10$BaPrYesKdAQDgpYk1sVK5.vhfoXkgEfD6VvLMCgA0uaNs7I58TKE2",
              Authorization: "Bearer " + this.authStore.token,
            },
          }
        )
          .then((res) => res.json())
          .then((response) => {
            this.message = response;
            this.data = response.data;
            this.loading = false;
          })
          .catch((error) => {
            this.message = error;
          });
      } catch (error) {
        if (error) throw error;
      }
    },
    async addSong() {
      let form = {
        title: this.formData.title,
        description: this.formData.year,
        status: "active",
      };
      try {
        await fetch(
          "http://" +
            this.authStore.link +
            "/api/master/payment-category/create",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              KEY: "$2y$10$BaPrYesKdAQDgpYk1sVK5.vhfoXkgEfD6VvLMCgA0uaNs7I58TKE2",
              Authorization: "Bearer " + this.authStore.token,
            },
            body: JSON.stringify(form),
          }
        )
          .then((res) => res.json())
          .then((response) => {
            this.message = response;
            this.data = response.data;
            this.triggerAlert("positive", "Added Successfully");
            this.loading = false;
          })
          .catch((error) => {
            this.message = error;
          });
      } catch (error) {
        if (error) throw error;
      }
    },
    setSong(formId) {
      const selected = this.data?.data.find((x) => x.id === formId);

      if (selected.id) this.formData.id = selected.id;
      if (selected.title) this.formData.title = selected.title;
      if (selected.description) this.formData.year = selected.description;
    },
    clearSong() {
      this.formData.id = null;
      this.formData.title = null;
      this.formData.year = null;
    },
    triggerAlert(type, message) {
      this.$q.notify({
        type: type,
        message: message,
      });
    },
  },
});
