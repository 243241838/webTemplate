<template>
    <div class="header">

        <ul>
            <li class="fl" :class="{'colorRed': item.isShow && item.name != '登录', 'fr': item.name == '登录'}" v-for="item in nav" v-text="item.name" @click="go_url(item)"></li>
        </ul>
    </div>
</template>
<script>
import ajax from '@utils/config';
import Swiper from 'swiper';
export default {
    components: {
    },
    data() {
        return {
            navIndex: 0,
            nav: [
                { name: '主页', url: '/index', isShow: true},
                { name: '登录', url: '/login', isShow: false},
                { name: '产品', url: '/product/userManage', isShow: false},
            ]

        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
        go_url(row) {
            this.nav.map((item)=>{
                item.isShow = false;
            })
            row.isShow = true;
            this.$router.push({path: row.url})
        }
    },
    filters: {

    }
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/commin.scss';
.header {
    background: #ccc;
    ul {
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        padding-left: 200px;
        padding-right: 100px;
        li {
            padding: 20px;
            &.colorRed {
                color: red;
            }
        }
    }
}
</style>


