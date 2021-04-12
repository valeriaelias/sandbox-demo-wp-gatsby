import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Container from '../components/Container';

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Main>
        <section className="intro" id="about" name="about">
          <Container>
            <div className="split">
              <div className="split-col-40">
                <h1 className="h1-home">Blog</h1>
                <h2>{data.allMdx.totalCount} Posts</h2>

                {data.allMdx.edges.map(({ node }) => (
                  <div key={node.id}>
                    <Link to={node.fields.slug}>
                      <h3>
                        {node.frontmatter.title}{' '}
                        <span>— {node.frontmatter.date}</span>
                      </h3>
                      <p>{node.excerpt}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
      totalCount
    }
  }
`;

export default HomePage;
