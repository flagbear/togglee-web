import React from 'react';
import Layout from '@theme/Layout';
import GeneratorComponent from '@site/src/components/Generator';

export default function Generator() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <main>
          <GeneratorComponent />
      </main>
    </Layout>
  );
}