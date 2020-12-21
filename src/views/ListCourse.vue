<template>
    <div>
        <section class="listcourse-section1">
            <Navbar />
        </section>
        <section class="container-fluid p-3 p-lg-5">
            <Cards />
        </section>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

export default {
  components: {
    Navbar,
    Footer,
    Cards
  }
}
</script>

<style scoped>
    .listcourse-section1 {
        background: linear-gradient(90deg, rgba(1, 28, 78, 0.7) 0%, rgba(16, 180, 172, 0.75));
        padding: 0 40px;
    }
</style>
