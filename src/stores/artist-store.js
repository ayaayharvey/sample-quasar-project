import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";
import { useQuasar } from "quasar";

export const useArtistStore = defineStore("artist", {
  state: () => ({
    checkingLocal: true,
    data: [],
    formData: {
      id: null,
      name: null,
      location: null,
    },
    loading: true,
    authStore: useAuthStore(),
    $q: useQuasar(),
    dataJSON: null,
    localFormsJSON: [],
  }),
  getters: {
    getId: (state) => state.id,
    getName: (state) => state.name,
    getLocation: (state) => state.location,
  },
  actions: {
    async getArtists() {
      if (this.authStore.online) {
        // alert("online");
        try {
          await fetch(
            "http://" +
              this.authStore.link +
              "/api/master/event-category/get/all",
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
              this.dataJSON = JSON.stringify(response.data);
            })
            .catch((error) => {
              this.message = error;
            });
        } catch (error) {
          if (error) throw error;
        }
      } else {
        // alert("offline");
        if (this.dataJSON !== null) this.data = JSON.parse(this.dataJSON);
      }
      this.loading = false;
    },
    async addArtist(form) {
      if (this.authStore.online) {
        // alert("online");
        let formSubmit = {
          title: form.name,
          description: form.location,
          status: "active",
        };
        try {
          await fetch(
            "http://" +
              this.authStore.link +
              "/api/master/event-category/create",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
                KEY: "$2y$10$BaPrYesKdAQDgpYk1sVK5.vhfoXkgEfD6VvLMCgA0uaNs7I58TKE2",
                Authorization: "Bearer " + this.authStore.token,
              },
              body: JSON.stringify(formSubmit),
            }
          )
            .then((res) => res.json())
            .then((response) => {
              this.message = response;
              this.data = response.data;
              this.triggerAlert("positive", "Artist Added Successfully");
              this.loading = false;
            })
            .catch((error) => {
              this.message = error;
            });
        } catch (error) {
          if (error) throw error;
        }
      } else {
        if (this.checkingLocal === false) {
          let localFormData = {
            name: form.name,
            location: form.location,
            status: "active",
          };
          this.localFormsJSON.push(JSON.stringify(localFormData));
        }
      }
    },
    setArtist(formId) {
      const selected = this.data?.data.find((x) => x.id === formId);

      if (selected.id) this.formData.id = selected.id;
      if (selected.title) this.formData.name = selected.title;
      if (selected.description) this.formData.location = selected.description;
    },
    checkLocal() {
      if (this.authStore.online && this.localFormsJSON.length !== 0) {
        this.localFormsJSON.forEach((form) => {
          this.addArtist(JSON.parse(form));
        });
        this.clearLocal();
      }
      this.checkingLocal = false;
    },
    clearLocal() {
      this.localFormsJSON = [];
    },
    clearArtist() {
      this.formData.id = null;
      this.formData.name = null;
      this.formData.location = null;
    },
    triggerAlert(type, message) {
      this.$q.notify({
        type: type,
        message: message,
      });
    },
  },
  persist: {
    paths: ["dataJSON", "localFormsJSON"],
  },
});
