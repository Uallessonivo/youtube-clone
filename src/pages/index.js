import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Youtube">
      <Button variant="outlined" color="secondary">Hello World</Button>;
    </Layout>
  );
}
