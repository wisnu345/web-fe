<template>
  <div>
    <section class="listcourse-section1">
      <Navbar />
    </section>
    <section>
        <Banner />
    </section>
    <section class="container-fluid">
        <div class="spacer-horizontal"></div>
        <div class="spacer-horizontal"></div>
      <div class="col d-flex flex-column align-items-center">
        <div class="col-md-8 p-0 p-lg-3">
          <h3>Tentang Course</h3>
          <p>
            {{ detailCourse["short-description"] }}
          </p>
          <div class="spacer-horizontal"></div>

          <h3>Materi Course</h3>
          <div class="col p-0 p-lg-3">
            <div
              class="col mt-3 mb-3 p-0 p-lg-3"
              v-for="(materi, i) in detailCourse['materi course']"
              :key="i"
            >
              <div class="p-2 materi">
                {{ materi.section }}
              </div>
              <ul>
                <li
                  class="materi d-flex p-2 align-items-center"
                  v-for="(data, i) in materi.data"
                  :key="i + '1'"
                >
                <b-icon class="m-2" icon="youtube" variant="dark"></b-icon>
                  <p class="m-0">{{ data.title }} ({{ data["time-in"] }})</p>
                  <a href="" class="ml-auto">
                      <button class="btn text-white btn-warning">Start</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="detailcourse d-flex align-items-center">
          <div class="detailcourse-img w-100">
            <img class="w-100" :src="detailCourse['quistion-photo']" />
          </div>
          <div class="detailcourse-answer">
            <h2>
              {{ detailCourse.quistion }}
            </h2>
            <p>
              {{ detailCourse.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Footer,
    Banner
  },
  methods: {
    ...mapActions({
      getDetailCourse: 'detailCourse/getDataDetailCourse'
    })
  },
  computed: {
    ...mapGetters({
      detailCourse: 'detailCourse/getDataDetailCourse'
    })
  },
  mounted () {
    this.getDetailCourse().then(() => {
    })
  }
}
</script>

<style scoped>
p {
    font-family: "Montserrat", Sans-serif;
    font-size: 16px;
}
h2,h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: 500;
}
.listcourse-section1 {
  background: linear-gradient(
    90deg,
    rgba(1, 28, 78, 0.7) 0%,
    rgba(16, 180, 172, 0.75)
  );
  padding: 0 40px;
}

.materi {
  text-align: left;
  background-color: #e8e8e8;
  border: 1px solid #fff;
}
ul {
  list-style-type: none;
  padding: 0;
}
@media (max-width: 768px) {
  .detailcourse {
    flex-direction: column;
  }
}
</style>
