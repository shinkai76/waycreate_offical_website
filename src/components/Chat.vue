<template>
    <div id="chat">
        <div class="left">
            免费试用
        </div>
        <div class="right">
            <img src="../assets/images/weixin.jpg" alt="微信">
            <ul>
                <li>
                    <svg-icon icon-class="qq" class="qq"></svg-icon>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=800183501&site=qq&menu=yes"> 售前1 </a>
                </li>
                <li>
                    <svg-icon icon-class="qq" class="qq"></svg-icon>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=800183905&site=qq&menu=yes"> 售前2 </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
    #chat {
        position: fixed;
        right: -105px;
        padding-right: 20px;
        top: 45%;
        height: 120px;
        z-index: 2000;
        width: 110px;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 10px;
        color: #fff;
        display: flex;
        justify-content: left;
        transition: all ease .3s;

        .right {
            margin-left: 10px;

            a {
                color: #fff;
            }

            li {
                margin: 5px 0;
            }

            & > img {
                display: block;
                width: 100px;
                margin: 10px auto;
            }
        }

        &:hover {
            right: -10px;
            width: 110px;
            height: 180px;

            & .left {
                display: none;
            }
        }

        .left {
            cursor: pointer;
            padding: 16px 0 0 5px;
            width: 30px;
            font-size: 16px;

        }

        .qq {
            font-size: 20px;
        }
    }

</style>
