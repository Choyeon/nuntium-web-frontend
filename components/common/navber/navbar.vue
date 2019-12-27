<template>
  <div class="nav-bar">
    <Menu mode="horizontal" theme="light" active-name="1">
      <Row type="flex" justify="center" align="middle">
        <Col span="1"><h3 style="color:pink;">HareBlog</h3></Col>
        <Col span="11" offset="1">
          <MenuItem name="index" to="/">
            <Icon type="md-home"></Icon>
            主页
          </MenuItem>
          <MenuItem :name="nav.id" v-for="nav in navs" :key="nav.id" :to="'/category/'+nav.id">
            {{nav.name}}
          </MenuItem>
        </Col>
        <Col span="3">
          <Input :search="true" enter-button placeholder="输入搜索内容" v-model="search"
                 @on-search="onSearch"/>
        </Col>
        <Col span="3" offset="1">
          <Button type="primary" icon="md-log-in" to="/login">登录
          </Button>
        </Col>
      </Row>
    </Menu>

  </div>
</template>
<style>
  .nav-bar {
    /*min-width: 1300px;*/
  }
</style>
<script>
  export default {
    name: 'navBar',
    data() {
      return {
        navs: [],
        search: '',
      }
    },
    created() {
      // 向后端请求
      this.axios({
        method: 'get',
        url: 'https://api.choyeon.cn/nav/'
      }).then((response) => {
        console.log(response.data)
        this.$data.navs = response.data
      })
    },
    methods: {
      logout() {
        localStorage.removeItem("token");
      },
      onSearch() {
        this.$router.push({path: '/search', query: {search: this.search}})
      }
    }
  }
</script>
