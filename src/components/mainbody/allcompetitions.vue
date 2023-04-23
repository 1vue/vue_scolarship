<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加竞赛成果</el-breadcrumb-item>
      <el-breadcrumb-item>学校认可的竞赛</el-breadcrumb-item>

    </el-breadcrumb>
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
    >
      <el-carousel-item
        v-for="item in 6"
        :key="item"
      >

        <h3 class="medium"> 这是第 {{ item }}个图</h3>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  // line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>