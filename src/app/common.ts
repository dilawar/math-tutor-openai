import OpenAI from "openai";

export async function callOpenAIApi(b64Image: string) {
  const openai = new OpenAI();
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        response_format: { type: 'json_object' },
        content: [
          {
            type: 'text',
            text: 'Solve the problem in the image. Show the step-by-step solution. Write a maxima program to verify the solution. Return your response in JSON format.'
          },
          {
            type: 'image_url',
            image_url: {
              url: b64Image
            }
          }
        ]
      }
    ]
  });

  const first_choice = response.choices[0];
  console.log('response: ', first_choice);
  return first_choice;
}
