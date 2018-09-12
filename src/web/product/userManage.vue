<template>
    <div>
        <div class="aa">内容区</div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
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
        console.log($('.aa').text())
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
@import './scss/userManage.scss';
</style>


