<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加竞赛成果</el-breadcrumb-item>
      <el-breadcrumb-item>添加竞赛</el-breadcrumb-item>

    </el-breadcrumb>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >

        <span>添加竞赛</span>

      </div>

      <div class="form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="竞赛名称"
            prop="name"
            style="width: 50%;"
          >
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入竞赛名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="竞赛级别"
            prop="competitionRank"
          >
            <el-select
              v-model="ruleForm.competitionRank"
              placeholder="请选择竞赛级别"
            >
              <el-option
                label="校赛"
                value="校赛"
              ></el-option>
              <el-option
                label="省赛"
                value="省赛"
              ></el-option>
              <el-option
                label="国赛"
                value="国赛"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="获奖名次"
            prop="rank"
          >
            <el-select
              v-model="ruleForm.rank"
              placeholder="请选择获奖名次"
            >
              <el-option
                label="特等奖"
                value="special"
              ></el-option>
              <el-option
                label="一等奖"
                value="first"
              ></el-option>
              <el-option
                label="二等奖"
                value="second"
              ></el-option>
              <el-option
                label="三等奖"
                value="third"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="竞赛时间"
            required
          >
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                ></el-date-picker>
              </el-form-item>
            </el-col>

          </el-form-item>
        </el-form>
      </div>

      <span>竞赛证书/图片上传</span>

      <el-upload
        action="action"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :http-request="fileUpload"
      >
        <i class="el-icon-plus"></i>

      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img
          width="100%"
          :src="dialogImageUrl"
          alt=""
        >

      </el-dialog>

      <el-button
        style="margin-top: 10px;"
        type="primary"
        @click="submit"
      >提交</el-button>
      <!-- <el-upload
        class="avatar-uploader"
        :action="action"
        :http-request="fileUpload"
      >
        
      </el-upload> -->

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      ruleForm: {
        name: '',
        competitionRank: '',
        rank: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        action: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入竞赛名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        competitionRank: [
          { required: true, message: '请选择竞赛级别', trigger: 'change' }
        ],
        rank: [
          { required: true, message: '请选择获奖名次', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],

        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleRemove (file) {
      console.log(file);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload (file) {
      console.log(file);
    },
    fileUpload (uploader) {
      console.log(uploader);
      let form = new FormData();
      form.append('file', uploader.file);
      form.append('fileName', uploader.file.name)
      form.append('fileType', uploader.file.type)
      this.$http({
        url: '/check/update',
        method: "post",
        headers: {
          token: window.sessionStorage.getItem('token'),
          "Content-Type": "multipart/form-data",
        },
        data: form,
        onUploadProgress: progressEvent => {//这一步是展示上传的进度条，不展示也行，根据自身需求决定
          let percent = (progressEvent.loaded / progressEvent.total * 100) | 0
          uploader.onProgress({ percent: percent });//调用uploader的进度回调
        }
      }).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.$message({
            message: "上传成功",
            type: "success",
          });
        } else {
          this.$message.error('上传失败');
        }
      }).catch((err) => {
        this.$message.error(err);
      })
    },
    submit () {
      this.$message.success('提交成功')
      this.$refs.ruleForm.resetFields();
    }
  }
}
</script>

<style lang="less" scope="scoped">
</style>