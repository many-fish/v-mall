<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item
                    v-for="(item, index) in footerList"
                    :name="item.path"
                    :icon="item.icon"
                    @click="toPath(item.path)">
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
        <button type="button" @click="dd">111</button>
    </div>
</template>

<script>
    export default {
        name: 'footer-bar',
        components: {},
        props: {},
        data() {
            return {
                footerList: []
            }
        },
        computed: {
            active: {
                get: function () {
                    return this.$router.path
                },
                set: function () {

                }
            }
        },
        watch: {},
        created() {
            this.getNavigation();
        },
        methods: {
            async getNavigation() {
                await this.axios.get('https://easy-mock.com/mock/5d27e6a4b96ccc38ddc8dd8d/v-mall/getNavigation').then((res) => {
                    this.footerList = res.data;
                })
            },
            toPath(item) {
                this.$router.push(item);
            },
            dd() {

                console.log(this.active)
                console.log(this.$route.path)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
