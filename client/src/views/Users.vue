<template>
    <div class="page">

        <div class="columns">
            <div class = "column is-two-third">
                <Post v-for="(x,i) in feed.item" :key = "i" :item = "x" :i="i" />
            </div>
            <div class = "column is-one-third">
                <Sidebar/>
            </div>
        </div>
    </div>
</template>

<script>
import Post from "@/components/Post";
import Sidebar from "@/components/Sidebar";
import feed from "@/models/feed";
export default {
    data: ()=> ({
        feed, output: '',
    }),
    components: {
        Post,
        Sidebar
    },
    methods: {

    }
}
</script>
<style>
.content{
    text-align: start;
}
.button:focus{
    box-shadow: 0 0 5px pink;
    border: 1px solid pink;
    outline:0px;
}
.file{
    margin-top : 5px;
}
#postBtn{
    margin-left: 7px;
}
#btn2,#edit2{
    margin-top : 5px;
}
#exercise,#location{
    margin-top : 5px;
    margin-right: 5px;
    margin-left: 5px;
    
}
#exer:focus,#loc:focus{
    box-shadow: 0 0 5px pink;
    border: 1px solid pink;
    outline: 0px;
}
.content{
     position: relative;
}
</style> 