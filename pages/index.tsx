/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  VisuallyHidden,
  H1,
} from '@maximeheckel/design-system';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@core/layout';
import StickyProjectsSection from '@core/components/StickyProjects/StickyProjectsSection';
import BookShelf from '@core/components/BookShelf/BookShelf';
import { getAllFilesFrontMatter, getBooks } from 'lib/mdx';
import { generateFAQPageSchema, generateBreadcrumbSchema } from 'lib/seo';
import React from 'react';
import { templateColumnsMedium } from 'styles/grid';
import { Book } from 'types/post';

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

interface Props {
  completedBooks: Book[];
  readingBooks: Book[];
}

const IndexPage = ({ completedBooks, readingBooks }: Props) => {
  const faqSchema = generateFAQPageSchema([
    {
      question: 'What is this website about?',
      answer:
        'This is the official blog of Mohammed Rashid (rashidtvmr), a senior frontend engineer in Chennai, India. It covers React, TypeScript, web performance, animation, and modern web development.',
    },
    {
      question: 'Who is Rashidtvmr?',
      answer:
        'Mohammed Rashid, known as rashidtvmr, is a senior frontend engineer specializing in React, TypeScript, Next.js, and web performance optimization.',
    },
    {
      question: 'What technologies does this site use?',
      answer:
        'Next.js 14 (Pages Router), TypeScript, MDX for content, Stitches CSS-in-JS, and static export for optimal performance.',
    },
    {
      question: 'How is this site optimized for SEO and AI?',
      answer:
        'Through static generation, JSON-LD structured data, Core Web Vitals, sitemaps, answer-first content, FAQPage schema, AI crawler access, and llms.txt.',
    },
    {
      question: 'Where is Rashidtvmr based?',
      answer:
        'Chennai, India. He works as a senior frontend engineer focused on modern web technologies.',
    },
    {
      question: 'How can I contact Rashidtvmr?',
      answer:
        'Email hi@raashid.qzz.io, Twitter @rashidtvmr, or via GitHub and LinkedIn links in the footer.',
    },
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://raashid.qzz.io/' },
    { name: 'Blog', url: 'https://raashid.qzz.io/posts/' },
  ]);

  return (
    <Layout footer header headerProps={{ offsetHeight: 256 }}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <Grid gapX={4} gapY={40} templateColumns={templateColumnsMedium}>
        <Grid.Item col={2}>
          <Flex alignItems="start" direction="column" gap="5">
            <H1>
              Hi <WavingHand /> I&apos;m Rashid, a frontend engineer focused on
              building thoughtful, performant web experiences.{' '}
              <Text
                css={{
                  lineHeight: 'unset',
                  letterSpacing: '-0.5px',
                }}
                variant="secondary"
                size="7"
                weight="4"
              >
                Here, I share my experience as a frontend engineer along with
                insights from what I&apos;m learning in JavaScript, animation,{' '}
                React, Framer Motion, and modern frontend development. I also
                write about key takeaways from books I&apos;ve recently read.
                Click on any book cover in the <strong>Completed</strong>{' '}
                section below to explore articles inspired by that book.
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
              <Link href="/posts/resume/">
                <Button
                  variant="secondary"
                  endIcon={<Icon.External size="4" />}
                  style={{ textDecoration: 'none' }}
                >
                  My resume
                </Button>
                <VisuallyHidden as="p">Link to my resume</VisuallyHidden>
              </Link>
              <a
                href="https://twitter.com/rashidtvmr"
                style={{ textDecoration: 'none' }}
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
      </Grid>

      {/* Sticky Projects Section */}
      <StickyProjectsSection />

      <Grid gapX={4} gapY={2} templateColumns={templateColumnsMedium}>
        <Grid.Item col={2} css={{ marginTop: '20px' }}>
          <Text
            as="h2"
            size="2"
            css={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--text-tertiary, rgba(150,150,150,0.6))',
              paddingBottom: '8px',
            }}
          >
            Between the pages - what I&apos;ve read &amp; what I&apos;m reading
          </Text>
        </Grid.Item>
        <Grid.Item as="section" col={2} css={{ marginTop: '20px' }}>
          <BookShelf
            title="Currently Reading"
            books={readingBooks}
            type="reading"
          />
        </Grid.Item>
        <Grid.Item as="section" col={2}>
          <BookShelf
            title="Completed"
            books={completedBooks}
            type="completed"
          />
        </Grid.Item>
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  const completedBooks = await getBooks('completed');
  const readingBooks = await getBooks('reading');

  return { props: { posts, completedBooks, readingBooks } };
}

export default IndexPage;
