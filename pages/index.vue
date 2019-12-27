<template>
  <div class="container">
    <Row>
      <Col span="16">
        <blogList/>
      </Col>
      <Col span="8">
        <tagCard/>
        <categoryList/>
        <linkList/>
      </Col>
    </Row>
  </div>
</template>

<script>
  import blogList from "../components/index/blogList";
  import tagCard from "../components/index/tagCard";
  import categoryList from "../components/index/categoryList";
  import linkList from "../components/index/linkList";
  export default {

    components: {
      blogList,
      tagCard,
      categoryList,
      linkList,
    },
    layout: 'blog',

  };
</script>

<style>
</style>
