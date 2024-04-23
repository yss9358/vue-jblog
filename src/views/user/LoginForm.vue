<template>

<div id="center-content">
    <AppMainHeader />
    <!-- 메인 해더 -->
    <div id="loginForm">
        <form v-on:submit.prevent="login">
            <table>
                <colgroup>
                    <col style="width: 100px;">
                    <col style="">
                </colgroup>
                <tr>
                    <td><label for="textId">아이디</label></td>
                    <td><input id="textId" type="text" name="id" v-model="userVo.id"></td>
                </tr>
                <tr>
                    <td><label for="textPassword">패스워드</label> </td>
                    <td><input id="textPassword" type="password" name="password" v-model="userVo.password"></td>   
                                
                </tr> 
                <tr>
                    <td colspan="2" id="tdMsg" >
                        <span>{{ errorMsg }}</span>
                    </td>
                </tr> 
            </table>
            <div id="btnArea">
                <button class="btn" type="submit">로그인</button>
            </div>
            
        </form>
    
    </div>
    <AppMainFooter />
    <!-- 메인 푸터  자리-->

</div>
<!-- //center-content -->

</template>

<script>
import '@/assets/css/jblog.css';
import AppMainHeader from '@/components/AppMainHeader.vue';
import AppMainFooter from '@/components/AppMainFooter.vue';
import axios from 'axios';

export default{
    name : 'LoginForm',
    components : {
        AppMainHeader,
        AppMainFooter
    },
    data (){
        return {
            errorMsg : '', // 아이디 비밀번호 틀릴시 에러메세지 출력
            userVo : { // 로그인할때 가져올 회원정보 
                id : '',
                password : ''
            }
        };
    },
    methods : {
        /* eslint-disable */
        login(){ // 로그인
            
            let specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
            let id = this.userVo.id;
            let password = this.userVo.password;
            this.errorMsg = '';

            if(specialCheck.test(id)){ // 아이디에 특수문자 포함되었을때 
                alert('아이디는 특수문자를 포함 할 수 없습니다.');
            } else if(id == null || id == ''){ // 아이디를 입력하지 않았을때
                alert('아이디를 확인하세요.');
            } else if(id.search(/\s/) != -1){ // 아이디에 공백이 포함되어있을때
                alert('아이디는 빈 칸을 포함 할 수 없습니다.');
            } else if (password == null || password == ''){ // 비밀번호를 입력하지 않았을때
                alert('비밀번호를 확인해주세요.');
            } else if (password.search(/\s/) != -1){ // 비밀번호에 공백이 포함되어있을때
                alert('비밀번호는 빈 칸을 포함할 수 없습니다.');
            } else {
                // 위 해당사항에 해당되지 않으면 정보를 보내서 로그인하기
                let vo = { id,password };
                
                axios({
                    method: 'post',
                    url: `${this.$store.state.baseUrl}/jblog/users/login`,
                    headers: { 'Content-Type': 'application/json; charset=utf-8' }, //전송타입
                    data: vo,   // requestbody
                    responseType: 'json' //수신타입
                }).then(response => {
                    if(response.data.result === 'success'){
                        let authUser = response.data.apiData;
                        if(authUser.password == -1){
                            this.userVo.password = '';
                            this.errorMsg = '비밀번호를 확인하세요.';
                        } else {
                            this.$store.commit('setAuthUser',authUser);
                            const token = response.headers.authorization.split(" ")[1];
                            this.$store.commit('setToken', token);
                            this.$router.push('/jblog');
                        }
                    } else {
                        this.userVo.id = '';
                        this.userVo.password = '';
                        this.errorMsg = '아이디와 비밀번호를 확인하세요.';
                    }
                    
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    },
    created (){
        this.userVo.id = '';
        this.userVo.password = '';
    }
}
</script>

<style>

</style>