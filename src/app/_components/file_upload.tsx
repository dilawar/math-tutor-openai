'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';

import { MathpixMarkdown, MathpixLoader } from 'mathpix-markdown-it';

import { api } from '~/trpc/react';

export function ScreenshotUpload() {
  const [tutorResponse, setTutorResponse] = useState('Tutor response');
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileUploadRef = useRef(null);

  const tutorApi = api.post.tutor.useMutation();

  const clearImage = () => {
    console.log('Button to clear image is pressed.');
    console.log(' fileUploadRef: ', fileUploadRef);
    if (fileUploadRef) {
      fileUploadRef.current.clear();
    }
    setUploadedFile(null);
  };

  // Upload screenshot to OneAPI.
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
      {/* Image could not be used because src was set to "" */}
      <Image
        alt={uploadedFile?.name ?? 'Unnamed image'}
        role="presentation"
        src={uploadedFile?.objectURL ?? 'data:,'}
        width={400}
        height={200}
        className="w-{300px}"
      ></Image>

      <div className="flex grid grid-cols-2 gap-4">
        <FileUpload
          ref={fileUploadRef}
          mode="basic"
          name="math_tutor[]"
          id="screenshot_uploader"
          accept="image/*"
          maxFileSize={10000000}
          multiple={false}
          chooseLabel="Browse Image"
          auto
          customUpload
          uploadHandler={openApiUploader}
        ></FileUpload>

        <Button label="Clear Image" outlined severity="warning" onClick={clearImage} />
      </div>

      <hr />
      <div className="py-10 w-[700px]">
        <MathpixLoader>
          <MathpixMarkdown text={tutorResponse}></MathpixMarkdown>
        </MathpixLoader>
      </div>
    </div>
  );
}
