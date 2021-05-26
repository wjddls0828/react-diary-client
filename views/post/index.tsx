import Layout from 'views/components/layout/index';
import Header from 'views/components/header';
import Sidebar from 'views/components/sidebar';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post, PostRequestBody } from '../../share/interfaces/post'
import { getMockdata, posts } from '../../share/utils/mock-data'
import * as S from './styles';

const PostViewPage = ({ post }) => { 
    return (
      <Layout>
        <Sidebar />
        <S.PostContent>{post.content}</S.PostContent>
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