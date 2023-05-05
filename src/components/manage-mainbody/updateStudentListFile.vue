<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home2' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生管理</el-breadcrumb-item>
      <el-breadcrumb-item>学生信息上传</el-breadcrumb-item>

    </el-breadcrumb>

    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >

        <span>学生信息上传</span>

      </div>

      <span>学生基本信息上传</span>
      <el-upload
        class="avatar-uploader"
        :action="action"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :http-request="fileUpload"
      >
        <i class="el-icon-plus"></i>
        <div
          slot="tip"
          class="el-upload__tip"
        >支持excel文件导入</div>
      </el-upload>
      <el-divider></el-divider>
      <span>已审核的竞赛信息上传</span>
      <el-upload
        class="avatar-uploader"
        :action="action"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :http-request="fileUpload2"
      >
        <i class="el-icon-plus"></i>
        <div
          slot="tip"
          class="el-upload__tip"
        >支持excel文件导入</div>
      </el-upload>

    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      action: '',
    }
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
      let form = new FormData();
      form.append('file', uploader.file);
      this.$http({
        url: '/manager/import/students',
        method: "post",
        headers: {

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
    fileUpload2 (uploader) {
      let form = new FormData();
      form.append('file', uploader.file);
      this.$http({
        url: '/manager/import/awards',
        method: "post",
        headers: {
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
    }
  }

}
</script>

<style>
</style>