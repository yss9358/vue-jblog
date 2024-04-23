<template>

<!-- 메인 로고 이미지를 링크하세요 logo.jpg -->
<router-link to="/jblog/">
    <img class="logo" src="@/assets/images/logo.jpg">
</router-link>

<ul class="menu">
    <!-- 로그인 전 메뉴 -->
    <div v-if="this.$store.state.authUser === null">
        <li><router-link to="/jblog/user/loginform">로그인</router-link></li>
        <li><router-link to="/jblog/user/joinform">회원가입</router-link></li>
    </div>
    
    <!-- 로그인 후 메뉴 -->
    <div v-if="this.$store.state.authUser !== null && this.$store.state.token !== null">
        <li><router-link to="/jblog" v-on:click="logOut">로그아웃</router-link></li>
        <li><router-link :to="`/jblog/${this.$store.state.authUser.id}`">내블로그</router-link></li>
    </div>
</ul>


</template>

<script>
import '@/assets/css/jblog.css'

export default{
    name : 'AppMainHeader',
    components : {

    },
    data (){
        return {

        };
    },
    methods : {
        // 로그아웃
        logOut(){
            this.$store.commit('setAuthUser', null);
            this.$store.commit('setToken', null);
        }
    },
    created (){

    }
}
</script>

<style>

</style>