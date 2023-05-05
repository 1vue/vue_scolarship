<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>上传信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>已上传信息查询</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >

        <span>信息查询</span>

      </div>

      <el-row>
        <el-col :span="8">
          <el-select
            v-model="value"
            placeholder="请选择"
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
        <el-col :span="5">
          <el-button
            type="primary"
            @click="queryInfo"
          >查询</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="fileData"
        stripe
        style="width: 100%"
        border
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="id"
          label="id"
        >
        </el-table-column> -->
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
        <el-table-column label="操作">
          <template slot-scope="scope">

            <el-tooltip
              class="item"
              effect="dark"
              content="删除该文件"
              placement="top-start"
              :enterable="false"
            >
              <el-button
                type="danger"
                size="small"
                icon="el-icon-delete"
                @click="deleteFile(scope.row.id)"
              ></el-button>
            </el-tooltip>

          </template>

        </el-table-column>
      </el-table>

    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: null,
        label: '全部文件查找'
      }, {
        value: 0,
        label: '未审核'
      }, {
        value: 1,
        label: '审核成功'
      }, {
        value: 2,
        label: '审核失败'
      }],
      value: '',
      fileData: [

      ],
    }
  },

  created () {

    this.queryInfo()
  },
  methods: {
    queryInfo () {
      console.log(this.value);
      let form = new FormData();
      form.append('state', this.value);
      this.$http({
        url: '/check/select',
        method: "get",
        headers: {
          token: window.sessionStorage.getItem('token'),
          "Content-Type": "multipart/form-data",
        },
        params: {
          state: this.value,
        },
      }).then((res) => {
        // this.fileData = res.data.data;
        console.log(res);
        if (res.data.data.length === 0)
          this.$message('暂无该类型的文件');
        else
          this.$message.success('共查询到' + res.data.data.length + '条记录');


        this.fileData = res.data.data;
        if (this.fileData.checkState === 0)
          this.fileData.checkState = '未审核'
        else if (this.fileData.checkState === 1)
          this.fileData.checkState = '审核成功'
        else if (this.fileData.checkState === 2)
          this.fileData.checkState = '审核失败'



      })
    },
    async deleteFile (id) {
      const confirmresult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).catch(err => {
        return err
      })
      if (confirmresult !== 'confirm') { return this.$message('取消删除') }
      let param = new URLSearchParams();
      param.append('fileId', id);
      this.$http({
        url: '/check/delete',
        method: "delete",
        headers: {
          token: window.sessionStorage.getItem('token'),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: param,
      }).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.queryInfo()
        } else {
          this.$message.error('删除失败');
        }
      }).catch((err) => {
        this.$message.error(err);
      })


    }
  }
}
</script>

<style>
</style>