<template>
    <div>
        主页 {{user}}
        <div v-for="(item, index) in 4" @click="aaa($event)">{{index}}</div>
        <div @click="add('4543')">store</div>
    </div>
</template>
<script>
import ajax from '@utils/config';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
        //store 中的 getter 映射到局部计算属性：
        ...mapState([//第一种
            'user'
        ]),
        // ...mapGetters([ //第二种
        //     'user',
        // ])

    },
    created() {
        // this.getTable();
        // console.log(this.$store.getters.user)

    },
    mounted() {
        console.log(this.$route.meta) //获取当前meta
        this.init();
    },
    methods: {
        add(aa) {
            // this.$store.commit('setUser', '543'); //第一个为名字， 第二个为传递过去的参数 //commit提交
            this.$store.dispatch('setUser', {data: 'rewre'})
        },
        aaa(e) {
            let dom = e.srcElement ? e.srcElement : e.target;
            //    console.log(dom.nextSibling) //获取下一个兄弟 
            var div = document.createElement('div');
            var span = document.createElement('span');
            span.innerHTML = '543';
            span.className = 'aa';
            div.appendChild(span);
            dom.parentNode.insertBefore(div, dom.nextSibling)
        },
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
.aa{
    .aa{}
}
</style>


