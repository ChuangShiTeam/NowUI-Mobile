<style src="./address.css" scoped></style>
<template src="./address.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcButton} from 'weex-ui';

    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcButton
        },
        props: {

        },
        mixins: [mixins],
        data: () => ({
            addressList: [{
                name:'彭海涛',
                phone:'15222870966',
                address:'上海市闵行区联航路1188弄浦江智谷9号楼',
            },{
                name:'彭海涛',
                phone:'15222870966',
                address:'上海市闵行区联航路1188弄浦江智谷9号楼',
            },{
                name:'彭海涛',
                phone:'15222870966',
                address:'上海市闵行区联航路1188弄浦江智谷9号楼',
            }]
        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleBack() {
                this.pop();
            },
            handleEdit() {
                this.push('/view/shop/member/modifyaddress.html');
            },
            handleDelete() {
                console.log('删除');
            },
            handleSelected(){
                console.log('选中');
            },
            handleAddNewAddress(){
                this.push('/view/shop/member/addaddress.html');
            }
        }
    }
</script>
