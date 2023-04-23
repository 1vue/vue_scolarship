<template>
  <div> <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>

    </el-breadcrumb>

    <span class="first">Welcome to our managage symstem !!!</span>

    <el-calendar v-model="value">
    </el-calendar>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value: new Date()
    }
  }
}
</script>

<style>
.first {
  display: flex;
  justify-content: center;
  font-size: 30px;
}
.el-calendar {
  width: 100%;
  height: 635px;
}
.el-calendar__body {
  padding-bottom: 0;
}
</style>