<template>
  <Row type="flex" justify="center" class="code-row-bg"
       style="padding-top: 50px; height: 600px;
       background: url('https://api.ixiaowai.cn/gqapi/gqapi.php') no-repeat fixed ;;">
    <Col>
      <Card style="width:400px">
        <p slot="title" style="font-size: 20px">
          <Icon type="md-reorder"/>
          注册
        </p>

        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="username">
            <Input size="large" type="text" v-model="formInline.username" placeholder="用户名">
              <Icon size="25" type="ios-person" slot="prepend"/>
            </Input>
          </FormItem>

          <FormItem prop="password">
            <Input size="large" type="password" v-model="formInline.password" placeholder="密码">
              <Icon size="25" type="md-lock" slot="prepend"/>
            </Input>
          </FormItem>
          <FormItem prop="email">
            <Input size="large" v-model="formInline.email" placeholder="Email">
              <Icon size="25" type="md-mail" slot="prepend"/>
            </Input>
          </FormItem>
          <FormItem>
            <Button size="large" long type="primary" @click="handleSubmit('formInline')">注册</Button>
          </FormItem>
        </Form>

      </Card>
    </Col>
  </Row>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          username: '',
          password: '',
          email: '',
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
              message: '密码长度不能小于六位 -_-!',
              trigger: 'blur'
            }
          ],
          email: [
            {required: true, message: '请填写邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请填写正确的邮箱地址', min: 5,}
          ],
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.axios({
              method: 'post',
              url: 'https://api.choyeon.cn/user/',
              data: {
                username: this.formInline.username,
                password: this.formInline.password,
                email: this.formInline.email
              }
            }).then(res => {
                console.log(res);
                const _this = this;
                this.$Message.success(
                  {
                    content: "注册成功，正在跳转到登录",
                    onClose: function () {
                      _this.$router.push('/login');
                    }
                  }
                )
              })
          } else {
            this.$Message.error('请填写完整信息');
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
