'use client';

import React, { useState } from 'react';

import Script from 'next/script';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import Markdown from 'react-markdown';

import { api } from '~/trpc/react';

export function ScreenshotUpload() {
  const [tutorResponse, setTutorResponse] = useState('Tutor response');
  const [uploadedFile, setUploadedFile] = useState(null);

  const tutorApi = api.post.tutor.useMutation();

  const clearImage = (event ) => {
      console.log("Button to clear image is pressed.");
      setUploadedFile(null);
  }

  const openApiUploader = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
      setTutorResponse('_Waiting for tutor response_');

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
    <div>
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        strategy="lazyOnload"></Script>

      {/* Image could not be used because src was set to "" */}
      <Image
        alt={uploadedFile?.name ?? 'Unnamed image'}
        role="presentation"
        src={uploadedFile?.objectURL ?? 'data:,'}
        width={400}
        height={200}
        className="w-{300px}"></Image>

      <div className="flex grid grid-cols-2 gap-4">
        <FileUpload
          mode="basic"
          name="math_tutor[]"
          id="screenshot_uploader"
          accept="image/*"
          maxFileSize={10000000}
          multiple={false}
          chooseLabel="Browse/Take Photo"
          auto
          customUpload
          uploadHandler={openApiUploader}></FileUpload>

      <Button label="Clear Image" outlined severity="warning" onClick={clearImage} />
      </div>

      <hr />
      <div className="py-10 w-[500px]">
        <Markdown>{tutorResponse}</Markdown>
      </div>
    </div>
  );
}
