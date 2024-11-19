'use client';

import Script from 'next/script';
import Image from 'next/image';

// This is what I found on npmjs.com. Not sure if it is great or not!
import { FileUpload } from 'primereact/fileupload';

import { useState } from 'react';
import { api } from '~/trpc/react';

export function ScreenshotUpload() {
  const [tutorResponse, setTutorResponse] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const tutorApi = api.post.tutor.useMutation();

  const openApiUploader = async (event) => {
    console.log('Uploaded files: ', event.files);
    const file = event.files[0];
    setUploadedFile(file);

    console.log(' Uploaded file: ', uploadedFile);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      const binData = reader.result;
      console.log('Uploaded image: ', binData);

      // Send this to the server using api.
      setTutorResponse('Waiting for tutor response');

      // console.log('111', event.target);
      tutorApi.mutate(binData, {
        onSuccess: (resp) => {
          setTutorResponse(resp);
          event.target.clear();
        }
      });
    };
  };

  return (
    <div className="justify">
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        strategy="lazyOnload"></Script>

      {/* Image could not be used because src was set to "" */}
      <Image
        alt={uploadedFile?.name}
        role="presentation"
        src={uploadedFile?.objectURL ?? 'data:,'}
        width={400}
        height={200}
        className="w-{300px}"></Image>

      <FileUpload
        className="py-2 ease-in-out text-white rounded"
        mode="basic"
        name="math_tutor[]"
        id="screenshot_uploader"
        accept="image/*"
        maxFileSize={10000000}
        multiple={false}
        chooseLabel="Browse/Take Photo"
        auto
        customUpload
        uploadHandler={openApiUploader}
      />
      <div className="py-5 w-[500px]">{tutorResponse}</div>
    </div>
  );
}
