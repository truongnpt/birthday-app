import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { StyledHome } from '../styles/StyledHomePage';
import { Login } from '../containers/Login';
import { Main } from '../containers/Main';
import { Message } from '../containers/Message';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [component, setComponent] = useState('login');

  const renderComponent = () => {
    switch (component) {
      case 'login':
        return <Login setComponent={setComponent} />;
      case 'main':
        return <Main setComponent={setComponent} />;
      case 'message':
        return <Message setComponent={setComponent} />;
      case 'gift':
        // return <GiftScreen setComponent={setComponent} />;

      default:
        return <Login setComponent={setComponent} />;
    }
  };
  return (
    <>
      <Head>
        <title>Happy Birthday Lu Y</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHome>{renderComponent()}</StyledHome>
    </>
  )
}
