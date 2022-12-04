<template>
  <b-card>
    <b-tabs content-class="mt-3 " fill>
      <b-tab title="Siparişler">
        <p>
          <card-list v-for="siparis in siparisler" :key="siparis.id">
            <button @click="SiparisKaldir(siparis._id)">sil</button>
            <div>
              <li>
                <p>Masa Numarası: {{ siparis.masaNo }}</p>
                <p>Ürün: {{ siparis.urun[0].urun }}</p>
                <p>Fiyat: {{ siparis.urun[0].fiyat }}</p>
                <p>icindekiler: {{ siparis.urun[0].icindekiler[0] + "" + siparis.urun[0].icindekiler[1] }}</p>
                <p>Fiyat: {{ siparis.ekstralar[0] + " " + siparis.ekstralar[1] }}</p>
                <p>Not: {{ siparis.not }}</p>
                <p>Toplam Fiyat: {{ siparis.toplamFiyat }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import { SiparisAl } from "../services/SiparisService";
import CardList from "./CardList.vue";

export default {
  components: { CardList },
  methods: {
    async SiparisCagir() {
      await SiparisAl()
        .then((response) => {
          this.siparisler = response.data;
          console.log("siparisler - " + this.siparisler)
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    SiparisKaldir(id) {
      console.log("id - ", id)
      this.$store
        .dispatch("Admin/SiparisKaldir", id)
        .then(() => {
          this.SiparisCagir()
        })
        .catch((err) => {
          console.log("hata - ", err)
        })
    },
  },
  mounted() {
    this.SiparisCagir();
  },

  data() {
    return {
      siparisler: [],
      id: ""
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
