<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home2' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生成绩信息</el-breadcrumb-item>
      <el-breadcrumb-item>学生成绩查询</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >

        <span>学生成绩查询</span>

      </div>
      <el-row :gutter="3">
        <el-col :span="5"><el-input
            v-model="courseName"
            placeholder="请输入课程名"
          ></el-input></el-col>
        <el-col :span="5"><el-input
            v-model="stuName"
            placeholder="请输入学生名"
          ></el-input></el-col>
        <el-col :span="8"><el-button
            type="primary"
            @click="querInfo"
          >查询</el-button></el-col>

      </el-row>
      <el-table
        :data="ScoreList"
        stripe
        style="width: 100%"
        border
      >

        <!-- <el-table-column
          prop="id"
          label="id"
        >
        </el-table-column> -->
        <el-table-column
          prop="stuName"
          label="学生名"
        >
        </el-table-column>
        <el-table-column
          prop="courseName"
          label="课程名"
        >
        </el-table-column>
        <el-table-column
          prop="score"
          label="分数"
        >
        </el-table-column>
        <el-table-column
          prop="semester"
          label="学期"
        >
        </el-table-column>
      </el-table>

    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      courseName: null,
      stuName: null,
      ScoreList: [],
    }
  },



  methods: {
    async querInfo () {
      const { data: res } = await this.$http.get('/manager/query/score',
        {
          params: {
            courseName: this.courseName,
            stuName: this.stuName,
          }
        }
      )
      console.log(res);
      this.ScoreList = res.data;
      if (res.code !== 1)
        this.$message('查询失败')
      else
        this.$message.success('查询成功，共查询到' + this.ScoreList.length + '条数据');
    }
  },
  created () {
    this.querInfo()
  },


}
</script>

<style>
</style>