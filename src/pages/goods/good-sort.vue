<template>
    <div>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>

        <van-tree-select
                :items="items"
                :main-active-index="mainActiveIndex"
                :active-id="activeId"
                @navclick="onNavClick"
                @itemclick="onItemClick"
        />

        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import FooterBar from '@/components/footer-bar'
    export default {
        name: 'good-sort',
        components: {
            'footer-bar': FooterBar
        },
        props: {},
        data() {
            return {
                activeKey: 0,
                items: [
                    {
                        // 导航名称
                        text: '所有城市',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识
                                id: 1,
                                // 禁用选项
                                disabled: true
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    }
                ],
                // 左侧高亮元素的index
                mainActiveIndex: 0,
                // 被选中元素的id
                activeId: 1
            }
        },
        computed: {},
        watch: {},
        created() {

        },
        mounted() {

        },
        destroyed() {

        },
        methods: {
            onNavClick(index) {
                this.mainActiveIndex = index;
            },
            onItemClick(data) {
                this.activeId = data.id;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
