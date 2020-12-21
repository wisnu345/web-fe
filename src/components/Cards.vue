<template>
  <div>
    <section class="cards">
      <div class="cards-wrap">
        <div
          class="col-md-4 col-sm-6 col-12 p-3"
          v-for="(data, index) in dataListCourse"
          :key="index"
        >
          <div class="card text-left" @click="$router.push({ name: 'Detail Course' })">
            <a :href="data.link_url" @click.prevent="false">
              <img
                class="card-img-top"
                :src="data.photo_url"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{ data.title }}</h5>
                <p class="card-text">
                  {{ data.short_description }}
                </p>
                <div class="card-lecturer d-flex w-100 align-items-center">
                  <div class="lecturer-img rounded-circle mr-3">
                    <img class="rounded-circle" :src="data.user.photo_url" />
                  </div>
                  <p class="lecturer-name m-0">
                    {{ data.user.name }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions({
      getListCourse: 'listCourse/getDataListCourse'
    })
  },
  computed: {
    ...mapGetters({
      dataListCourse: 'listCourse/getDataListCourse'
    })
  },
  mounted () {
    this.getListCourse().then((res) => {
    })
  }
}
</script>

<style scoped>
.cards-wrap {
  display: flex;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
  color: #060807;
}
a:hover {
  text-decoration: none;
  color: #060807;
}
.card {
  border-radius: 20px;
}
</style>
