<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息展示</el-breadcrumb-item>
      <el-breadcrumb-item>基本信息</el-breadcrumb-item>

    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >

        <span>基本信息</span>

      </div>
      <div class="data">

        <el-descriptions
          class="margin-top"
          :column="3"
          size="medium"
          border
        >

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user-solid"></i>
              姓名
            </template>
            test
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-s-custom"></i>
              性别
            </template>
            男
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-school"></i>
              班级
            </template>
            2101
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              学号
            </template>
            202114569875
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-magic-stick"></i>
              民族
            </template>
            汉
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              所属学院
            </template>
            计算机科学与技术学院
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-sunrise"></i>
              政治面貌
            </template>
            共青团员
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              手机号
            </template>
            13648759635
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地
            </template>
            苏州市
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              备注
            </template>
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              家庭地址
            </template>
            江苏省苏州市吴中区吴中大道 1188 号
          </el-descriptions-item>
        </el-descriptions>

      </div>

      <el-divider></el-divider>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 获取用户列表的参数对象

    }

  },
  created () {

  },

  methods: {


  }


}
</script>

<style lang="less" scoped>
// .text {
//   font-size: 14px;
// }

// .item {
//   margin-bottom: 18px;
// }

// .clearfix:before,
// .clearfix:after {
//   display: table;
//   content: "";
// }
// .clearfix:after {
//   clear: both;
// }

// .box-card {
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 490px;
// }
// .avatar-uploader .el-upload {
//   border: 1px dashed #d9d9d9;
//   border-radius: 6px;
//   cursor: pointer;
//   position: relative;
//   overflow: hidden;
// }
// .avatar-uploader .el-upload:hover {
//   border-color: #409eff;
// }
// .avatar-uploader-icon {
//   font-size: 28px;
//   color: #8c939d;
//   width: 178px;
//   height: 178px;
//   line-height: 178px;
//   text-align: center;
// }
// .avatar {
//   width: 178px;
//   height: 178px;
//   display: block;
// }
// .margin-top {
//   margin-top: 100px;
//   background-color: #f9fafc;
//   height: 400px;
//   width: 800px;
// }
</style>