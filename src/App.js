import React from 'react';
import Head from './head';
import Side from './side';
import Main from './main';

export default function App(){
  return(
    <section className='app-main'>
      <div className='app-left'>
        <Side/>
      </div>
      <div className='app-right'>
        <Head/>
        <Main/>
      </div>
    </section>
  );
}