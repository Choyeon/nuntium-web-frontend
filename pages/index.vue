<template>
  <div class="container">
    <Row>
      <Col span="16">
        <blogList/>
      </Col>
      <Col span="8">
        <tagCard/>
      </Col>
    </Row>
  </div>
</template>

<script>
  import blogList from "../components/index/blogList";
  import tagCard from "../components/index/tagCard";

  export default {

    components: {
      blogList,
      tagCard
    },
    layout: 'blog',

  };
</script>

<style>
</style>
