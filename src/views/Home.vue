<template>
    <div id="home">
        <div class="banners-wrap">
            <el-carousel indicator-position="inside" height="600px">
                <el-carousel-item v-for="item in srcList" :key="item.src">
                    <img :src="item.src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <section>
            <h2>我们的产品 </h2>
            <div class="img-wrap">
                <img src="../assets/images/home_page_1_fallback.png" alt="产品展示">
            </div>
            <div class="intro">
                <h4>C8ERP</h4>
                <p>
                    C8ERP，一款是针对商业企业的运营管理系统，可提供集：采购、线下批发零售、电商、仓储、财务、售后、返修、会员等管理为一体的整体运营管理解决方案；
                    帮助企业优化业务审批流程、规范财务核算体系，降低人员操作成本，提升企业整体运营效率和综合竞争力。
                </p>
            </div>
        </section>
        <section id="glys">
            <h2>我们的优势</h2>
            <div class="strength-wrap">
                <transition-group enter-active-class="fadeInUp">
                    <div class="strength animated"
                         v-for="item in strengthList"
                         v-show="isGlys"
                         :key="item.id">
                        <div class="strength-up">
                            <h5 class="title">{{ item.title }}</h5>
                            <svg-icon
                                    class="svg"
                                    :icon-class="item.icon"
                                    :key="item.id">

                            </svg-icon>
                        </div>
                        <span class="strength-down">
                        {{ item.text }}
                    </span>

                    </div>
                </transition-group>
            </div>
        </section>
        <section id="jjfa">
            <h2>核心解决方案</h2>
            <div class="plan-wrap">
                <div class="plan"
                     v-for="(item, index) in planList"
                     @click="toSolution(index)"
                     :key="item.title">
                    <div class="plan-left">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="plan-right tri_left">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="hzhb" class="show">
            <h2>合作伙伴</h2>
            <div class="indexmaindiv" id="indexmaindiv">
                <div class="indexmaindiv1 clearfix">
                    <div class="stylesgoleft" id="goleft"></div>
                    <div class="maindiv1 " id="maindiv1">
                        <ul id="count1">
                            <li v-for="item in partnerList" :key="item.id" class="_li">
                                <div class="playerdetail">
                                    <div class="detailimg">
                                        <img alt="合作伙伴" :src="item.src" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="stylesgoright" id="goright"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                isGlys: false,
                srcList: [
                    {
                        src: require('../assets/images/home_banner_01.jpg')
                    },
                    {
                        src: require('../assets/images/home_banner_02.jpg')
                    },
                    {
                        src: require('../assets/images/home_banner_03.jpg')
                    }
                ],
                strengthList: [
                    {
                        id: 0,
                        title: '云服务',
                        icon: 'home_strength_01',
                        text: '采用SaaS模式的云ERP，专业的售后运维体系保障系统安全、稳定、高效运行，真正做到易部署、轻交付、零维护，让用户省时、省钱、省心！'
                    },
                    {
                        id: 1,
                        title: '一体化',
                        icon: 'home_strength_02',
                        text: '针对企业线下批发、电商、零售等多渠道销售模式，业务管理和财务核算并重的管理诉求，提供整体解决方案，一套系统解决线上线下、业务财务等管理需求。有效降低系统建设成本、人员操作成本和管理沟通成本。'
                    },
                    {
                        id: 2,
                        title: '专业',
                        icon: 'home_strength_03',
                        text: '专注商业企业信息化管理十五年，5000+用户的成功实施经验分享，对行业经营特性的深刻理解和把握，方案更专业，服务更贴心！'
                    },
                    {
                        id: 3,
                        title: '开放',
                        icon: 'home_strength_04',
                        text: '可开放API接口，有效支持企业的二次开发及第三方系统的深度集成，优化企业内部信息交互，降低系统建设成本和风险，帮助企业打造专属的管理平台。'
                    }
                ],
                planList: [
                    {
                        title: '智能工作协同',
                        src: require('../assets/images/home_solution_01.jpg'),
                        text: 'C8ERP为企业提供了强大的协同工作解决方案，全面支持各类业务单据的流程、审核规则自定义，从而让业务数据在各职能部门和人员之间高效流转，配合智能审批规则和消息通知，实现业务管理的规范化、无纸化、实时化！'
                    },
                    {
                        title: '电商管理',
                        src: require('../assets/images/home_solution_02.jpg'),
                        text: '针对电商业务，C8ERP可提供从平台订单同步，到客审、财审，再到仓库发货，账单收款及售后的专业解决方案。同时与线下供应链、仓储和财务核算有效整合，实现一体化管理。有效避免IT系统的重复投入、提高工作效率。'
                    },
                    {
                        title: '传统供应链',
                        src: require('../assets/images/home_solution_03.jpg'),
                        text: '商业企业的主要业务内容在采购、销售和库存环节；因此，C8ERP针对企业日常的进销存业务提供了一整套管理方案，涉及：合作伙伴管理、进销存业务协同、用户权限管理、往来管理和数据分析。'
                    },
                    {
                        title: '财务一体化',
                        src: require('../assets/images/home_solution_04.jpg'),
                        text: 'C8ERP力求以现代商业企业的整体管理视角，为企业提供一套完整的“业务+财务”的一体化管理解决方案。满足企业业务部门“全面、精细、灵活”的业务需要，又为财务部门提供了“规范、严谨、标准”的会计核算功能。'
                    }
                ],
                partnerList: [
                    {
                        id: 0,
                        src: require('../assets/images/partner_01.jpg')
                    },
                    {
                        id: 1,
                        src: require('../assets/images/partner_02.jpg')
                    },
                    {
                        id: 2,
                        src: require('../assets/images/partner_03.jpg')
                    },
                    {
                        id: 3,
                        src: require('../assets/images/partner_04.jpg')
                    },
                    {
                        id: 4,
                        src: require('../assets/images/partner_05.jpg')
                    },
                    {
                        id: 5,
                        src: require('../assets/images/partner_06.jpg')
                    },
                    {
                        id: 6,
                        src: require('../assets/images/partner_07.jpg')
                    },
                    {
                        id: 7,
                        src: require('../assets/images/partner_08.jpg')
                    },
                    {
                        id: 8,
                        src: require('../assets/images/partner_09.jpg')
                    }
                ]
            }
        },
        mounted() {
            window.addEventListener("scroll", this.showEl, true);
        },
        beforeRouteLeave(to, from, next) {
            window.removeEventListener('scroll', this.showEl, true);
            next()
        },
        metaInfo: {
            title: '威创|HOME',
            meta: [
                {
                    name: 'keywords',
                    content: '杭州威创，进销存，C8erp，wms，易仓储，仓储，SaaS'
                },
                {
                    name: 'description',
                    content: 'C8ERP，一款是针对商业企业的运营管理系统，可提供采购、线下批发零售、电商、仓储、财务、售后、返修、会员等管理为一体的整体运营管理解决方案。'
                }
            ]
        },
        watch: {
            '$store.state.anchorName': {
                handler(cur, old) {
                    this.$nextTick(() => {
                        this.goAnchor(cur)
                    })
                }
            }
        },
        methods: {
            toSolution(index) {
                this.$router.push({
                    name: 'solution',
                    query: {
                        tabIndex: index + 1 // 要激活的tab页
                    }
                })
            },
            showEl() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                const Height = document.documentElement.clientHeight || document.body.clientHeight
                let glys = document.getElementById('glys').offsetTop + 150
                if ( !this.isGlys )
                    this.isGlys = ( glys - scrollTop ) <= Height
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/partners.css";

    h2, h4 {
        text-align: center;
    }

    section {

        & > h2 {
            margin-bottom: 40px;
            position: relative;
            padding-bottom: .8em;
            letter-spacing: 4px;
            line-height: 1.1;
            font-size: 34px;

            &:before, &:after {
                position: absolute;
                background: #1c97ca;
                height: 2px;
                content: '';
            }

            &:before {
                width: 11%;
                bottom: 8%;
                left: 44.5%;
            }

            &:after {
                width: 18%;
                right: 41%;
                bottom: 0%;
            }
        }
    }

    #glys {
        h2 {
            color: #fff;
        }

        background: url(../assets/images/home_bg_01.jpg) 0 0 no-repeat;
        -moz-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .intro {
        max-width: 600px;
        width: 85%;
        margin: 0 auto;

        p {
            text-indent: 2em;
            line-height: 1.8;
        }
    }
    .banners-wrap img{
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -960px;
        top: 0;
    }
    .img-wrap {
        width: 50%;
        max-width: 650px;
        margin: 0 auto;

        img {
            width: 100%;
            height: auto;
        }
    }

    .strength-wrap {
        width: 1100px;
        margin: 0 auto;

        span {
            display: flex;
            justify-content: space-around;
        }

        .strength {
            border-radius: 10px;
            border: 1px solid #f1f1f1;
            width: 250px;
            min-height: 360px;
            background-color: rgba(255, 255, 255, .75);
            transition: all ease .25s;

            &:hover {
                background-color: #fff;
                transform: translate(0, -15px);
            }

            &-up {
                height: 25%;
                position: relative;
                border-bottom: 1px solid #f9f9f9;

                .title {
                    font-size: 20px;
                    font-weight: 400;
                    color: dodgerblue;
                    padding: 30px 0 0 20px;
                }

                .svg {
                    position: absolute;
                    right: 25px;
                    top: 25px;
                    font-size: 40px;
                    color: #bac3d0;
                }
            }

            &-down {
                display: block;
                padding: 20px;
                line-height: 1.8;
                text-indent: 2em;
            }
        }
    }


    .plan-wrap {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .tri_left:before {
            content: "";
            width: 0px;
            height: 0px;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 10px solid #fff;
            position: absolute;
            top: 55px;
            left: -10px;
        }

        .plan {
            box-sizing: border-box;
            margin: 12px 1%;
            border: 2px solid #fff;
            width: 47%;
            height: 140px;
            overflow: hidden;
            display: flex;
            box-shadow: 0 0 9px 0 #c3c3c3;
            transition: all ease-in-out .25s;
            position: relative;

            & > div {
                transition: all ease .55s;
            }

            &:hover {
                box-shadow: 0 0 9px 0 #999;

                & .plan-left {
                    transform: translate(-250px, 0);
                }

                & .plan-right {
                    width: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                }
            }

            .plan-right {
                background-color: #fff;
                position: relative;

                h4 {
                    padding: 5px 0;
                    width: 100%;
                }

                p {
                    font-size: 14px;
                    width: 95%;
                    margin: 10px;
                    text-indent: 2em;
                    line-height: 1.5;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }

    .partner-wrap {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .partner {
            box-sizing: border-box;
            border: 1px solid red;
        }
    }

    @media screen and (max-width: 760px) {
        .plan-left img {
            display: none;
        }
    }

    @media screen and (max-width: 1070px) {
        #home-banner {
            height: 50%;
        }

        .strength-wrap {
            width: 100%;

            & > span {

                flex-wrap: wrap;
            }

            .strength {
                margin: 2px 0;
                width: 95%;
                min-height: 100px;
            }

            .strength-up {
                .title {
                    padding: 10px;
                }

                .svg {
                    top: 2px;
                    font-size: 32px;
                }
            }
        }

        .plan-wrap {
            width: 100%;
            flex-wrap: wrap;

            .plan {
                width: 95%;
            }
        }
    }
</style>
