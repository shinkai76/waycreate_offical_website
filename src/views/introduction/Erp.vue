<template>
    <div id="erp">
        <section>
            <h2>产品介绍</h2>
            <div class="intro-wrap">
                <p>
                    C8ERP，一款是针对商业企业的运营管理系统，可提供集：采购、线下批发零售、电商、仓储、财务、售后、返修、会员等管理为一体的整体运营管理解决方案；帮助企业优化业务审批流程、规范财务核算体系，降低人员操作成本，提升企业整体运营效率和综合竞争力。</p>
                <p><strong>适用行业：3C数码、安防监控、服装鞋帽、汽车用品、日用百货等</strong></p>
                <div class="features_block show">
                    <ul>
                        <li :class="item.className" v-for="item in introList" :key="item.id">
                            <span class="circle"></span>
                            <a href="#" class="circle_link">&nbsp;</a>
                            <h4><span>{{ item.title }}</span></h4>
                            <p id="a">{{ item.text }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section style="background-color: #599bd5;">
            <div class="container">
                <div class="left animated">
                    <img src="../../assets/images/erp_01.png" alt="权限管理与协同工作流" style="width: 450px;
    height: auto;margin-top: 50px">
                </div>
                <div class="right white animated">
                    <h3>权限管理与协同工作流</h3>
                    <ul>
                        <li>严谨的权限管理，明确定义各岗位的业务操作和数据查询范围</li>
                        <li>用户菜单按权限显示，职责明确、信息安全</li>
                        <li>支持所有单据工作流和审核规则的自定义，业务执行更规范，审核工作更高效</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="left">
                    <h3>电商订单处理，方便快捷</h3>
                    <ul>
                        <li>支持系统自动化订单导入、批量改单、一键代发，减少人工操作</li>
                        <li>支持促销规则定制，自动添加活动赠品</li>
                        <li>支持缺货订单限制审核，优化仓库发货流程</li>
                        <li>支持异常订单系统自动（如退款）锁定和人工锁定，优化沟通效率，防止货物损失</li>

                    </ul>
                </div>
                <div class="right">
                    <img src="../../assets/images/erp_02.png" alt="">
                </div>
            </div>
        </section>
        <section style="background-color: #9bc0ec;">
            <div class="container">
                <div class="left">
                    <img src="../../assets/images/erp_03.jpg" alt="">
                </div>
                <div class="right white">
                    <h3>智能仓储作业，高效准确</h3>
                    <ul>
                        <li>支持智能波次，手持PDA分拣验货和扫码（SN），操作准确高效</li>
                        <li>支持异地分仓、货位管理、序列号管理，仓内管理更加规范有效</li>
                        <li>支持先拣后分和边拣边分模式，发货流程更灵活</li>
                        <li>支持电子面单后置打印，打包操作流水线作业，视频录像，包裹称重校验，自动运费计算</li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="left">
                    <h3>供应链管理，全面严谨</h3>
                    <ul>
                        <li>支持按合作伙伴、产品线单独设定信用额度和信用期限</li>
                        <li>支持超期超额业务自动拦截并提交审核</li>
                        <li>支持往来款项按单对账、按单核销，账目清楚直观</li>
                        <li>支持多维度统计分析销售数据、采购数据和往来数据，为经营决策提供有力支持</li>
                    </ul>
                </div>
                <div class="right">
                    <img src="../../assets/images/erp_04.jpg" alt="">
                </div>
            </div>
        </section>
        <section style="background-color: #3873a9;">
            <div class="container">
                <div class="left">
                    <img src="../../assets/images/erp_05.png" alt="">
                </div>
                <div class="right white">
                    <h3>财务核算专业</h3>
                    <ul>
                        <li>支持规范的会计核算方法，出具标准的财务报表（资产负债表、利润表、总分类账等）</li>
                        <li>支持分部门单独核算，按部门出具独立的财务报表，适合集团化组织结构</li>
                        <li>支持按部门、员工、项目等维度统计销售、费用情况，全面掌握企业经营情况</li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <h2>功能模块</h2>
            <div class="func-wrap">
                <div class="circular large"></div>
                <div class="circular medium"></div>
                <div class="circular small"></div>
                <div class="boxes">
                    <div class="box" v-for="box in boxesList" :key="box.id">
                        <div class="img-box">
                            <svg-icon class="box-icon" :icon-class="box.title"></svg-icon>
                        </div>
                        <span>{{ box.title }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Erp",
        metaInfo: {
            title: '威创|C8ERP',
            meta: [
                {
                    name: 'keywords',
                    content: '进销存, erp, 威创, c8'
                },
                {
                    name: 'description',
                    content: 'C8ERP，一款是针对商业企业的运营管理系统，可提供采购、线下批发零售、电商、仓储、财务、售后、返修、会员等管理为一体的整体运营管理解决方案。'
                }
            ]
        },
        data() {
            return {
                introList: [
                    {
                        id: 0,
                        className: 'c1',
                        title: '设计理念',
                        text: '即刻、极简'
                    },
                    {
                        id: 1,
                        className: 'c2',
                        title: '产品目标',
                        text: '智慧、敏捷、稳定'
                    },
                    {
                        id: 2,
                        className: 'c3',
                        title: '产品精神',
                        text: '卓越品质源于专业精神'
                    },
                    {
                        id: 3,
                        className: 'c4',
                        title: '产品特性',
                        text: '云服务、跨平台、互联互通、开放性、专业性'
                    }
                ],
                boxesList: [
                    { // large
                        id: 0,
                        title: '系统管理'
                    },
                    {
                        id: 1,
                        title: '电商助手'
                    },
                    {
                        id: 2,
                        title: '第三方插件'
                    },
                    {
                        id: 3,
                        title: '报表中心'
                    },
                    {
                        id: 4,
                        title: '零售管理'
                    },
                    {
                        id: 5,
                        title: '会员管理'
                    },
                    { // medium
                        id: 6,
                        title: '财务管理'
                    },
                    { // medium
                        id: 7,
                        title: '采购管理'
                    },
                    { // medium
                        id: 8,
                        title: '工作台'
                    },
                    { // medium
                        id: 9,
                        title: '销售管理'
                    },
                    { // medium
                        id: 10,
                        title: '库存管理'
                    },
                    { // small
                        id: 11,
                        title: '基础资料'
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    @import '../../assets/circle.less';

    #erp {
        h2 {
            text-align: center;
        }

        .intro-wrap {
            max-width: 960px;
            width: 80%;
            margin: 0 auto;

            & > p {
                text-indent: 2em;
                max-width: 900px;
                width: 90%;
                margin: 0 auto;
                line-height: 1.8;
            }
        }

        section {
            min-height: 340px;

            h2 {
                margin-bottom: 30px;
            }

            .white {
                color: #fff;
            }

            .container {
                max-width: 1100px;
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                box-sizing: border-box;

                h3 {
                    text-align: center;
                    margin-bottom: 20px;
                    margin-top: 90px;
                    font-size: 26px;
                }

                li {
                    list-style: circle;
                    margin: 5px 0;
                }

                .right {
                    padding-left: 50px;
                }

                img {
                    height: 300px;
                }

            }

            .func-wrap {
                margin: -100px auto 0 auto;
                position: relative;
                @size: 800px;
                width: @size;
                height: @size;

                .boxes {
                    cursor: default;

                    .box {
                        width: 8%;
                        height: 8%;
                        position: absolute;
                        left: 50%;
                        top: 50%;

                        span {
                            display: block;
                            width: 110%;
                            text-align: center;
                            font-size: 14px;
                            position: absolute;
                        }

                        .img-box {
                            overflow: hidden;
                            border-radius: 50%;
                            width: 100%;
                            height: 100%;
                            @blue: #789ec3;

                            .box-icon {
                                width: 70%;
                                height: 68%;
                                color: #fff;
                                background-color: @blue;
                                border: 10px solid @blue;
                            }
                        }
                    }

                    & > div:nth-child(1) {
                        margin: -1% 0 0 -34%;
                    }

                    & > div:nth-child(2) {
                        margin: 4% 0 0 25%;
                    }

                    & > div:nth-child(3) {
                        margin: -30% 0 0 -20%;
                    }

                    & > div:nth-child(4) {
                        margin: -31% 0 0 7%;
                    }

                    & > div:nth-child(5) {
                        margin: 24% 0 0 8%;
                    }

                    & > div:nth-child(6) {
                        margin: 25% 0 0 -11%;
                    }

                    & > div:nth-child(7) { // medium
                        margin: 8% 0 0 -18%;
                    }

                    & > div:nth-child(8) { // medium
                        margin: -11% 0 0 -21%;
                    }

                    & > div:nth-child(9) { // medium
                        margin: -22% 0 0 -1%;
                    }

                    & > div:nth-child(10) { // medium
                        margin: -9% 0 0 14%;
                    }

                    & > div:nth-child(11) { // medium
                        margin: 9% 0 0 9%;
                    }

                    & > div:nth-child(12) { // small
                        margin: -4% 0 0 -4%;
                    }
                }

                .circular {
                    position: absolute;
                    border: 1px solid #bbb;
                    border-radius: 50%;
                    left: 50%;
                    top: 50%;

                    &.large {
                        .circulars(60%)
                    }

                    &.medium {
                        .circulars(37%)
                    }

                    &.small {
                        .circulars(15%)
                    }

                    .circulars(@d) {
                        width: @d;
                        height: @d;
                        margin-left: -@d/2;
                        margin-top: -@d/2;
                    }
                }
            }
        }

    }

</style>
