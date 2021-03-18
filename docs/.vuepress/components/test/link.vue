<template>
        <div>
        <demo-link type="primary"></demo-link>
        <demo-link type='success'></demo-link>
        <demo-link type='warning'></demo-link>
        <demo-link type='danger'></demo-link>
        <demo-link type='info'></demo-link>
        </div>
</template>
<script>
import DemoLink from '../modules/link/main.vue'
export default {
    name:'linkWrap',
    components:{
        DemoLink
    }
}
</script>