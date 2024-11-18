import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

// This is what I found on npmjs.com. Not sure if it is great or not!
import { UploadDropzone } from '@bytescale/upload-widget-react';

import { api } from '~/utils/api';

const options = { apiKey: 'free', maxFileCount: 1, width: "600px", height: "375px"};

export default function Home() {
  const hello = api.post.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <Head>
        <title>Math Made Easy</title>
        <meta name="description" content="Math Made Easy | Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Math Made <span className="text-[hsl(280,100%,70%)]">Easy</span>
          </h1>
          <div className="text text-white">
              π/ Take a photo of your math problem and get step-by-step solutions instantly /π
          </div>
        </div>

        <div className="flex justify-center">
          <UploadDropzone
            options={options}
            onUpdate={({ uploadedFiles }) => {
              console.log('Uploading ', uploadedFiles.map((x) => x.fileUrl).join('\n'));
            }}
            width="600px"
            height="375px"
          />
        </div>
      </main>
    </>
  );
}
