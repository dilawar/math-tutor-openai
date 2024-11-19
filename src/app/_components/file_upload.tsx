'use client';

import Script from 'next/script';

// This is what I found on npmjs.com. Not sure if it is great or not!
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

import { useState } from 'react';
import { api } from '~/trpc/react';

export function ScreenshotUpload() {
  const [tutorResponse, setTutorResponse] = useState('');

  const tutorApi = api.post.tutor.useMutation();

  const openApiUploader = async (event) => {
    console.log('Uploaded files: ', event.files);
    const file = event.files[0];
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
    <div>
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        strategy="lazyOnload"></Script>
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
