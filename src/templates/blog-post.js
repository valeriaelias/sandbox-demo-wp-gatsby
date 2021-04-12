import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Container from '../components/Container';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.mdx;
  console.log(post);
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Main>
        <section className="intro" id="about" name="about">
          <Container>
            <div className="split">
              <div className="split-col-40">
                <h1 className="h1-home">{post.frontmatter.title}</h1>
                <MDXRenderer>{post.body}</MDXRenderer>
              </div>
            </div>
          </Container>
        </section>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
