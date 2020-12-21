<template>
  <div>
    <div :class="className" class="card text-left">
      <img class="card-img-top" :src="img" alt="Card image cap" />
      <div class="card-body">
          <h4 class="text-uppercase">{{category}}</h4>
          <h2 @click="$router.push({name: 'Detail Blog'})" style="cursor: pointer">{{newsTitle}}</h2>
        <p class="card-text">
          {{shortnews}}
        </p>
        <a href="#">{{read}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'category', 'newsTitle', 'shortnews', 'className', 'read']
}
</script>

<style scoped>
h4 {
    color: #E48800;
    font-family: "Montserrat", Sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2.5px;
}
p {
    font-family: "Montserrat", Sans-serif;
    font-size: 16px;
}
a {
    color: #E48800;
    font-family: "Montserrat", Sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
}
h2,h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: 500;
}
.card {
    background: none;
}
.card-body {
    padding: 10px;
}
</style>
