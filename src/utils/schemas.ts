// Thanks https://github.com/trpc/examples-next-formdata/blob/main/src/utils/schemas.ts

import { zfd } from 'zod-form-data';

export const uploadFileSchema = zfd.formData({
  name: zfd.text(),
  image: zfd.file()
});
