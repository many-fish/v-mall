<template>
    <div class="main-box">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList">
                <img :src="item.url">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: 'index',
        components: {},
        data() {
            return {
                bannerList: [],
            }
        },
        created() {
            this.getInitData();
        },
        methods: {
            async getInitData() {
                await this.axios.get('https://easy-mock.com/mock/5d27e6a4b96ccc38ddc8dd8d/v-mall/getIndex').then((res) => {
                    this.bannerList = res.data.banner;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .main-box {
        img {
            width: 100%;
        }
    }
</style>
