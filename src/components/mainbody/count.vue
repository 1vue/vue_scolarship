<template>
  <div><el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息展示</el-breadcrumb-item>
      <el-breadcrumb-item>奖学金计算</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">

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
  justify-content: center;
  width: 100%;
  height: 490px;
}
</style>