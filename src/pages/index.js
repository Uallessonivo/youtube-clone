import React from 'react';
import { Box } from '@material-ui/core';
import Layout from '../components/Layout';
import VideoCard from '../components/videoCard';
import Grid from '@material-ui/core/Grid';

function Home({ data }) {

  return (
    <Layout title="Youtube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item x1={3} lg={3} md={4} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [{
      id: 1,
      title: 'NEXT JS O VIDEO 1',
      authorId: 1,
      authorName: 'Lucas',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumb/next01.png',
      videoUrl: 'url',
      updatedAt: new Date()

  },
  {
    id: 2,
    title: 'NEXT JS O VIDEO 2',
    authorId: 2,
    authorName: 'Uallesson',
    authorAvatar: 'avatarUrl',
    views: 1012,
    thumb: '/thumb/next02.png',
    videoUrl: 'url',
    updatedAt: new Date()

}, 
{
    id: 3,
    title: 'NEXT JS O VIDEO 3',
    authorId: 3,
    authorName: 'Thiago',
    authorAvatar: 'avatarUrl',
    views: 1055,
    thumb: '/thumb/next03.png',
    videoUrl: 'url',
    updatedAt: new Date()

}, 
{
    id: 4,
    title: 'NEXT JS O VIDEO 4',
    authorId: 4,
    authorName: 'Uallesson Nunes',
    authorAvatar: 'avatarUrl',
    views: 5055,
    thumb: '/thumb/next04.png',
    videoUrl: 'url',
    updatedAt: new Date()

},
{
    id: 5,
    title: 'NEXT JS O VIDEO 5',
    authorId: 5,
    authorName: 'Luan',
    authorAvatar: 'avatarUrl',
    views: 120,
    thumb: '/thumb/next05.png',
    videoUrl: 'url',
    updatedAt: new Date()

},
{
  id: 6,
  title: 'NEXT JS O VIDEO 6',
  authorId: 6,
  authorName: 'Neuza',
  authorAvatar: 'avatarUrl',
  views: 1012,
  thumb: '/thumb/next06.png',
  videoUrl: 'url',
  updatedAt: new Date()

}, 
{
  id: 7,
  title: 'NEXT JS O VIDEO 7',
  authorId: 7,
  authorName: 'Thiago',
  authorAvatar: 'avatarUrl',
  views: 10525,
  thumb: '/thumb/next07.png',
  videoUrl: 'url',
  updatedAt: new Date()

}, 
{
  id: 8,
  title: 'NEXT JS O VIDEO 8',
  authorId: 8,
  authorName: 'Juliana',
  authorAvatar: 'avatarUrl',
  views: 51055,
  thumb: '/thumb/next08.png',
  videoUrl: 'url',
  updatedAt: new Date()

}
];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;
