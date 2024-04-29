"use server";
import OpenAIApi from 'openai'

const OpenAIClient = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true })

export const generateSentence = async (words: string[]) => {
    const completion = await OpenAIClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        response_format: { "type": "json_object" },
        messages: [
            {
                "role": "system",
                "content": `Given this list of keywords: "${words.join(", ")}" construct a list of 5 short sentences that use all of the words. Respond only with a json array containing the result and no other text. \n
                An example of how you should process the data is here: \n
                "Good, This, Fast, Above" \n
                {
                    "result": [
                        "This is good above.",
                        "The above is good",
                        "The above is satisfactory",
                        "This is a good thing above."
                    ]
                }`
            }
        ]
    });
    if (completion !== null) {
        const content = completion.choices[0].message.content;
        if (content !== null) {
            console.log(content)
            console.log(JSON.parse(content)[Object.keys(content)[0]])
            console.log(Object.keys(content)[0])
            return (JSON.parse(content).result);
        }
    }

    return []
}