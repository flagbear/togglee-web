import React from 'react';
import Layout from '@theme/Layout';
import loadable from '@loadable/component'


const AppComponent = loadable(() => import('@site/src/components/App'))

export default function App() {
  return (
    <Layout title="App" description="Interact with your toggles">
      <main>
          <AppComponent />
      </main>
    </Layout>
  );
}