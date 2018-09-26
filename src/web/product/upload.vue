<template>
    <div>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
            <ul>
                <li v-for="(item,index) in listdata">{{item.name}}</li>
                <li v-for="(item,index) in downdata">{{item.name}}</li>
            </ul>
        </v-scroll>
    </div>
</template>
<script>
import ajax from '@utils/config';
import upLoad from '@/components/upLoad'
export default {
    components: {
        'v-scroll': upLoad
    },
    data() {
        return {
            counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
            num: 30,  // 一次显示多少条
            pageStart: 0, // 开始页数
            pageEnd: 0, // 结束页数
            listdata: [], // 下拉更新数据存放数组
            downdata: []  // 上拉更多的数据存放数组
        }
    },
    computed: {
    },
    created() {
        this.getList();
    },
    mounted() {
    },
    methods: {
        getList() {
            ajax({
                url: '/repos/typecho-fans/plugins/contents/',
                optionParams: {}
            }).fetch()
                .then(response => {
                    this.listdata = response.slice(0, this.num);
                    this.downdata = [];
                })
                .catch(error => {
                    console.log(error)
                })
        },
        onRefresh(done) {
            this.counter = 1;//默认已经显示出15条数据 count等于一是让从16条开始加载
            this.getList();
            done()
        },
        onInfinite(done) { //滑动
            ajax({
                url: '/repos/typecho-fans/plugins/contents/',
                optionParams: {}
            }).fetch()
                .then(response => {
                    this.counter++;
                    this.pageEnd = this.num * this.counter;
                    this.pageStart = this.pageEnd - this.num;
                    let arr = response;
                    let i = this.pageStart;
                    let end = this.pageEnd;
                    for (; i < end; i++) {
                        let obj = {};
                        obj['name'] = arr[i].name;
                        this.downdata.push(obj);
                        if ((i + 1) >= response.length) {
                            this.$el.querySelector('.load-more').querySelector('.text').innerHTML = '没有数据了'
                            return;
                        }
                    }
                    done() // call done
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

</style>


