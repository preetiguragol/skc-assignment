export const sendMessageToOpenAI = async (messages, userApiKey) => {
  const apiKey = userApiKey || process.env.NEXT_PUBLIC_OPENAI_API_KEY; // Use user-provided key if available

  if (!apiKey) {
    throw new Error("API key is missing. Please enter an API key.");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Use the provided API key
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",  // Change to another model if needed
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
      alert(`Error: ${errorMessage}`);  // Display the error message in an alert
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error in sendMessageToOpenAI:", error);
    alert(`API Error: ${error.message}`);  // Show the error message in an alert
    throw error;
  }
};
