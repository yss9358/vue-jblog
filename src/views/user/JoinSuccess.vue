<template>

<div id="center-content">
		
    <AppMainHeader />
    <!-- 메인 해더 -->
    
    <div id="joinSucceess">		
        <p class="welcome-message">
            <span> 감사합니다.<br>
                    회원 가입 및 블로그가 성공적으로 만들어 졌습니다.
            </span>
        <br><br>
        <router-link to="/jblog/user/loginform">로그인 하기</router-link>
        </p>
    </div>
    
    <AppMainFooter />
    <!-- 메인 푸터  자리-->
    
</div>

</template>

<script>
import '@/assets/css/jblog.css';
import AppMainHeader from '@/components/AppMainHeader.vue';
import AppMainFooter from '@/components/AppMainFooter.vue';

export default{
    name : 'JoinSuccess',
    components : {
        AppMainHeader,
        AppMainFooter
    },
    data (){
        return {

        };
    },
    methods : {

    },
    created (){

    }
}
</script>

<style>

</style>