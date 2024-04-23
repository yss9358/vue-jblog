import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore ({
    state (){
        return {
            baseUrl : 'http://localhost:9000', // 개발 서버 주소
            authUser : '', // 로그인한 사용자의 정보
            token : '' // 서버에서 보내줄 토큰
        };
    },
    mutations : {
        setAuthUser(state,payload){
            state.authUser = payload;
        },
        setToken(state,payload){
            state.token = payload;
        }
    },
    plugins : [
        createPersistedState({
            paths : ['baseUrl', 'authUser', 'token']
        })
    ]
})