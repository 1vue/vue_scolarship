<template>
  <div class="login">
    <div class="login-box">
      <h2>login</h2>
      <el-form
        ref="loginfromref"
        :rules="loginformrules"
        :model="loginform"
        class="login-form"
        label-width="0px"
        size="mini"
      >
        <el-form-item prop="number">
          <label> 账号</label>
          <el-input
            placeholder="账号/学号/工号"
            v-model="loginform.number"
            prefix-icon="iconfont icon-yuangong"
          >

          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>密码</label>
          <el-input
            placeholder=" 6-16 位的字母、数字组合"
            v-model="loginform.password"
            prefix-icon="iconfont icon-lock"
            type="password"
          ></el-input>
        </el-form-item>
        <div class="fg">
          <!-- <el-button
            @click="resetloginfrom"
            type="primary"
            round
          >重置</el-button> -->
          <!-- <a href="#">忘记密码?</a> -->

          <button @click="resetloginfrom">清空</button>
        </div>
        <el-form-item class="btns">
          <el-button
            type="primary"
            round
            @click="login"
          >学生登录</el-button>

          <el-button
            @click="login2"
            type="primary"
            round
          >教师登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginform: {
        number: '',
        password: '',
        flag: 1,
      },
      // 这是表单的验证规则对象
      loginformrules: {
        // 验证用户名
        number: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    resetloginfrom () {
      this.$refs.loginfromref.resetFields();
    },
    login () {
      this.loginform.flag = 1;

      this.$refs.loginfromref.validate(async valid => {
        if (!valid)
          return;
        // 发起axios请求
        // const result = await this.$http.post('/login', qs.stringify(this.loginform));
        let data = {
          number: this.loginform.number,
          password: this.loginform.password,
          flag: this.loginform.flag,
        }
        let formdata = new FormData()
        for (let key in data) {
          formdata.append(key, data[key])
        }
        this.$http.post('/login', formdata).then(
          (res) => {
            if (res.data.code != 1)
              return this.$message.error("登录失败,用户名或密码错误");
            console.log(res);
            this.$message.success("登录成功")
            window.sessionStorage.setItem("token", res.data.data);
            this.$router.push('/home')

          }
        )




        // console.log(result.data);





        // 接口1
        // if (res.data.code != 1)
        //   return this.$message.error("登录失败,用户名或密码错误");

        // this.$message.success("登录成功")
        // window.sessionStorage.setItem("token", res.data.data);

        // //         if (result.status != 200)
        // //           return this.$message.error("登录失败");

        // // this.$message.success("登录成功")
        // // window.sessionStorage.setItem("token", "232")

        // this.$router.push('/home')

      })
    },

    login2 () {
      this.$refs.loginfromref.validate(async valid => {
        if (!valid)
          return;
        // 发起axios请求
        // const result = await this.$http.post('posts', this.loginform);
        // console.log(result);
        // if (result.status != 201)
        //   return this.$message.error("登录失败");

        this.$message.success("登录成功")
        window.sessionStorage.setItem("token", "232")

        this.$router.push('/home2')

      })
    }
  }

}
</script>

<style lang="less" scoped>
.login {
  // background-color: skyblue;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(@/assets/login.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
}
.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 380px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 20px;
}
.login-box h2 {
  position: absolute;
  top: 65px;
  font-size: 30px;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
}
.fg {
  display: flex;
  justify-content: right;

  a {
    padding-top: 1px;
    text-decoration: none;
    font-size: 5px;
    color: black;
  }
  button {
    border: none;

    cursor: pointer;
    font-size: 5px;
    background-color: rgba(0, 0, 0, 0);
  }
}

.btns {
  margin-top: 11px;
  display: flex;
  justify-content: center;
}
.login-form {
  position: absolute;
  width: 230px;

  left: 43px;
  box-sizing: border-box;
  bottom: 50px;
}

::v-deep .el-input {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  transition: 0.2s;
}
::v-deep .el-input .el-input__inner {
  // background: rgba(255, 255, 255, 0.3);
  background-color: rgba(0, 0, 0, 0);
}
.login .login-box label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}
</style>