<template>

  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div> <span class="iconfont icon-copper-diamond-line
"></span>
        <span>The Future Management-学生电子档案系统</span>
      </div>
      <!-- <el-button
        @click="logout"
        round
        size="small"
      >退出</el-button> -->
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-s-custom"></i>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">首页</el-dropdown-item>
          <el-dropdown-item command="2">退出登录</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isfold ? '64px' : '200px'">

        <div
          class="foldbutton"
          @click="fold"
        >
          <i class="el-icon-s-fold"></i>
        </div>
        <el-menu
          router
          :collapse="isfold"
          :collapse-transition="false"
          background-color="#333744"
          text-color="#fff"
        >
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单的模板区 -->
            <template slot="title">
              <!-- 一级菜单的图标 -->
              <i class="el-icon-user-solid"></i>
              <span>个人信息展示</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="basedata"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-document"></i>
                <span>基本信息</span>
              </template></el-menu-item>
            <el-menu-item index="query"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-user"></i>
                <span>成绩查询</span>
              </template></el-menu-item>
            <el-menu-item index="count"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-trophy"></i>
                <span>奖学金计算</span>
              </template></el-menu-item>
            <el-menu-item index="show"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-s-flag"></i>
                <span>成果展示</span>
              </template></el-menu-item>

          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <!-- 一级菜单的图标 -->
              <i class="el-icon-upload"></i>
              <span>添加竞赛成果</span>
            </template>

            <el-menu-item index="allcompetitions"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-coordinate"></i>
                <span>相关竞赛信息</span>
              </template></el-menu-item>

            <el-menu-item index="addcompetitions"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-plus"></i>
                <span>添加竞赛</span>
              </template></el-menu-item>

          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <!-- 一级菜单的图标 -->
              <i class="el-icon-document"></i>
              <span>上传信息管理</span>
            </template>
            <el-menu-item index="updataInformation"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-search"></i>
                <span>已上传信息查询</span>
              </template></el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <!-- 一级菜单的图标 -->
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item index="codesettings"><template slot="title">
                <!-- 二级菜单的图标 -->
                <i class="el-icon-key"></i>
                <span>密码设置</span>
              </template></el-menu-item>
          </el-submenu>

        </el-menu>

      </el-aside>
      <el-main>

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

 <script>
export default {

  data () {
    return {
      isfold: false
    }
  },


  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login');
      this.$message.success("退出成功")
    },
    gohome () {
      this.$router.push('/home')
    },
    handleCommand (command) {
      this.$message('click on item ' + command);
      console.log(command);
      if (command === '1') {
        this.gohome()
        this.$message('click on item ' + command);
        console.log(command);
      }
      if (command === '2')
        this.logout()
    },
    // handleOpen (key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose (key, keyPath) {
    //   console.log(key, keyPath);
    // }
    fold () {
      this.isfold = !this.isfold
    }
  }
}
</script>

<style lang="less",scoped>
.header {
  height: 400px;
}
.el-header {
  background-color: #eff2f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #373d41;
  .el-menu {
    border-right: 0;
  }
  transition: 0.8s;
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}
.foldbutton {
  color: #292c36;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
</style>