<template>

<div id="center-content">
		
	<AppMainHeader />
	<!--메인 해더 자리 -->

	<form v-on:submit.prevent="search" id="search-form">
		<fieldset>
			<input type="text" name="keyword" >
			<button id="btnSearch" type="submit">검색</button>
		</fieldset>
		
		<fieldset>
			<label for="rdo-title">블로그 제목</label> 
			<input id="rdo-title" type="radio" name="kwdOpt" value="optTitle" > 
			
			<label for="rdo-userName">블로거 이름</label> 
			<input id="rdo-userName" type="radio" name="kwdOpt" value="optName" > 
		</fieldset>
	</form>
	
	<div id="resultList">
		
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

export default {
    name : 'IndexView',
    components : {
        AppMainHeader,
        AppMainFooter
    },
    data (){
        return {

        };
    },
    methods : {
		search(){
			alert('기능구현 하지 않습니다.');
		}
    },
    created (){

    }
}
</script>

<style>

</style>