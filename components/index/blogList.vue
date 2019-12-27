<template>
  <div class="list">
    <br>
    <Row class="skeleton" v-show="!show" v-for="i in skeleton" :key="i">
      <Col class="skeleton-body" span="14">
        <Col class="skeleton-title"></Col>
        <Col class="skeleton-content"></Col>
        <Col class="skeleton-content"></Col>
        <Col class="skeleton-content-slow"></Col>
      </Col>
      <Col class="skeleton-img" span="10"></Col>
    </Row>
    <div class="wrapper" v-show="show">
      <Row class="list" v-show="show" v-for="article in ArticleList" :key="article.id">
        <Col class="list-left" span="14">
          <router-link :to="'/article/'+article.id">
            <p class="list-title">{{article.title}}</p>
          </router-link>
          <p class="list-desc">{{ article.desc }}</p>
          <p class="list-tool">
            <Time :time="article.created_time"/>
            <Divider type="vertical"/>
            分类: {{article.category_name}}
            <Divider type="vertical"/>
            作者: {{ article.owner }}
            <Divider type="vertical"/>
            {{ article.comment }}条评论
          </p>
        </Col>
        <Col class="list-img" span="10" offset="">
          <img src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture" style="width: 280px">
        </Col>
      </Row>
    </div>
    <Divider/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ArticleList: [],
        show: false,
        skeleton: new Array(10),
      }
    },
    mounted() {
      //请求全部文章
      this.ArticleList = []
      console.log(this.$route.params.id)
      this.axios({
        method:'get',
        url:'https://api.choyeon.cn/article/'
      }).then(res=>{
        this.ArticleList = res.data
      })
    },
    watch: {
      '$route'(to, from) {
        this.$store.dispatch("getArticles", this.$route.params.id).then(res => {
          this.PostList = res.data;
          this.show = true
        })

      }
    }
  }
</script>
<style>
  .list {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin-top: 10px;
  }

  .list-left {
    min-height: 200px;
  }

  .list-title {
    font-size: 24px;
    width: 95%;

  }

  .list-desc {
    color: darkgray;
    max-height: 150px;
    overflow: hidden;
    width: 95%;
    height: 150px;
  }

  .list-img {
    max-height: 200px;
  }

  .skeleton .skeleton-img,
  .skeleton .skeleton-title,
  .skeleton .skeleton-content,
  .skeleton-content-slow {
    background: rgb(194, 207, 214);

  }

  .skeleton-img {
    max-width: 280px;
    height: 210px;
  }

  .skeleton {
    padding-top: 10px;
  }

  .skeleton-title {
    width: 200px;
    height: 30px;
    transform-origin: left;
    animation: skeleton-stretch .5s linear infinite alternate;

  }

  .skeleton-content {
    width: 95%;
    height: 25px;
    margin-top: 10px;
    transform-origin: left;
    animation: skeleton-stretch .5s -8s linear infinite alternate;
  }

  .skeleton-content-slow {
    width: 300px;
    height: 25px;
    margin-top: 10px;
    transform-origin: left;
    animation: skeleton-stretch .5s -.8s linear infinite alternate;
  }


  @keyframes skeleton-stretch {
    from {
      transform: scalex(1);
    }
    to {
      transform: scalex(.3);
    }
  }

  @keyframes skeleton-stripes {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 20rem 0;
    }
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
