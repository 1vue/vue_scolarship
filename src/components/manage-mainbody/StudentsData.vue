<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home2' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生管理</el-breadcrumb-item>
      <el-breadcrumb-item>学生信息</el-breadcrumb-item>

    </el-breadcrumb>
    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >

        <span>学生信息</span>

      </div>

      <el-row :gutter="30">
        <el-col :span="7">
          <el-input
            placeholder="请输入学生姓名或id"
            v-model="input"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="find"
            ></el-button>
          </el-input></el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="dialogVisible=true"
          >添加学生</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="studentList"
        border
        stripe
      >

        <!-- <el-table-column
          label="id"
          prop="id"
        ></el-table-column> -->
        <el-table-column
          label="姓名"
          prop="name"
        ></el-table-column>
        <el-table-column
          label="性别"
          prop="sex"
        ></el-table-column>
        <el-table-column
          label="学号"
          prop="number"
        ></el-table-column>
        <!-- <el-table-column
          label="密码"
          prop="password"
        ></el-table-column> -->
        <el-table-column
          label="学院"
          prop="college"
        ></el-table-column>
        <el-table-column
          label="绩点"
          prop="grade"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">

            <el-tooltip
              class="item"
              effect="dark"
              content="删除学生"
              placement="top-start"
              :enterable="false"
            >
              <el-button
                type="danger"
                size="small"
                icon="el-icon-delete"
                @click="deleteStudent(scope.row.id)"
              ></el-button>
            </el-tooltip>

          </template>

        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination> -->

    </el-card>

    <el-dialog
      title="添加学生"
      :visible.sync="dialogVisible"
      width="50%"
      @close="dialogVisibleClose"
    >
      <el-form
        :model="addStudent"
        :rules="addStudentRule"
        ref="addStudentRef"
        label-width="100px"
      >
        <el-form-item
          label="姓名"
          prop="name"
        >
          <el-input v-model="addStudent.name"></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          prop="sex"
        >
          <el-input v-model="addStudent.sex"></el-input>
        </el-form-item>
        <el-form-item
          label="学号"
          prop="number"
        >
          <el-input v-model="addStudent.number"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="addStudent.password"></el-input>
        </el-form-item>
        <el-form-item
          label="学院"
          prop="college"
        >
          <el-input v-model="addStudent.college"></el-input>
        </el-form-item>
        <el-form-item
          label="绩点"
          prop="grade"
        >
          <el-input v-model="addStudent.grade"></el-input>
        </el-form-item>

      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="add"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      studentList: [],
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2,
      },
      total: 70,
      dialogVisible: false,
      addStudent: {
        name: '',
        sex: '',
        number: '',
        password: '',
        college: '',
        grade: null,
      },
      addStudentRule: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请输入性别', trigger: 'blur' },

        ],
        number: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { min: 10, max: 15, message: '长度在 10 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        college: [
          { required: true, message: '请输入学院', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        grade: [
          { required: true, message: '请输入绩点', trigger: 'blur' },
          { min: 1, max: 7, message: '长度在 1 到 7 个字符', trigger: 'blur' }
        ],
      },
    }
  },

  created () {
    this.getStudentList();

  },
  methods: {
    async getStudentList () {
      const { data: res } = await this.$http.get('/manager/query/student')
      this.studentList = res.data;
      console.log(res.data);
    },

    handleSizeChange (newsize) {
      console.log(newsize);
      this.queryInfo.pagesize = newsize;
      this.getStudentList();
    },
    handleCurrentChange (newpage) {
      console.log(newpage);
      this.getStudentList();
    },
    dialogVisibleClose () {
      this.$refs.addStudentRef.resetFields()
    },
    // 点击添加学生
    add () {
      this.$refs.addStudentRef.validate(async valid => {
        console.log(valid);
        if (!valid) return
        const res = await this.$http.post('/manager/import/one', this.addStudent).catch((err) => {
          this.message.err('添加失败，请检查填写信息是否正确');
        })



        this.$message.success('添加成功');
        this.getStudentList();
        this.dialogVisible = false;
        console.log(res);

      })

    },
    async deleteStudent (id) {
      const confirmresult = await this.$confirm('此操作将永久删除该学生, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).catch(err => {
        return err
      })
      // .then(() => {
      //   this.$message({
      //     type: 'success',
      //     message: '删除成功!'
      //   });
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   });
      // });
      console.log(confirmresult);
      if (confirmresult !== 'confirm') { return this.$message('取消删除') }

      //post请求用 params传id
      const result = await this.$http.delete('/manager/delete/one', {
        params: {
          id: id
        }
      })

      console.log(result);
      this.$message.success('删除成功')
      this.getStudentList();

    },
    async find () {
      console.log(this.input);
      const { data: res } = await this.$http.get('/manager/query/student',
        {
          params: {
            name: this.input
          }
        }
      )
      console.log(res);
      this.studentList = res.data;
      this.$message.success('查询成功，共查询到' + this.studentList.length + '条数据');
    },


  },

}
</script>

<style>
</style>