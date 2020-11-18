<template>
    <div id="helpVideo">
        <div id="banner"></div>
        <div class="content">
            <div class="video-wrap">
                <my-video :sources="video.sources" :options="video.options"></my-video>
            </div>
        </div>
    </div>
</template>

<script>

    import myVideo from 'vue-video'

    export default {
        name: "HelpVideo",
        components: {
            myVideo
        },
        data() {
            return {
                video: {
                    sources: [{
                        src: 'http://covteam.u.qiniudn.com/oceans.mp4',
                        type: 'video/mp4'
                    }],
                    options: {
                        autoplay: true,
                        volume: 0.6,
                        poster: 'http://covteam.u.qiniudn.com/poster.png'
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    #helpVideo {
        .content {
            max-width: 1100px;
            width: 80%;
            margin: 0 auto;
        }
        .video-wrap {
            width: 400px;
            height: 300px;
        }
    }

</style>
