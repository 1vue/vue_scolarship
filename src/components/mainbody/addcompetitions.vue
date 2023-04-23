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
      <span>竞赛证书/图片上传</span>
      <el-upload
        show-file-list
        action="#"
        list-type="picture-card"
        :auto-upload="false"
      >
        <i
          slot="default"
          class="el-icon-plus"
        ></i>
        <div
          slot="file"
          slot-scope="{file}"
        >
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt=""
          >
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img
          width="100%"
          :src="dialogImageUrl"
          alt=""
        >
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
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
    }
  }
}
</script>

<style>
</style>