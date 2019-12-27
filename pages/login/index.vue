<template>
  <div class="lo">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col>
        <Card style="width:400px">
          <p slot="title" style="font-size: 20px">
            <Icon type="md-finger-print"/>
            登录
          </p>
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="username">
              <Input size="large" type="text" v-model="formInline.username" placeholder="用户名/邮箱">
                <Icon size="25" type="ios-person" slot="prepend"/>

              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input size="large" type="password" v-model="formInline.password" placeholder="密码">
                <Icon size="25" type="md-lock" slot="prepend"/>
              </Input>
            </FormItem>
            <FormItem>
              <Button size="large" type="primary" @click="handleSubmit('formInline')" long>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>

  </div>
</template>
<script>


  export default {
    data() {
      return {
        formInline: {
          username: '',
          password: ''
        },
        ruleInline: {
          username: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {
              type: 'string',
              min: 3,
              message: '密码长度不能少于6位',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      // 提交获取token
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            // Vuex 状态里登录功能
            this.axios({
              method: 'post',
              url: 'https://api.choyeon.cn/api-token-auth',
              data: {
                username: this.formInline.username,
                password: this.formInline.password,
              }
            }).then(res => {
              const _this = this;
              console.log(res);
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('username', res.data.username);
              localStorage.setItem('login', '1');
              // 登录成功信息
              this.$Message.success(
                {
                  content: "登陆成功 正在返回主页",
                  onClose: function () {
                    _this.$router.push('/');
                  }
                }
              );
            }).catch(err => {
              console.log(err);
              this.$Message.error('用户名或密码错误');
            })
          } else {
            this.$Message.error("提交内容不符合规范");
          }
        })
      }
    }
  }
</script>
<style scoped>
  .lo {
    height: 600px;
    padding-top: 100px;
    background: url('https://api.ixiaowai.cn/gqapi/gqapi.php') fixed;
  }

</style>
