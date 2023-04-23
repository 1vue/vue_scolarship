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

        <el-col :span="6">

          <el-input
            v-model="input"
            placeholder="请输入课程名称"
          ></el-input>

        </el-col>
        <el-col
          :pull="min"
          :span="6"
        >

          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表 -->
      <el-table
        border
        :data="tableData"
        stripe
        style="width: 100%"
      >
        <el-table-column type="index">
        </el-table-column>
        <el-table-column
          prop="coursescore"
          label="学分"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="开课时间"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="课程名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="score"
          label="成绩"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="sort"
          label="课程性质"
        >
        </el-table-column>
        <el-table-column
          prop="result"
          label="绩点"
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
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        pagenum: '',
        pagesize: '',
      },
      tableData: [{
        coursescore: '3',
        date: '2016-05-02',
        name: '高数一',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      }, {
        coursescore: '3',
        date: '2016-05-02',
        name: '高数二',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      }, {
        coursescore: '3',
        date: '2016-05-02',
        name: '大学英语一',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      }, {
        coursescore: '3',
        date: '2016-05-02',
        name: '体育一',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },
      {
        coursescore: '3',
        date: '2016-05-02',
        name: '体育二',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },
      {
        coursescore: '3',
        date: '2016-05-02',
        name: '王小虎',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },
      {
        coursescore: '3',
        date: '2016-05-02',
        name: '王小虎',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },
      {
        coursescore: '3',
        date: '2016-05-02',
        name: '王小虎',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },
      {
        coursescore: '3',
        date: '2016-05-02',
        name: '王小虎',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },
      {
        coursescore: '3',
        date: '2016-05-02',
        name: '王小虎',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },
      {
        coursescore: '3',
        date: '2016-05-02',
        name: '王小虎',
        score: '96',
        sort: '公共基础课程',
        result: '4.0',
      },




      ],
      userlist: [],
      options: [{
        value: '选项1',
        label: '2021-2022-1'
      }, {
        value: '选项2',
        label: '2021-2022-2'
      }, {
        value: '选项3',
        label: '2022-2023-1'
      }, {
        value: '选项4',
        label: '2022-2023-2'
      }, {
        value: '选项5',
        label: '2023-2024-1'
      }, {
        value: '选项6',
        label: '2023-2024-2'
      }
      ],
      min: 1,
      value: '',
      input: ''

    }

  },
  created () {
    this.getuserlist()
  },

  methods: {
    async getuserlist () {
      const { data: res } = await this.$http.get('...', { params: this.queryInfo })
      if (res.meta.status !== 200)
        return this.$message.error('获取用户列表失败')
      this.userlist = res.data.users


    },



  }


}
</script>

<style>
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
</style>