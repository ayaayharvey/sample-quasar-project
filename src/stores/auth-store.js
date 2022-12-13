import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    online: true,
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5N2Y1NWJlNy1iNTZkLTQwYTAtOTE0NC1lNmVmMGRmZTI2YTkiLCJqdGkiOiIxMzViOGQ4MTljNjhiMjgzNjQ4N2Y0N2I4MmU0NzdiNTMwYWU3OTEwODk5MjRkZWE1MGU0MWQ4Y2QwNDBmZjRkNjFiZjNmNTNiMGY5MWNkZSIsImlhdCI6MTY3MDkzOTQ2My41MzY4MDksIm5iZiI6MTY3MDkzOTQ2My41MzY4MjMsImV4cCI6MTY3MDk3NTQ2My41Mjg5MzIsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.V0cUESWfhHFL29btORaeU1QSgMdpbQBn8LDUlCr2rNtOM4_IBM_wDsXM-LfnTwc6yHZgrXBAlIMvOrywfc_djxVCg8cGSB_dMWABe8wdmjleG8qz_U9SR1yo3KfQJ-scOEV2BFig9--qZO-blCI6FgWN5dsoykZS-pU78-YNW7Ffav_uved_aMi_qjgWgWdNLUIlO-NYm5UaI3zmRwLb1vPu8QuLIUhrqXcJRahFdCZv51KBDmhTPAmPR_KvWUfmnYJKvx8xI9Fkiy8TSawIYrfAd3Umz4tN_60jg0RdHHQU3MfD-XEt-H5c3pBoZaOnzPC1_q0tfGN6p0U37MXwFhE9ZLiwgreezjA3kXuSRsqknpq51YxJPCeqiYf7azL_3bA1gnKF3Gsj3ikmhUSFIjFaAfu3ubiUDLTxQ3w7rAXd6A_M4vl_Z2kxzJGDlP6DcldTzEZd7rQnmZvPLmjMOYAYpSguqFSG3GFJll5HfAs7aBP3APBGq9NGse2D_a_KUkbMhoe6ZW-y1_2raerM0qu2eL6iIU7DdhMO32rKCFmVEUth2-dZ5MdfDx749ccuJCtg8jilRDhbotk92R0shk7AbHjo3jBVb1P3EUwFCI_Ra0mMUwZnM7d1j9_Ts65OKxnfi4iU8OrwyHsAicmiRlyHYCUUsjUBYIGbkqEOh9k",
    domain: "192.168.100.12",
    port: "2022",
  }),
  getters: {
    link(state) {
      return state.domain + ":" + state.port;
    },
  },
  persist: true,
});
