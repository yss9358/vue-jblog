<template>

<div id="header" class="clearfix">
    <h1><router-link v-bind:to="`/jblog/${pathId}`">{{ blogVo.userName }}의 블로그입니다.</router-link></h1>
    <ul class="clearfix">
        <!-- 로그인 전 메뉴 -->
        <li v-if="this.$store.state.authUser == null"><router-link class="btn_s" to="/jblog/user/loginform">로그인</router-link></li>
        
        <!-- 로그인 후 메뉴 -->
        <!-- 자신의 블로그일때만 관리 메뉴가 보인다. -->
        <li v-if="this.$store.state.authUser != null && this.$store.state.authUser.userNo == blogVo.userNo"><a class="btn_s" href="">내블로그 관리</a></li>
        <li v-if="this.$store.state.authUser == null"> </li>
        <li v-if="this.$store.state.authUser != null && this.$store.state.token != null"><router-link class="btn_s" :to="`/jblog/${pathId}`" v-on:click="logOut">로그아웃</router-link></li>
    </ul>
</div>

</template>

<script>
import axios from 'axios';

export default{
    name : 'AppBlogHeader',
    components : {

    },
    data (){
        return {
            pathId : this.$route.fullPath.split('/')[2],
            userVo : this.$store.state.authUser,
            blogVo : ''
        };
    },
    methods : {
        // 로그아웃
        logOut(){
            this.$store.commit('setAuthUser', null);
            this.$store.commit('setToken', null);
        },

        // 정보 확인
        getPathId(){
            axios({
                    method: 'get',
                    url: `${this.$store.state.baseUrl}/jblog/blogs`,
                    headers: { 'Content-Type': 'application/json; charset=utf-8' }, //전송타입
                    params: {id : this.pathId} , // modelattribute
                    // data: ,   // requestbody
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data.result);
                    if(response.data.result === 'success'){
                        this.blogVo = response.data.apiData;
                    } else {
                        alert(response.data.message);
                    }
                }).catch(error => {
                    console.log(error);
                });

        }
    },
    created (){
        this.getPathId();
    }
}
</script>

<style>

</style>