<template>
    <div class="menu">


        <!--<a>SBSHome</a>
        <a>SBSTV</a>
        <a>SBSRadio</a>






        <a >{{홈}}</a>
        <a>{{티비}}</a>
        <a>{{라디오}}</a>-->


        <a  v-for ="mneulist_json in mneulist_json" :key="mneulist_json"  v-bind:href="mneulist_json.url" >    {{mneulist_json.name}} </a>

    </div>


</template>
<script>
    export  default {
        name : "App",
        data(){
            return{
                홈 : 'SBS홈',
                티비 :  'SBSTV',
                라디오 : 'SBS라디오',
                mneulist : ['SBS홈','SBSTV','SBS라디오2' ],
                mneulist_json : [
                    {
                        "url" : "./",
                        "name" : "sbs홈"
                    },
                    {
                        "url" : "./tv",
                        "name" : "sbstv"
                    },
                    {
                        "url" : "./radio",
                        "name" : "sbs라디오"
                    }

                ]
            }
        }
    }

</script>

<style>
    .menu{
        background: darkslateblue;
        padding: 15px;
        border-radius: 15px;
        text-align: center;
    }
    .menu a{
        color: white;
        padding: 10px;

    }
</style>