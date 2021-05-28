import Layout from 'views/components/layout/index';
import Header from 'views/components/header';
import Sidebar from 'views/components/sidebar';
import React from 'react';
import router from 'next/router';
import ThemeButton from 'views/components/theme-button'
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post, PostRequestBody } from '../../share/interfaces/post'
import { getMockdata, posts } from '../../share/utils/mock-data'
import * as S from './styles';

const PostViewPage = ({ post }) => { 
    const handleOnClick = (href: string) => {
        router.push(href);
      };

    const deletePost = () => {
        const deleteCheck = confirm("삭제된 글은 복구가 불가능합니다.\n글을 삭제하시겠습니까?");
        if (!deleteCheck) return;
        else return; /* 삭제 구현할 부분 */
    }

    return (
      <Layout>
        <Sidebar />
        <S.ContentContainer>
            <S.PostContent>{post.content}</S.PostContent>
            <S.ButtonContainer>
                <ThemeButton 
                text={'수정하기'} 
                onClick={() => handleOnClick(`/post-input/${post.id}`)} 
                isBrownTheme={true} />
                <ThemeButton text={'삭제하기'}
                onClick={deletePost}
                isBrownTheme={false}/>
            </S.ButtonContainer>
        </S.ContentContainer>
        
        
      </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getMockdata();
    const paths = data.map(({ id }) => ({
        params: { id: String(id) },
    }))

    return { paths, fallback: false }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id;
        const item = posts.find((data) => data.id === Number(id));
        return { props: { post: item }};
    } catch (err) {
        console.log(err.message);
        return { props: { errors: err.message }};
    }
    
};
  
export default PostViewPage;