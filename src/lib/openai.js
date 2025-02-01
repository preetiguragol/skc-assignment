// lib/openai.js
export const sendMessageToOpenAI = async (messages) => {
  const apiKey = localStorage.getItem("apiKey"); // Retrieve stored API key

  if (!apiKey) {
    throw new Error("API key is missing. Please enter your key in Settings.");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Using the stored API key
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", 
        messages: messages, // Ensure messages are structured correctly
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.choices[0]?.message?.content?.trim(); // Extract AI response correctly
    } else {
      throw new Error(data.error?.message || "Error with OpenAI API.");
    }
  } catch (error) {
    console.error("Error in sendMessageToOpenAI:", error);
    throw error;
  }
};
