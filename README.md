
# AI Python Tutor 

This project is an interactive Python tutoring application powered by AI. It’s designed to help children learn Python programming through personalized interactions and quizzes.



## Features

- Select an AI Tutor Character: Choose your preferred AI tutor character for personalized interaction.
- Ask Questions: Interact with the AI tutor by asking Python programming-related questions and receive detailed answers.
- Take Quizzes: Test your Python knowledge with quizzes, and track your learning progress.
- API Key Configuration: Set up your own OpenAI API key to customize your AI tutor’s responses.


## Technologies Used

- Next.js: A React framework for server-side rendering, static site generation, and API routes.
- OpenAI API: Used for powering the AI tutor's responses and quizzes.
- Tailwind CSS: For styling and responsive design.
- Framer Motion: For smooth animations and transitions.
- localStorage: For saving and configuring the OpenAI API key.

## Prerequisites

- Node.js (preferably version 14 or higher)
- npm or yarn
## Installation

Clone the repository :

```bash
  git clone https://github.com/preetiguragol/skc-assignment
  cd skc-assignment
```
Install dependencies: 
```bash
npm install
```

Set up your OpenAI API key:

Create an .env.local file in the root of the project.
Add your OpenAI API key to the .env.local file:

```bash
NEXT_PUBLIC_OPENAI_API_KEY=your-api-key-here
```

Run the development server :
```bash
npm run dev
```
## How to use
1. Open the application in your browser (http://localhost:3000 or https://skc-preetiguragol.vercel.app/).
2. Go to the Settings page to enter and save your OpenAI API key.
3. Choose your AI tutor character and start interacting with the AI by asking Python-related questions.
4. Take quizzes to test and reinforce your Python knowledge.
## Deployment

Deployment:

To deploy this Next.js application to Vercel:
- Push changes to your Git repository.
- Connect your Git repository to Vercel .
- Set your environment variables in Vercel's dashboard under Settings > Environment Variables

