<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import menu from '../component/menu/index';

    export default {
        components: {
            menu
        },
        data() {
            return {
                posters: [
                    'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                    'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                    'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                    'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                    'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320'
                ]
            }
        },
        created() {

        }
    }
</script>
