<template>
  <div>
    <div>
      <b-navbar toggleable="md">
        <b-navbar-brand href="#"><img src="../assets/logo.png" alt="Refactory Logo"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
              <ul class="list-menu d-flex">
                  <li class="menu-item">
                      <router-link to="/">Home</router-link>
                  </li>
                  <li class="menu-item">
                      <router-link to="/course">Course</router-link>
                  </li>
                  <li class="menu-item">
                      <a href="#">Custom Trainings</a>
                  </li>
                  <li class="menu-item">
                      <a href="#">Case Studies</a>
                  </li>
                  <li class="menu-item">
                      <router-link to="/blog">Blog</router-link>
                  </li>
              </ul>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  list-style-type: none;
}
.menu-item {
    padding: 0px 20px;
    font-family: 'Montserrat', sans-serif;
    /* background: #0C162A;
    color: #eaeaea; */
    font-size: 16px;
    font-weight: bolder;
}
.menu-item a {
    color: #fff;
}
.menu-item:hover a {
    color: #e48800;
}
ul.list-menu {
    padding: 0;
}
@media (max-width: 766px) {
    ul.list-menu {
        flex-direction: column;
    }
    ul.list-menu li {
        text-align: start;
        border: 1px solid #fff;
        padding: 5px;
    }
}
</style>
