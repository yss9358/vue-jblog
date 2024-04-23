<template>

<div id="center-content">
		
    <AppMainHeader />
    <!-- 메인 해더 -->

    <div>		
        <form v-on:submit.prevent="join" id="joinForm">
            <table>
                <colgroup>
                    <col style="width: 100px;">
                    <col style="width: 170px;">
                    <col style="">
                </colgroup>
                <tr>
                    <td><label for="txtId">아이디</label></td>
                    <td><input id="txtId" type="text" name="id" v-model="userVo.id"></td>
                    <td><button id="btnIdCheck" type="button" v-on:click="idCheck">아이디체크</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td id="tdMsg" colspan="2">{{ idCheckMsg }}</td>
                </tr> 
                <tr>
                    <td><label for="txtPassword">패스워드</label> </td>
                    <td><input id="txtPassword" type="password" name="password"  v-model="userVo.password"></td>   
                    <td></td>  			
                </tr> 
                <tr>
                    <td><label for="txtUserName">이름</label> </td>
                    <td><input id="txtUserName" type="text" name="userName"  v-model="userVo.userName"></td>   
                    <td></td>  			
                </tr>  
                <tr>
                    <td><span>약관동의</span> </td>
                    <td colspan="3">
                        <input id="chkAgree" type="checkbox" name="agree" v-on:click="agreeCheck" v-model="agree">
                        <label for="chkAgree">서비스 약관에 동의합니다.</label>
                    </td>   
                </tr>   		
            </table>
            <div id="btnArea">
                <button id="btnJoin" class="btn" type="submit">회원가입</button>
            </div>
        </form>
        
    </div>
    
    <AppMainFooter />
    <!-- 메인 푸터  자리-->
    
</div>

</template>

<script>
import '@/assets/css/jblog.css';
import AppMainHeader from '@/components/AppMainHeader.vue';
import AppMainFooter from '@/components/AppMainFooter.vue';
import axios from 'axios';

export default{
    name : 'JoinForm',
    components : {
        AppMainHeader,
        AppMainFooter
    },
    data (){
        return {
            agree : false, // 약관확인 체크할때 쓸 데이터 -> 체크하면 true로 바뀌게 
            check : false, // 아이디 중복확인 체크 -> 중복확인되면 true로 바뀌게 
            idCheckMsg : '', // 아이디 중복확인 체크할때 나올 메세지
            userVo : { // 회원가입할때 보낼 사용자가 입력한 정보
                id : '',
                password : '',
                userName : ''
            },
            
        };
    },
    methods : {
        ///////////////////////// 아이디 중복 확인////////////////////////////
        /* eslint-disable */
        idCheck(){
            // 아이디를 axios 로 보내서 중복되면 메세지 처리
            this.idCheckMsg = '';
            let id = this.userVo.id;
            let specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/gi; // 특수문자 체크

            if(id == null || id == ''){ // id 를 입력하지 않을경우
                alert('아이디를 확인하세요.');
            } else if(id.search(/\s/) != -1){ // id 입력칸에 공백이 있을경우
                alert('아이디는 빈 칸을 포함 할 수 없습니다.')
            } else if (specialCheck.test(id)){ // id 입력칸에 특수문자가 포함될 경우
                alert('아이디는 특수문자를 포함 할 수 없습니다.');
            } else {
                axios({
                    method: 'post',
                    url: `${this.$store.state.baseUrl}/jblog/users`,
                    headers: { 'Content-Type': 'application/json; charset=utf-8' }, //전송타입
                    data: this.userVo,   // requestbody
                    responseType: 'json' //수신타입
                }).then(response => {
                    // console.log(response.data.result);
                    if(response.data.result == 'success'){// 아이디가 중복안되면 사용가능 표기
                        this.idCheckMsg = response.data.apiData; // 사용가능하다는 메세지
                        this.check = true; // check 가 true 로 바뀌면 데이터 join 메소드에서 회원가입 가능상태로 변경
                    } else { // 아이디가 중복되면 사용불가 표기
                        this.idCheckMsg = response.data.message; // 다른아이디 사용 메세지
                        this.check = false; // check 가 false 라서 회원가입이 안됨
                    }
                }).catch(error => {
                    console.log(error);
                });
            }            
        },
        ////////////////////////////////////////////////////////////////////////


        //////////////////// 약관동의 여부 //////////////////////////////
        agreeCheck(){
            if(this.agree == false){ // 클릭되면 true
                this.agree = true;
            } else { // 클릭풀면 false
                this.agree = false;
            }
        },
        ///////////////////////////////////////////////////////////////

        /////////////////////// 회원가입에 쓸 에러 메세지 모음 ////////////////////////
        //  회원가입 버튼을 눌렀을 때 에러체크를 실행하고 진행될 수 있도록 만듬
        joinError(){ 
            let error = false;
            let pw = this.userVo.password;
            let name = this.userVo.userName;

            if(this.check == false){ // 아이디 중복확인을 하지 않았을때
                alert('아이디 중복확인을 해주세요.');
            } else if (pw == null || pw == '' ){ // 비밀번호를 입력하지 않았을때
                alert('비밀번호를 확인해주세요.');
            } else if (pw.search(/\s/) != -1){ // 비밀번호에 공백이 있을때
                alert('비밀번호는 빈 칸을 포함할 수 없습니다.');
            } else if (name == null || name == ''){ // 이름을 입력하지 않았을때
                alert('이름을 입력해주세요.');
            } else if (name.search(/\s/) != -1){ // 이름에 공백이 있을때
                alert('이름은 빈 칸을 포함할 수 없습니다.');
            } else if (this.agree == false){ // 약관에 동의하지 않았을때
                alert('약관동의를 확인해주세요.');
            } else{ // 위 해당사항에 걸리지 않으면 회원정보 보내고 회원가입 실행 
                error = true;
            }
            return error;
        },

        ////////////////////////////////////////////////////////////////////////////

        ///////////////////// 회원가입 //////////////////////////////////////////
        join(){
            if(this.joinError() == true){ // 에러체크한 값이 true면 
                axios({
                    method: 'post',
                    url: `${this.$store.state.baseUrl}/jblog/users/join`,
                    headers: { 'Content-Type': 'application/json; charset=utf-8' }, //전송타입
                    data: this.userVo,   // requestbody
                    responseType: 'json' //수신타입
                }).then(response => {
                    // console.log(response.data);
                    if(response.data.result == 'success'){
                        this.userVo.id = null;
                        this.userVo.password = null;
                        this.userVo.userName = null;
                        // 회원가입할때 입력한 값들을 초기화 시키고 회원가입 성공페이지로 이동
                        this.$router.push('/jblog/user/join');
                    } else {
                        this.userVo.id = null;
                        this.userVo.password = null;
                        this.userVo.userName = null;
                        // 회원가입할때 입력한 값들을 초기화 시킴
                        alert(response.data.message);
                    }
                }).catch(error => {
                    console.log(error);
                });
            } else {
                console.log();
            }
        },
        ///////////////////////////////////////////////////////////////////////

        ////////// checkMsg /////////////////

        checkMsg (){
            
        }
        
     
    },
    created (){
        
    }
}
</script>

<style>

</style>