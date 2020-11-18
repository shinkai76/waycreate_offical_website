<template>
    <div id="footer">
        <img id="wx" src="../assets/images/weixin.jpg" alt="wx">
        <div class="show">
            <div class="up">
                <div class="list-wrap">
                    <div v-for="item in list" class="single">
                        <h4>{{ item.title }}</h4>
                        <ul>
                            <li v-for="item2 in item.children" @click="toPage(item2.routeName)">{{ item2.text }}</li>
                        </ul>
                    </div>
                    <div class="single">
                        <h4>联系我们</h4>
                        <ul>
                            <li><i class="el-icon-s-custom"></i>客服电话：</li>
                            <li>0571-81060914</li>
                            <li>0571-89936495</li>
                            <li><i class="el-icon-s-custom"></i>销售电话: </li>
                            <li>0571-87759541</li>
                            <li>售后QQ：</li>
                            <li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=800183905&site=qq&menu=yes">800183905</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="down">
                <h5>友情链接</h5>
                <div class="pro-wrap">
                    <ul class="pro" v-for="item in proList">
                        <li @click="toLink(item.href)">{{ item.text }}</li>
                    </ul>
                </div>
            </div>

            <div class="rights">
                <p>杭州威创软件有限公司 ALL Rights Reserved.
                  <a href="http://www.beian.miit.gov.cn">浙ICP备11046665号-4</a>&nbsp;
                    <a target="_blank" rel="nofollow"
                       href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602005585">
                        <img src="../icons/ba.png" />浙公网安备 33010602005585</a>
                </p>
            </div>
        </div>
        <el-collapse v-model="activeNames" class="hide">
            <el-collapse-item title="公司介绍" name="1">
                <div @click="$router.push('about')">企业文化</div>
            </el-collapse-item>
            <el-collapse-item title="产品介绍" name="2">
                <div @click="$router.push('/introduction/erp')">C8ERP</div>
            </el-collapse-item>
            <el-collapse-item title="增值服务" name="3">
                <div>电子发票</div>
                <div>PDA手持</div>
            </el-collapse-item>
            <el-collapse-item title="联系我们" name="5">
                <div>电话：0571-81060914 0571-89936495</div>
                <div>QQ：800183905</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        data() {
            return {
                activeNames: '',
                list: [
                    {
                        title: '关于我们',
                        children: [
                            {
                                text: '公司简介',
                                routeName: 'about'
                            }
                        ]
                    },
                    {
                        title: '产品介绍',
                        children: [
                            {
                                text: 'C8ERP',
                                routeName: 'erp'
                            }
                        ]
                    },
                    {
                        title: '增值服务',
                        children: [
                            {
                                text: '电子发票'
                            },
                            {
                                text: 'pda手持'
                            }
                        ]
                    },
                    {
                        title: '合作联系',
                        children: [
                            {
                                text: '代理加盟'
                            },
                            {
                                text: '仓储联盟'
                            }
                        ]
                    },
                    {
                        title: '客户案例',
                        children: [
                            {
                                text: '品牌客户'
                            }
                        ]
                    }
                ],
                proList: [
                    {
                        text: '中仓供应链',
                        href: 'http://www.zcscsp.com'
                    },
                    {
                        text: '数据贷',
                        href: 'http://www.sjdbank.com'
                    },
                    {
                        text: '亿店宝',
                        href: 'http://www.8844it.com'
                    },
                    {
                        text: '易仓储',
                        href: 'http://www.ecc360.cn'
                    }
                ]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            },
            toPage(name) {
                this.$router.push({ name })
            },
            toLink(href) {
                window.open(href)
            }
        }

    }
</script>

<style scoped lang="less">
    #footer {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        height: 420px;
        padding: 40px 0 20px 0;
        background-color: #181828;
        border-top: 1px solid #313646;

        #wx {
            position: absolute;
            top: 40px;
            left: 13%;
            width: 100px;
        }

        .contact, .contact a {
            text-align: center;
            color: #576079;
        }

        .up {
            .list-wrap {
                margin: 0 auto;
                color: #576079;
                width: 58%;
                max-width: 1000px;
                display: flex;
                justify-content: space-around;

                .single {
                    margin: 0 10px;
                    min-width: 120px;

                    li {
                        cursor: pointer;
                        transition: all ease .2s;

                        &:hover {
                            color: #d3dce6;
                        }
                    }

                    &:last-child {
                        li {
                            width: 140px;

                            a {
                                color: #576079;
                            }
                        }
                    }
                }
            }
        }

        .down {
            margin: 42px 0 10px 0;

            h5 {
                text-align: center;
                margin-bottom: 10px;
                color: #a6aaaf;
                font-size: 14px;
                letter-spacing: 2px;
            }

            .pro-wrap {
                width: 400px;
                margin: 10px auto 0 auto;
                overflow: hidden;
                display: flex;
                justify-content: space-around;
                color: #a6aaaf;
                text-align: center;

                .pro {
                    width: 25%;
                    cursor: pointer;
                    transition: all ease .2s;

                    &:hover {
                        color: #d3dce6;
                    }
                }
            }
        }

        .rights {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 20px;
            color: #778899;
            background-color: #000;
            line-height: 20px;
            padding: 5px 0;
            text-align: center;

            a {
                color: #778899;
            }

            p {
                font-size: 14px;
            }
        }
    }

    @media screen and (max-width: 1070px) {
        #footer {
            background-color: #fff;
            border-top: none;
            height: auto;
            padding: 0;
        }

        .el-collapse-item__header {
            padding-left: 20px;
        }
    }
</style>
