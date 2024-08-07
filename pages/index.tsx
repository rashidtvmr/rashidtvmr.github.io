/* eslint-disable react/no-unescaped-entities */
import {
  // styled,
  // Anchor,
  // Box,
  Button,
  // Card,
  Flex,
  Grid,
  Icon,
  Text,
  VisuallyHidden,
  H1,
  // H2,
  // H3,
} from '@maximeheckel/design-system';
// import { format } from 'date-fns';
import { motion } from 'framer-motion';
// import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Layout from '@core/layout';
import { getAllFilesFrontMatter } from 'lib/mdx';
// import { Post } from 'types/post';
import React from 'react';
import { templateColumnsMedium } from 'styles/grid';

// const NewsletterForm = dynamic(() => import('@core/components/NewsletterForm'));

// interface Props {
//   posts: Post[];
// }

const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block',
    }}
    animate={{ rotate: 20 }}
    transition={{
      repeat: 7,
      repeatType: 'mirror',
      duration: 0.2,
      delay: 0.5,
      ease: 'easeInOut',
      type: 'tween',
    }}
  >
    👋🏻
  </motion.div>
);

// let year = 0;

// const cardVariants = {
//   hover: {
//     scale: 1.05,
//   },
//   initial: {
//     scale: 1,
//   },
// };

// const glowVariants = {
//   hover: {
//     opacity: 0.8,
//   },
//   initial: {
//     scale: 1.05,
//     opacity: 0,
//   },
// };

const IndexPage = () => {
  // const { posts } = props;

  return (
    <Layout footer header headerProps={{ offsetHeight: 256 }}>
      <Grid gapX={4} gapY={40} templateColumns={templateColumnsMedium}>
        <Grid.Item col={2}>
          <Flex alignItems="start" direction="column" gap="5">
            <H1>
              Hi <WavingHand /> I'm Rashid, and this is my blog.{' '}
              <Text
                css={{
                  lineHeight: 'unset',
                  letterSpacing: '-0.5px',
                }}
                variant="secondary"
                size="7"
                weight="4"
              >
                Here, I share my experience as a frontend engineer and
                everything I'm learning about JavaScript, animation, React,
                Framer Motion, and more.
              </Text>
            </H1>
            <Flex
              gap={4}
              css={{
                marginLeft: '-var(--space-3)',
                marginRight: '-var(--space-3)',
                marginBottom: 'var(--space-4)',
              }}
            >
              <a
                href="/posts/resume/"
                style={{ textDecoration: 'none' }}
                tabIndex={-1}
              >
                <Button
                  variant="secondary"
                  endIcon={<Icon.External size="4" />}
                >
                  My resume
                </Button>
                <VisuallyHidden as="p">Link to my resume</VisuallyHidden>
              </a>
              <a
                href="https://twitter.com/rashidtvmr"
                style={{ textDecoration: 'none' }}
                tabIndex={-1}
              >
                <Button variant="secondary" endIcon={<Icon.Twitter size="4" />}>
                  @rashidtvmr
                </Button>
                <VisuallyHidden as="p">
                  Link redirects to my Twitter profile page
                  https://twitter.com/rashidtvmr.
                </VisuallyHidden>
              </a>
            </Flex>
          </Flex>
        </Grid.Item>
        <Grid.Item as="section" col={2}>
          <div style={{ height: '200px' }}></div>
        </Grid.Item>
        {/* <Grid.Item as="section" col={2}>
          <Flex alignItems="start" direction="column" gap="5">
            <H2>Newsletter</H2>
            <NewsletterForm large />
          </Flex>
        </Grid.Item> */}
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}

// const Glow = styled(motion.div, {
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   width: '100%',
//   height: '100%',
//   webkitFilter: 'blur(15px)',
//   filter: 'blur(15px)',
//   borderRadius: 'var(--border-radius-2)',
// });

// const Block = styled(Box, {
//   display: 'flex',
//   justifyContent: 'flex-start',
//   alignItems: 'start',
//   width: '100%',
//   borderRadius: 'var(--border-radius-2)',
//   marginLeft: '-8px',
//   padding: '16px 8px',
//   boxShadow: 'none',
//   backgroundColor: 'var(--article-block-background-color, "transparent")',
//   color: 'var(--article-block-color, var(--text-primary))',
//   transition: 'background-color 0.25s, box-shadow 0.25s, color 0.25s',

//   '&:focus': {
//     '--article-block-background-color': 'var(--emphasis)',
//     '--article-block-color': 'var(--accent)',
//   },

//   '@media (hover: hover) and (pointer: fine)': {
//     '&:hover': {
//       '--article-block-background-color': 'var(--emphasis)',
//       '--article-block-color': 'var(--accent)',
//     },
//   },
// });

export default IndexPage;
