<template>
    <div>
        主页
    </div>
</template>
<script>
import ajax from '@utils/config';
export default {
    components: {
    },
    data() {
        return {

        }
    },
    computed: {
    },
    created() {
        // this.getTable();
      
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            var mySwiper = new this.$Swiper('.swiper-container', {
                autoplay: true,//可选选项，自动滑动
                loop: true, //无限轮播
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'
                },
            })
        },
        getTable(isseach) {
            ajax({
                url: 'user/findPageList',
                optionParams: {
                    limit: 10,
                    page: 1
                }
            }).post()
                .then(response => {
                    if (response.code === 200) {

                    } else {
                        console.log(response)
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    filters: {

    }
}
</script>
<style lang='scss' scoped>
@import './scss/index.scss';
</style>


