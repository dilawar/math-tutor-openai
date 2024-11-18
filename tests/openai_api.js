// Usage `node --env-file=../.env openai_api.js`

import fs from 'fs';
import OpenAI from 'openai';

const openai = new OpenAI();

// Thanks https://stackoverflow.com/a/24526156/1805129
function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}

async function main() {
  const screenshort_of_math_prob = base64_encode('../data/quad.png');
  console.log('base64 encoding of image: ', screenshort_of_math_prob);

  // Using https://platform.openai.com/docs/guides/vision?lang=node
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    message: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Solve the problem in the image' },
          {
            type: 'image',
            image_url: {
              url: screenshort_of_math_prob
            }
          }
        ]
      }
    ]
  });
  console.log('response: ', response);
}

main();
