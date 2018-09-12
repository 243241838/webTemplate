<template>
    <div>
        <top></top>
        <div>
            <router-view></router-view>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import top from '@/components/header.vue';
import foot from '@/components/footer.vue';
export default {
    components: {
        top,
        foot
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>
<style lang='scss' scoped>
</style>

