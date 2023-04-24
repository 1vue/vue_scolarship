<template>
  <div><el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息展示</el-breadcrumb-item>
      <el-breadcrumb-item>成果展示</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">
      <el-row :gutter="26">

        <el-col :span="6">
          <el-card class="box">第一学年 </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box">第二学年 </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box">第三学年 </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box"> 第四学年</el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.box-card {
  display: flex;
  /* justify-content: center; */

  width: 100%;
  height: 490px;
}
.box {
  /* margin-left: 10px; */
  width: 300px;
  height: 400px;
}
</style>