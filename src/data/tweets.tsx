/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '@site/src/components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'daferpi',
    name: 'Abel Fernandez',
    date: 'Oct 26, 2021',
    content: (
      <>
      🤩 Just discovered the power of feature flags with @Togglee. No more worrying about breaking changes or regression bugs! This simple trick will change your dev life forever 😊 #togglee
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'daferpi',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'kmruiz',
    name: 'Kevin Mas Ruiz',
    date: 'Feb 21, 2024',
    content: (
      <>
        Want to know how we ship high-quality products faster? 🤔 It's all about using @Togglee's feature flags! Our team loves the flexibility and control they provide. #togglee
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'kmruiz',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aperezm85',
    name: 'Alex Perez',
    date: 'May 17, 2024',
    content: (
      <>
        🚨 Attention all developers: don't let deployment stress get you down! 🙅‍♂️ Use @Togglee's real-time feature flagging system to manage features like a pro. Try it out now and join the ranks of happy, stress-free devs 👍
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'aperezm85',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'CrisMoreiras',
    name: 'Cris Moreiras',
    date: 'May 4, 2024',
    content: (
      <>
        🔥 Just fixed an embarrassing bug thanks to @Togglee's feature flags. Now I can roll out changes with confidence and without worrying about breaking the app 👍 #togglee #devwin
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'CrisMoreiras',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aleixmorgadas',
    name: 'Aleix Morgadas',
    date: 'May 28, 2024',
    content: (
      <>
        Just used @Togglee to flag a problematic feature that was slowing down my app. The real-time updates saved the day 💯 Now I can focus on shipping quality code, not debugging issues 👍 #togglee #devlife
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'aleixmorgadas',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'miguelarian',
    name: 'Miguel Vela',
    date: 'May 17, 2024',
    content: (
      <>
       🚀 Just upgraded my workflow with @Togglee's real-time feature flagging system! 🤩 Now I can manage features in gist with ease. No more deployment headaches 👍 #togglee #devops
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'miguelarian',
  },
];

export default TWEETS;