<template>
    <div id="about">
        <div id="banner"></div>
        <div id="content">
            <div>
                <h3><i class="el-icon-medal"></i>&nbsp;关于威创</h3>
                <article class="article">
                    <p><b>探索永无止境，坚持成就未来！</b></p>
                    <p>威创软件成立于2003年，是一家专注于为商业企业提供信息化管理整体解决方案的软件企业。 秉承“卓越品质源自专业精神”的产品精 神，威创人多年来始终致力于国内商业企业管理软件的产品研发和技术服务。先后推出了C3、C8等系列的企业管理软件产品，帮助企业完善 管理、降低成本，提升效率，为企业持续健康发展助力。目前，我们已累计服务全国各地的企业超5000家，获得用户的广泛认可！</p>
                    <p>2015年，我们运用互联网前沿技术，并结合威创十多年的行业经验和沉淀，推出了SaaS软件产品——C8ERP，开启了威创企业发展的新征 程；C8ERP是以SaaS服务的方式，为企业提供集供应链、电商、零售、仓储、财务等一体化管理解决方案的云ERP，适用于3C数码、安防监控 、服装鞋帽、日用百货、汽车用品等多个行业的商业企业。以“成为国内专业、一流的企业管理云服务供应商”为愿景，威创将致力于运用 互联网技术与服务为广大商业企业的发展成长贡献我们的智慧和力量。</p>
                </article>
            </div>
            <div>
                <h3><i class="el-icon-phone"></i>&nbsp;客户服务</h3>
                <div>C3ERP
                  <ul style="margin-top: 10px;">
                    <li>客服电话: 0571-87759541  0571-87759768</li>
                    <li>售后 QQ：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=800183501&site=qq&menu=yes">800183501</a></li>
                  </ul>
                </div>
                <div style="margin-top: 20px;">C8ERP
                  <ul style="margin-top: 10px;">
                    <li>客服电话: 0571-81060914  0571-89936495</li>
                    <li>售后 QQ：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=800183905&site=qq&menu=yes">800183905</a></li>
                    <li>销售电话: 0571-87759541</li>
                  </ul>
                </div>
            </div>
            <div>
                <h3><i class="el-icon-office-building"></i>&nbsp;公司地址</h3>
                <p class="article">公司地址：浙江省杭州市西湖区文二路207号文欣大厦8楼</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "About",
        metaInfo: {
            title: '威创|关于我们',
            meta: [
                {
                    name: 'keywords',
                    content: '杭州威创，进销存，C8erp，SaaS'
                },
                {
                    name: 'description',
                    content: '威创软件成立于2003年，是一家专注于商贸企业信息化管理整体解决方案的软件企业。'
                }
            ]
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">

    #content {
        width: 80%;
        max-width: 1100px;
        margin: 60px auto 0 auto;
        padding-bottom: 60px;

        h3 {
            margin: 20px 0 25px 0;
        }

        .article {
            line-height: 1.8;
            background-color: #fff;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #f1f1f1;
            p {
                text-indent: 2em;
            }
        }

        img {
            display: block;
            margin: 0 auto;
            width: 60%;
            max-width: 700px;
        }
    }
</style>
