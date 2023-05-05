<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加竞赛成果</el-breadcrumb-item>
      <el-breadcrumb-item>学校认可的竞赛</el-breadcrumb-item>

    </el-breadcrumb>
    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >

        <span>相关竞赛信息</span>

      </div>
      <el-carousel
        :interval="4000"
        type="card"
        height="200px"
      >
        <el-carousel-item
          v-for="item in pic"
          :key="item"
        >

          <img
            style="object-fit: scale-down; width: 100%; height: 100%;"
            :src="item.url"
            alt=""
          >
        </el-carousel-item>
      </el-carousel>

      <div class="competitions">

        <div class="left"><el-card class="box-card leftcard">
            <div
              slot="header"
              class="clearfix"
            >
              <span>近期热门竞赛</span>

            </div>
            <div class="web">
              <a href="http://www.chinaneccs.cn">全国大学生英语竞赛</a>
              <a href="http://www.mcm.edu.cn/">全国大学生数学建模大赛</a>
              <a href="http://dasai.lanqiao.cn/">蓝桥杯</a>
              <a href="https://cy.ncss.org.cn">中国“互联网+”大学生创新创业大赛</a>
              <a href="http://acm.cumt.edu.cn">ACM-ICPC国际大学生程序设计竞赛</a>
              <a href="http://http://www.cmathc.cn">全国大学生数学竞赛</a>
              <a href="http://www.olpk.net/">全国大学生文学作品大赛</a>
              <a href="http://www.nuedcchina.com/">全国大学生电子设计竞赛</a>

            </div>

          </el-card></div>
        <div class="left"><el-card class="box-card leftcard">
            <div
              slot="header"
              class="clearfix"
            >
              <span>相关资料下载</span>

            </div>
            <div class="web">
              <a
                href="https://filesnew.chinaneccs.cn/uploads/files/20220311/1646984185275668.pdf">全国大学生英语竞赛特等奖获奖名单</a>
              <a
                href="https://lanqiao-exam.oss-cn-hangzhou.aliyuncs.com/lq_exam/trade/xinw
                en/xw/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E8%93%9D%E6%A1%A5%E
                6%9D%AF%E5%A4%A7%E8%B5%9B%E7%9C%81%E8%B
                5%9B%E8%BD%AF%E4%BB%B6%E7%B1%BB%E4%B8%AA%E4%BA%BA%E8%B5%9B%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95.zip">蓝桥杯个人赛省赛获奖名单</a>
              <a href="https://cy.ncss.org.cn">中国“互联网+”大学生创新创业大赛获奖名单</a>
              <a href="http://acm.cumt.edu.cn">ACM-ICPC国际大学生程序设计竞赛获奖名单</a>

              <a href="http://www.olpk.net/">全国大学生文学作品大赛获奖名单</a>
              <a href="http://www.nuedcchina.com/">全国大学生电子设计竞赛获奖名单</a>

            </div>
          </el-card></div>
        <div class="left"><el-card class="box-card leftcard">
            <div
              slot="header"
              class="clearfix"
            >
              <span>通知</span>

            </div>
            无
          </el-card></div>

      </div>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pic: [
        { url: require('@/assets/蓝桥杯.webp') },
        { url: require('@/assets/建模.webp') },
        { url: require('@/assets/蓝桥杯.webp') },
        { url: require('@/assets/建模.webp') },

      ]
    }
  }
}
</script>

<style lang="less" scoped>
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   opacity: 0.75;
//   // line-height: 200px;
//   margin: 0;
// }

.el-carousel__item:nth-child(2n) {
  // background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  // background-color: #d3dce6;
}
.competitions {
  display: flex;
}
.left {
  flex: 1;
}
.leftcard {
  height: 400px;
}
.web {
  display: flex;
  flex-direction: column;

  a {
    font-size: 13px;
    text-decoration: none;
    margin-top: 20px;
    color: black;
  }
}
</style>