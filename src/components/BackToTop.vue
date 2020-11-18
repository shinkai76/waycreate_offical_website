<template>
    <div id="box" class="box" @click="onClick()">
        <div class="box-in"></div>
    </div>
</template>

<script>
    export default {
        name: "BackToTop",
        methods: {
            onClick() {
                let timer = null
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn() {
                    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                    if ( oTop > 0 ) {
                        document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                        timer = requestAnimationFrame(fn);
                    }
                    else {
                        cancelAnimationFrame(timer);
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .box {
        position: fixed;
        right: 10px;
        bottom: 10px;
        height: 30px;
        width: 50px;
        text-align: center;
        padding-top: 20px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        overflow: hidden;
        z-index: 2000;
    }

    .box:hover:before {
        top: 50%
    }

    .box:hover .box-in {
        visibility: hidden;
    }

    .box:before {
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: 'TOP';
        color: #fff;
        width: 40px;
        font-weight: bold;
    }

    .box-in {
        visibility: visible;
        display: inline-block;
        height: 20px;
        width: 20px;
        border: 3px solid black;
        border-color: white transparent transparent white;
        transform: rotate(45deg);
    }
</style>
