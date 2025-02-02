export const sendMessageToOpenAI = async (messages, userApiKey) => {
  const apiKey = userApiKey || process.env.NEXT_PUBLIC_OPENAI_API_KEY; 

  if (!apiKey) {
    throw new Error("API key is missing. Please enter an API key.");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, 
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",  
        messages,
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.choices[0]?.message?.content.trim();
    } else {
      const errorMessage = data.error?.message || "Error with OpenAI API.";
      alert(`Error: ${errorMessage}`);  
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error in sendMessageToOpenAI:", error);
    alert(`API Error: ${error.message}`);  
    throw error;
  }
};
