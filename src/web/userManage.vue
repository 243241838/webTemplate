<template>
    <div>
        <div class="aa">4324</div>
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
        console.log('a')
    },
    mounted() {
    },
    methods: {
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
.aa{
    color:red;
    transform: translate(100px, 100px)
}
</style>


