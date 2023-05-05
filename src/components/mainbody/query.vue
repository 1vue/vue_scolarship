<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息展示</el-breadcrumb-item>
      <el-breadcrumb-item>成绩查询</el-breadcrumb-item>

    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >

        <span>成绩查询</span>

      </div>

      <el-row :gutter="26">
        <el-col :span="6">
          <el-select
            v-model="value"
            placeholder="请选择开课时间"
          >

            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>

        <el-col
          :pull="min"
          :span="6"
        >

          <el-button
            type="primary"
            @click="queryScoreData"
          >查询</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表 -->
      <el-table
        border
        :data="scoreData"
        stripe
        style="width: 100%"
      >

        <!-- <el-table-column
          prop="id"
          label="id"
        >
        </el-table-column> -->
        <el-table-column
          prop="semester"
          label="开课学期"
        >
        </el-table-column>
        <el-table-column
          prop="courseName"
          label="课程名称"
        >
        </el-table-column>
        <el-table-column
          prop="score"
          label="成绩"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="sort"
          label="课程性质"
        >
        </el-table-column> -->

        <!-- <el-table-column label="状态">
           获取该行的数据 
          <template slot-scope="scope">
            {{ scope.row }}
          </template>
        </el-table-column>

        <el-table-column
          prop="result"
          label="绩点"
        >
        </el-table-column> -->

      </el-table>

    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data () {
    return {
      // charts: "",
      // opinionData: ["0", "2", "1", "2", "2", "3", "1"],
      // 获取用户列表的参数对象
      // queryInfo: {
      //   query: '',
      //   pagenum: 1,
      //   pagesize: 2,
      // },
      scoreData: [],

      options: [{
        value: null,
        label: '全部学期'
      }, {
        value: 1,
        label: '第一学期'
      }, {
        value: 2,
        label: '第二学期'
      }, {
        value: 3,
        label: '第三学期'
      }, {
        value: 4,
        label: '第四学期'
      }, {
        value: 5,
        label: '第五学期'
      },
      {
        value: 6,
        label: '第六学期'
      },
      ],
      min: 1,
      value: '',
      input: ''

    }

  },
  created () {
    this.queryScoreData()
  },

  methods: {


    handleSizeChange (newsize) {
      console.log(newsize);
      this.queryInfo.pagesize = newsize;
    },
    handleCurrentChange (newpage) {
      console.log(newpage);
      this.queryInfo.pagenum = newpage;
    },
    queryScoreData () {
      let Score = new FormData();
      console.log(this.value);
      Score.append('semester', this.value);
      this.$http({
        url: '/student/query/score',
        method: "get",
        headers: {
          token: window.sessionStorage.getItem('token'),
          "Content-Type": "multipart/form-data",
        },
        params: {
          semester: this.value
        },
      }).then((res) => {
        console.log(res);
        this.scoreData = res.data.data;
        if (res.data.code === 1)
          this.$message.success('查询成功，共查询到' + this.scoreData.length + '条数据')
      })
    }

  },
}
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  /* height: 490px; */
}
.el-button {
  margin-left: 10px;
}
#tp {
  margin-left: 10px;
  margin-top: 10px;
  height: 200px;
  width: 550px;
  /* background-color: #d5f39c; */
}
</style>