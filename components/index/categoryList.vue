<template>
  <Card>
    <p slot="title">
      <Icon type="md-apps" color="#fd7792"/>
      分类
    </p>
    <CellGroup v-show="!show">
    <Cell class="skeleton-category" v-for="i in skeleton" :key="i"/>
    </CellGroup>
    <CellGroup v-show="show">
      <Cell class="wrapper" :title="category.name" v-for="category in categoryList" :to="'/category/'+category.id" :keys="category.id"/>
    </CellGroup>
  </Card>
</template>

<script>
  export default {
    name: "categoryList",
    data() {
      return {
        categoryList: [],
        skeleton: new Array(10),
        loading: true,
      }
    },
    created() {
      //
      // 向后端请求
      this.axios.get('https://api.choyeon.cn/category/').then((response) => {
        this.categoryList = response.data;
        this.loading = false;
      })
    },
  }
</script>

<style scoped>
  .skeleton-category {
    background: rgb(194, 207, 214);
    width: 80%;
    transform-origin: left;
    margin: 5px 0 0 0;
    animation: skeleton-stretch .5s linear infinite alternate;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    /*初始状态 透明度为0*/
    40% {
      opacity: 0;
    }
    /*过渡状态 透明度为0*/
    100% {
      opacity: 1;
    }
    /*结束状态 透明度为1*/
  }

  @-webkit-keyframes fade-in { /*针对webkit内核*/
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .wrapper {
    animation: fade-in; /*动画名称*/
    animation-duration: .6s; /*动画持续时间*/
    -webkit-animation: fade-in .6s; /*针对webkit内核*/
  }
</style>
