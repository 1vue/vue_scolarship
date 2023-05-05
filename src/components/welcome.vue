<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>

    </el-breadcrumb>

    <span class="first">近期日程安排</span>
    <!-- <el-divider></el-divider> -->
    <el-card class="box-card">
      <div class="box1">

        <div class="box1-"><el-calendar v-model="value">
          </el-calendar></div>
        <div class="box1-">

          <div>考试日程安排：</div>
          <div class="test">
            <div class="text">距离离散数学考试还剩</div>
            <el-statistic
              :value="deadline1"
              time-indices
            >
              <template slot="suffix"> 天 </template>
            </el-statistic>

          </div>
          <div class="test">
            <div class="text">距离数据库考试还剩</div>
            <el-statistic
              :value="deadline2"
              time-indices
            >
              <template slot="suffix"> 天 </template>
            </el-statistic>

          </div>
          <div class="test">
            <div class="text">距离计算机组成原理考试还剩</div>
            <el-statistic
              :value="deadline3"
              time-indices
            >
              <template slot="suffix"> 天 </template>
            </el-statistic>

          </div>
          <div class="test">
            <div class="text">距离计算机网络考试还剩</div>
            <el-statistic
              :value="deadline4"
              time-indices
            >
              <template slot="suffix"> 天 </template>
            </el-statistic>

          </div>
          <div class="test">
            <div class="text">距离编译原理考试还剩</div>
            <el-statistic
              :value="deadline5"
              time-indices
            >
              <template slot="suffix"> 天 </template>
            </el-statistic>

          </div>
          <div class="test">
            <div class="text">距离计算机网络考试还剩</div>
            <el-statistic
              :value="deadline6"
              time-indices
            >
              <template slot="suffix"> 天 </template>
            </el-statistic>

          </div>
        </div>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  data () {
    return {
      deadline1: Date.now() + 1000 * 60 * 60 * 8,
      deadline2: Date.now() + 2000 * 60 * 60 * 8,
      deadline3: Date.now() + 3000 * 60 * 60 * 8,
      deadline4: Date.now() + 3110 * 30 * 60 * 8,
      deadline5: Date.now() + 3190 * 20 * 50 * 8,
      deadline6: Date.now() + 3200 * 15 * 60 * 8,
      deadline7: Date.now() + 3230 * 30 * 60 * 8,
      value: new Date()
    }
  }
}
</script>

<style lang="less" scoped>
.first {
  display: flex;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
  // height: 200px;
}
.box1 {
  display: flex;
}
.box1- {
  margin-left: 32px;
  flex-direction: column;
  display: flex;
  height: 200px;
  flex: 1;
  div {
    margin-top: 20px;
  }
}
.box-card {
  height: 660px;
}
.test {
  display: flex;
  flex-direction: row;
  .text {
    width: 400px;
  }
}
</style>