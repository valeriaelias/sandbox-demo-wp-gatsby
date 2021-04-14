import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Stack, Box, Heading, Text, Link } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Container from '../components/Container';

const WpBlogList = () => (
  <Layout>
    <Main>
      <section className="intro" id="blog" name="blog">
        <Container>
          <Heading as="h1" m={5}>
            #100DaysOfGatsby
          </Heading>
          <Stack spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading as="h2">Blog Title</Heading>
              <Text mt={4} />
              <Link as={GatsbyLink} to="#">
                Read More
              </Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading as="h2">Blog Title</Heading>
              <Text mt={4} />
              <Link as={GatsbyLink} to="#">
                Read More
              </Link>
            </Box>
          </Stack>
        </Container>
      </section>
    </Main>
  </Layout>
);

export default WpBlogList;
