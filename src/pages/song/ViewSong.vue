<template>
  <q-page>
    <PageTitleWrapper>Song Details</PageTitleWrapper>

    <ContentWrapper>
      <div class="my-content">
        <q-card>
          <q-card-section class="my-video-container">
            <q-video
              class="my-video"
              src="https://www.youtube.com/embed/jhpTsLDa5Mk"
            />
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Nadarang</div>
            <div class="text-subtitle2">by Shanti Dope</div>
            <div class="text-caption">2018</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Andiyan ka na naman Ba't 'di ko maiwasang tumingin sa 'yong liwanag?
            Nadarang na naman sa 'yong apoy Bakit ba laging hinahayaan? Andiyan
            ka na naman Ba't 'di ko maiwasang tumingin sa 'yong liwanag?
            Nadarang na naman sa 'yong apoy Handang masaktan kung kinakailangan
            May lakad ka ba mamaya? Puwede ka ba makasama sa paggagala? Kung
            sakaling 'di ka puwede Sa bagay, mayro'n din akong ginagawa Siguro
            nga, napapaisip ka Ba't ako nangangamusta? Ilang araw ka nang naroon
            sa panaginip ko Nag-aalala lang ako, baka sa'n ka mapunta Pero
            mukhang ayos ka naman Kahit 'di na kita abalahin pa Ilang "Ama
            Namin" pa ba ang dapat Para patago kang mag-alala sa 'kin? Uh Habang
            pinapantasya lamang nila Ay maskara mo sa gabi at pitaka mo sa umaga
            'Yung "ikaw" sa likod ng kolorete pa din Ang nangangahulugan sa
            salitang "paraiso" para sa 'kin Bakit kaya kayamanan ko pa din
            kinikilala ang iyong pagtawa? Kahit na sa puso mo man ay ilang
            dosena na din ang kasya Dati pa 'ko pinagdamutan ng kapalaran Kaya
            'di na bago sa 'kin mawalan ng pag-asa Ala-una ng umaga na naman
            Tawagan mo na lang ulit ako kapag hindi na kayo magkasama Andiyan ka
            na naman Ba't 'di ko maiwasang tumingin sa 'yong liwanag? Nadarang
            na naman sa 'yong apoy Bakit ba laging hinahayaan? Andiyan ka na
            naman Ba't 'di ko maiwasang tumingin sa 'yong liwanag? Nadarang na
            naman sa 'yong apoy Handang masaktan kung kinakailangan May lakad ka
            ba mamaya? Sana madaanan mo 'ko pagkatapos Sabihin mo ngayong ako'y
            makakaasang Dito ka dadalhin ng iyong sapatos Kung ngayong gabi lang
            naman ang magiging dahilan Ay handang-handa pa din naman ako mamaos
            Makakaluwag ka man ay sa mas nakakalibang Na paraan kita tutulungan
            makaraos Bakit ka nagparamdam? Siguro, 'di na kayo nilanggam Bakit
            kaya 'di n'ya alam Ang 'yong halaga't kung gaano ka kalinamnam?
            Iniwasan ko mang matakam nang 'di halata Ang hirap nang magpabaya
            Kapag tawag na ng laman ang nagbadya Makipaglangit-lupa nang walang
            taya Mata sa mata, bibig sa bibig Mga ingay na tayo lang dalawa
            nakadinig Nakatawang umidlip sa kama Pero ba't wala ka na pagsapit
            ng umaga? Andiyan ka na naman Ba't 'di ko maiwasang tumingin sa
            'yong liwanag? Nadarang na naman sa 'yong apoy Bakit ba laging
            hinahayaan? Andiyan ka na naman Ba't 'di ko maiwasang tumingin sa
            'yong liwanag? Nadarang na naman sa 'yong apoy Handang masaktan kung
            kinakailangan
          </q-card-section>
        </q-card>
      </div>
    </ContentWrapper>
  </q-page>
</template>

<script setup>
import PageTitleWrapper from "src/components/PageTitleWrapper.vue";
import ContentWrapper from "src/components/ContentWrapper.vue";

const tableLabels = [
  {
    name: "title",
    align: "left",
    label: "Title",
    field: "title",
  },
  {
    name: "actions",
    align: "right",
    label: "Actions",
    field: "  ",
  },
];

const tableRows = [
  {
    id: 1,
    title: "City Girl",
  },
  {
    id: 2,
    title: "Tricks",
  },
];
</script>

<style lang="scss" scoped>
.my-video-container {
  background: gray;
  .my-video {
    height: 100%;
    margin-inline: auto;
    max-width: 300px;
    width: 100%;
  }
}
</style>
