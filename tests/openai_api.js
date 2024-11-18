// Usage `node --env-file=../.env openai_api.js`

import fs from 'fs';
import OpenAI from 'openai';

const openai = new OpenAI();

async function main() {
  // Thanks https://stackoverflow.com/a/46616561/1805129
  const filepath = '../data/quad.png';
  const imageType = 'png'; // FIXME: should get it from file.
  const screenshort_of_math_prob =
    `data:image/${imageType};base64,` + fs.readFileSync(filepath, 'base64');

  // Using https://platform.openai.com/docs/guides/vision?lang=node
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Solve the problem in the image. Show the step-by-step solution. Write a maxima program to verify the solution. Return response in JSON.'
          },
          {
            type: 'image_url',
            image_url: {
              url: screenshort_of_math_prob
            }
          }
        ]
      }
    ]
  });

  const first_choice = response.choices[0];
  console.log('response: ', first_choice);
}

main();
