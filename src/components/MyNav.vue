<template>
    <div id="nav">
        <div :class="['parent-nav', {'scrolled-nav':isScrolled}]">
            <div class="logo-wrap"
                 @click="$router.replace('/')">
                <img src="../assets/images/C8ERPlogo.png" alt="C8ERP">
            </div>

            <ul class="navs-wrap">
                <li v-for="(item, index) in nav"
                    @mouseenter="curIndex = index"
                    @mouseleave="curIndex = -1"
                    @click.stop="navClicked(item)">{{ item.text }}
                    <!--                    只有服务中心有下拉-->
                    <div v-if="item.hasChildren && curIndex === index" class="child-wrap">
                        <ul>
                            <li><a href="https://www.yuque.com/c8erp/help" target="_blank">操作文档</a></li>
                            <li @click.stop="toVideo()"><a href="#">视频演示</a></li>
                        </ul>
                    </div>
                </li>

                <li class="login" @click="onLogin()">
                    <i class="el-icon-user"></i>&nbsp;登录
                </li>
            </ul>
        </div>
        <ApplyForm :dialogVisible.sync="dialogVisible"></ApplyForm>
    </div>
</template>

<script>
    import ApplyForm from "./ApplyForm"
    export default {
        name: "MyNav",
        components: { ApplyForm },
        data() {
            return {
                curIndex: -1, // 鼠标位于哪一个标签
                isScrolled: false, // 子导航页
                dialogVisible: false, // 申请试用
                nav: [
                    {
                        text: '首页',
                        routeName: 'home' // 路由name
                    }, {
                        text: '产品介绍',
                        routeName: 'introduction'
                    }, {
                        text: '解决方案',
                        routeName: 'solution'
                    }, {
                        text: '服务中心',
                        hasChildren: true
                    }, {
                        text: '申请试用',
                        isApply: true
                    }, {
                        text: '关于我们',
                        routeName: 'about'
                    }]
            }
        },
        mounted() {
            // 监听滚动条位置，设置#nav的背景色
            document.addEventListener('scroll', this.$store.commit('GET_SCROLL'), true)
        },
        watch: {
            '$store.state.isScrolled': function (cur) {
                this.isScrolled = cur
            }
        },
        methods: {
            toVideo() {
                // $router.push('video')
                this.$message('敬请期待');
            },
            navClicked(item) {
                if ( item.isApply ) {
                    this.dialogVisible = true
                    return
                }
                let name = item.routeName
                this.$router.push({ name })
            },
            onLogin() {
                this.$store.commit('TRIGGER_LOGIN', true)
            }
        }

    }
</script>

<style scoped lang="less">

    #nav {
        height: 60px;
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0,0,0, .3);

        .scrolled-nav {
            background-color: rgba(0, 0, 0, .9);

        }

        .parent-nav {
            top: 0;
            left: 0;
            height: 60px;
            width: 100%;
            z-index: 5000;
            position: absolute;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #fff;

            .logo-wrap {
                margin-left: 5%;
                height: 100%;

                img {
                    margin-top: 14px;
                    height: 32px;
                    cursor: pointer;
                }
            }

            .navs-wrap {
                cursor: pointer;
                margin-left: 2%;
                height: 60px;
                width: 100%;
                line-height: 60px;

                .login, .hamburger {
                    float: right;
                }

                .hamburger {
                    font-size: 30px;
                }

                & > li {
                    float: left;
                    padding: 0 20px;
                    transition: all ease .3s;
                    position: relative;

                    &:hover {
                        font-weight: bold;
                        color: #1C97CA;
                    }

                    .child-wrap {
                        top: 60px;
                        left: -6px;
                        line-height: 26px;
                        width: 120px;
                        position: absolute;
                        z-index: 1000;
                        cursor: default;
                        background: #333;
                        border: 1px solid rgba(0, 0, 0, 0.15);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
                        border-radius: 4px;

                        &:before {
                            content: "";
                            position: absolute;
                            top: -10px;
                            left: 45px;
                            width: 0;
                            height: 0;
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-bottom: 10px solid #333;
                        }

                        li {
                            border-radius: 4px;

                            &:hover {
                                background: #bbbbbb;
                            }
                        }

                        a {
                            display: inline-block;
                            width: 100%;
                            padding: 10px 20px;
                            line-height: 20px;
                            color: #fff;
                            text-transform: uppercase;
                            text-decoration: none;
                        }

                    }
                }
            }
        }
    }

    @media screen and (max-width: 1070px) {
        .logo-wrap {
            height: 100%;
            width: auto;

            img {
                height: 100%;
            }
        }
    }
</style>
