import OpenAIApi from 'openai'

const OpenAIClient = new OpenAIApi({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true })

export const generateSentence = async (words: string[]) => {
    const completion = await OpenAIClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        response_format: { "type": "json_object" },
        messages: [
            {
                "role": "system",
                "content": `Given this list of keywords: "${words.join(", ")}" construct a list of 5 short sentences that use most of the words. Respond only with a json array containing the result and no other text. \n
                An example of how you should process the data is here: \n
                "Good, This, Fast, Above" \n
                ["This is good as stated above.", "The above is good", "The above is satisfactory", "This is a good one above."]`
            }
        ]
    });
    if (completion !== null) {
        const content = completion.choices[0].message.content;
        if (content !== null) {
            return (JSON.parse(content).result);
        }
    }

    return []
}