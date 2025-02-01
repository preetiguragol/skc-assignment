export const sendMessageToOpenAI = async (messages) => {
  // Retrieve the API key from the environment variables first
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || localStorage.getItem("apiKey");

  if (!apiKey) {
    throw new Error("API key is missing. Please enter your key in Settings.");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Using the API key from env or localStorage
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", 
        messages: messages, 
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.choices[0]?.message?.content?.trim(); 
    } else {
      throw new Error(data.error?.message || "Error with OpenAI API.");
    }
  } catch (error) {
    console.error("Error in sendMessageToOpenAI:", error);
    throw error;
  }
};
