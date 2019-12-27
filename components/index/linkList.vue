<template>
  <div class="link">
    <Card>
      <p slot="title">
        <Icon type="md-link" color="#fd7792"/>
        友情链接
      </p>
      <CellGroup v-show="loading">
        <Cell class="skeleton-link" v-for="i in skeleton" :key="i"/>
      </CellGroup>
      <CellGroup v-show="!loading">
        <Cell class="wrapper" :to="link.herf" :title="link.title" v-for="link in linkList" :key="linkList.id"/>
      </CellGroup>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "link",
    data() {
      return {
        linkList: [],
        skeleton: new Array(10),
        loading : true,
      }
    },
    created() {
      this.axios.get('https://api.choyeon.cn/link/').then((response) => {
        console.log(response.data)
        this.$data.linkList = response.data
        this.$data.loading = false
      })
    }
  }
</script>

<style scoped>
  .skeleton-link {
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
