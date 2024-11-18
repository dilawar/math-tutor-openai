import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// This is what I found on npmjs.com. Not sure if it is great or not!
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

// import { api } from '~/utils/api';

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: 'from tRPC' });
  const toast = useRef(null);

  const openApiUploader = async (event) => {
    console.log('Upload image event: }', event);
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectUrl).then((r) => r.blob());
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      const base64data = reader.result;
      console.log('Uploaded image base64: ', base64data);
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

        <div className="flex justify-content-center text-white">
          <Toast ref={toast}></Toast>
          <FileUpload
            mode="basic"
            url="api/upload"
            name="math_tutor[]"
            id="screenshot_uploader"
            accept="image/*"
            maxFileSize={1000000}
            multiple="false"
            chooseLabel="Browse/Take Photo"
            customUpload
            uploadHandler={openApiUploader}
          />
        </div>
      </main>
    </>
  );
}
