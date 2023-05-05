<template>
  <div><el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息展示</el-breadcrumb-item>
      <el-breadcrumb-item>奖学金计算</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >

        <span>绩点分析</span>

      </div>
      <div class="center">
        <div id="tp">

        </div>
      </div>

    </el-card>
  </div>

</template>

<script>
import * as echarts from 'echarts';
export default {
  data () {
    return {
      charts: "",
      opinionData: ["0", "2", "1", "2", "2", "3", "1"],
    }

  },
  methods: {
    drawLine (id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["近几学期平均绩点分析"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },

        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {

          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6", "7"],
        },
        yAxis: {
          name: '绩点',
          type: "category",
          boundaryGap: false,
          data: ["0", "1", "2", "3", "4"],
          dateMin: 0,
          dateMax: 4,
          min: 'dateMin',
          max: 'dateMax',
          minInterval: 1

        },

        series: [
          {
            name: "近几学期平均绩点分析",
            type: "line",
            stack: "总量",
            data: this.opinionData,
          },
        ],
      });
    },

  },

  mounted () {
    this.$nextTick(function () {
      this.drawLine("tp");
    });
  },

}
</script>

<style scoped>
/* .box-card {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 490px;
} */
.center {
  display: flex;
  justify-content: center;
}

#tp {
  margin-left: 10px;
  margin-top: 10px;
  height: 200px;
  width: 550px;
}
</style>