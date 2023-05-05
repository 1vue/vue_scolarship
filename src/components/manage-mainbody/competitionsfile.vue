<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home2' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>审核管理</el-breadcrumb-item>
      <el-breadcrumb-item>证明材料审核</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >

        <span>证明材料审核</span>

      </div>
      <!-- <el-button
        type="primary"
        @click="queryFile"
      >查询未审核文件</el-button> -->
      <el-table
        :data="fileList"
        stripe
        style="width: 100%"
        border
      >

        <el-table-column
          prop="stuName"
          label="学生姓名"
        >
        </el-table-column>
        <el-table-column
          prop="fileName"
          label="文件名"
        >
        </el-table-column>
        <el-table-column
          prop="fileUrl"
          label="文件查看地址"
        >
        </el-table-column>
        <el-table-column
          prop="fileType"
          label="文件类型"
        >
        </el-table-column>
        <el-table-column
          prop="checkState"
          label="文件状态"
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
      fileList: [],
    }
  },
  created () {
    this.queryFile()
  },
  methods: {
    async queryFile () {
      const { data: res } = await this.$http.get('/manager/query/filecheck')
      console.log(res);
      this.fileList = res.data;
      if (res.code === 1)
        this.$message.success("查询成功，共查询到" + res.data.length + '条数据');

    }
  }
}
</script>

<style>
</style>