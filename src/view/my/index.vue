<style src="./index.css" scoped></style>
<template src="./index.html"></template>
<script>
    import {WxcTabBar} from 'weex-ui';
    const dom = weex.requireModule('dom')
    export default {
        data () {
            return {
                list:[]
            }
        },
        created () {
            for (let i = 0; i < 30; i++) {
                this.rows.push('row ' + i)
            }
        },
        methods: {
            goto10 (count) {
                const el = this.$refs.item10[0]
                dom.scrollToElement(el, {})
            },
            goto20 (count) {
                const el = this.$refs.item20[0]
                dom.scrollToElement(el, { offset: 0 })
            }
        }
    }
</script>
