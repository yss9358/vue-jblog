<template>

<div id="wrap">

    <AppBlogHeader />
    <!-- 개인블로그 해더 -->

    <div id="content" class="clearfix">
        <div id="profilecate_area">
            <div id="profile">
                
                <!-- 기본이미지 -->
                <img id="proImg" src="@/assets/images/spring-logo.jpg">
                
                <!-- 사용자업로드 이미지 -->
                <img id="proImg" src=""> 
                
                <div id="nick" v-if="this.$store.state.authUser != null">{{ this.$store.state.authUser.userName }}({{ this.$store.state.authUser.id }})님</div>
            </div>

            <div id="cate">
                <div class="text-left">
                    <strong>카테고리</strong>
                </div>
                <ul id="cateList" class="text-left">
                    <li><a href="$}">카테고리5</a></li>
                    <li><a href="$}">카테고리4</a></li>
                    <li><a href="$}">카테고리3</a></li>
                    <li><a href="$}">카테고리2</a></li>
                    <li><a href="$}">카테고리1</a></li>
                    <li><a href="$}">미분류</a></li>
                    
                </ul>
            </div>
        </div>
        <!-- profilecate_area -->
        
        <div id="post_area">
            
            <div id="postBox" class="clearfix">
                    <div id="postTitle" class="text-left"><strong>08.페이징</strong></div>
                    <div id="postDate" class="text-left"><strong>2020/07/23</strong></div>
                    <div id="postNick">정우성(hijava)님</div>
            </div>
            <!-- //postBox -->
        
            <div id="post" >
                대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 
                대통령의 임기는 5년으로 하며, 중임할 수 없다. 법관은 탄핵 또는 금고 이상의 
                형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 
                정직·감봉 기타 불리한 처분을 받지 아니한다.
            </div>
            <!-- //post -->
            
            <!-- 글이 없는 경우 -->
            <!-- 
            <div id="postBox" class="clearfix">
                        <div id="postTitle" class="text-left"><strong>등록된 글이 없습니다.</strong></div>
                        <div id="postDate" class="text-left"><strong></strong></div>
                        <div id="postNick"></div>
            </div>
            
            <div id="post" >
            </div>
            -->
            
            <div id="list">
                <div id="listTitle" class="text-left"><strong>카테고리의 글</strong></div>
                <table>
                    <colgroup>
                        <col style="">
                        <col style="width: 20%;">
                    </colgroup>
                    <tr>
                        <td class="text-left"><a href="">08.페이징</a></td>
                        <td class="text-right">2020/07/23</td>
                    </tr>
                    <tr>
                        <td class="text-left"><a href="">07.첨부파일_MultipartResolver</a></td>
                        <td class="text-right">2020/07/23</td>
                    </tr>
                    <tr>
                        <td class="text-left"><a href="">06.jquery_ajax</a></td>
                        <td class="text-right">2020/07/23</td>
                    </tr>
                    <tr>
                        <td class="text-left"><a href="">05.javaScript</a></td>
                        <td class="text-right">2020/07/23</td>
                    </tr>
                    <tr>
                        <td class="text-left"><a href="">04.spring_어플리케이션_아키텍쳐</a></td>
                        <td class="text-right">2020/07/23</td>
                    </tr>   
                </table>
            </div>
            <!-- //list -->
        </div>
        <!-- //post_area -->   
        
    </div>	
    <!-- //content -->

    <AppBlogFooter />
    <!-- 블로그푸터 -->

</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/jblog.css'
import AppBlogHeader from '@/components/AppBlogHeader.vue';
import AppBlogFooter from '@/components/AppBlogFooter.vue';

export default{
    name : 'BlogMain',
    components : {
        AppBlogHeader,
        AppBlogFooter
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