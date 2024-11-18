import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// This is what I found on npmjs.com. Not sure if it is great or not!
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

import { api } from '~/utils/api';

export default function Home() {
  const hello = api.post.hello.useQuery({ text: 'from tRPC' });
  const toast = useRef(null);

  const openApiUploader = async (event) => {
    const file = event.files[0];
    console.log('Upload event', file);
    const reader = new FileReader();
    let blob = await fetch(file.objectUrl).then((r) => r.blob());
    reader.readAsDataURL(blob);

    reader.onloaded = function () {
      toast.current.show({
        severity: 'info',
        summary: 'Waiting for solution...',
        detail: 'Your problem shall be answered shortly'
      });
    };
  };

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

        <div className="card flex justify-content-center text-white text-5xl">
          <Toast ref={toast}></Toast>
          <FileUpload
            mode="basic"
            name="math_tutor[]"
            accept="image/*"
            maxFileSize={1000000}
            auto
            chooseLabel="Upload Screenshot"
            customUpload
            uploadHandler={openApiUploader}
          />
        </div>
      </main>
    </>
  );
}
