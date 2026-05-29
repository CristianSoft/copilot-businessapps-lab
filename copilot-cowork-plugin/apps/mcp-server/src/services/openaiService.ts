export async function invokeOpenAI(prompt: string, apiKey?: string) {
  if (!apiKey) {
    return { text: "OpenAI API key is not configured. This is a placeholder response." };
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300
    })
  });

  const payload = await response.json();
  return { text: payload?.choices?.[0]?.message?.content ?? "" };
}
