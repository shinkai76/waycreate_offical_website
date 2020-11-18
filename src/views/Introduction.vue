<template>
    <div id="introduction">
        <div id="banner"></div>
        <div class="container">
            <transition name="transitionRouter">
                <keep-alive>
                    <router-view />
                </keep-alive>
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'introduction',
        metaInfo: {
            title: '威创|产品介绍',
            meta: [
                {
                    name: 'keywords',
                    content: 'c8erp, wms, 易仓储, pos, 进销存, 产品介绍'
                },
                {
                    name: 'description',
                    content: 'C8ERP，一款是针对商业企业的运营管理系统，可提供采购、线下批发零售、电商、仓储、财务、售后、返修、会员等管理为一体的整体运营管理解决方案。'
                }
            ]
        },
        data() {
            return {}
        }
    }
</script>
<style lang="less" scoped>
    #banner {
        width: 100%;
        position: relative;
        height: 550px;
        background: url(../assets/images/pro_banner.jpg) no-repeat center top fixed;
        /*-moz-background-size: 100% auto;*/
        /*background-size: 100% auto;*/
    }
</style>
