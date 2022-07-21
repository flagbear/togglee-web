import React from 'react';
import Layout from '@theme/Layout';
import loadable from '@loadable/component'


const GeneratorComponent = loadable(() => import('@site/src/components/Generator'))

export default function Generator() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <main>
          <GeneratorComponent />
      </main>
    </Layout>
  );
}