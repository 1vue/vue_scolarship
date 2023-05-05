<template>
  <div><el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息展示</el-breadcrumb-item>
      <el-breadcrumb-item>成果展示</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >

        <span>成果展示</span>

      </div>

      <div class="showTotal">

        <div class="show">

          <el-card class="box-card showcard">
            <div
              slot="header"
              class="clearfix"
            >
              <span>第一学年</span>

            </div>
            <div class="award">
              <div>蓝桥杯省级二等奖</div>
              <div>三好学生</div>
            </div>
          </el-card>
        </div>
        <div class="show"><el-card class="box-card showcard">
            <div
              slot="header"
              class="clearfix"
            >
              <span>第二学年</span>

            </div>
            <div class="award">
              <div>校级奖学金二等奖</div>
              <div>学习标兵</div>
            </div>
          </el-card></div>
        <div class="show"><el-card class="box-card showcard">
            <div
              slot="header"
              class="clearfix"
            >
              <span>第三学年</span>

            </div>
            <div class="award">
              <div>校级奖学金一等奖</div>
              <div>高数竞赛二等奖</div>
            </div>
          </el-card></div>
        <div class="show"><el-card class="box-card showcard">
            <div
              slot="header"
              class="clearfix"
            >
              <span>第四学年</span>

            </div>
            <div class="award">
              <div>全国大学生英语竞赛省级二等奖</div>
              <div>优秀毕业生</div>
            </div>
          </el-card></div>
      </div>

      <!-- <el-row :gutter="26">

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
      </el-row> -->
    </el-card>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.showTotal {
  display: flex;
}

.show {
  flex: 1;
  margin-left: 5px;
}
.showcard {
  height: 400px;
}

.award {
  display: flex;
  flex-direction: column;
}
.award > div {
  margin-top: 10px;
}
/* .box-card {
  display: flex;
  

  width: 100%;
  height: 490px;
} */
/* .box {
  
  width: 300px;
  height: 400px;
} */
</style>