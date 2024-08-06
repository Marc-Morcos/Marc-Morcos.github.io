---
title: "Realtime AI Verbal Conversation Assistant - Capstone"
date: "2024-05-21"
metadate: "hide"
categories: [ Portfolio ]
image: "/assets/images/posts/realtime-ai-verbal-conversation-assistant-capstone/logonobackground.png"
layout: post
---


![](/assets/images/posts/realtime-ai-verbal-conversation-assistant-capstone/logonobackground.png?w=376){: class="post-image" }

{:refdef: style="text-align: center;"}
*Logo for Conversational Assistant App*
{: refdef}

### Overview

As part of my capstone project, I contributed to the development of ConvoAssistant, an Android application designed to improve reflective listening skills. Reflective listening is a crucial communication technique where the listener paraphrases their conversation partner's message to foster deeper understanding and connection (similarly to the [smoking cessation AI chatbot]({{site.baseurl}}/ai-chatbot-summer-research/)). Our project leverages advanced AI technology to assist users in mastering this skill, enhancing their overall communication effectiveness.

### Certificate of Distinction

I'm proud to share that our team, Capstone Team 2023692, was awarded a Certificate of Distinction for our outstanding work on the ConvoAssistant project. This recognition was a testament to our innovative approach, technical proficiency, and dedication to enhancing reflective listening skills through advanced AI technology. Receiving this certificate not only validated our hard work and collaboration but also underscored the impact of our project in the field of communication enhancement.

### Project Objectives

The primary objective of the project was to create an application that aids users in developing reflective listening skills through two distinct modes:

1. **Real-Time Assistant (RTA) Mode:** This mode assists users during live conversations by providing reflective statements based on the ongoing dialogue. It is designed for deep, thoughtful conversations where users have time to consider their responses. Specifically, it listens to a verbal conversation and suggests responses through the user's earbuds.

3. **Practice Mode:** This mode generates scenarios for users to practice reflective listening. After reflecting on these scenarios, the application evaluates the user’s responses and offers constructive feedback for improvement.

### Implementation

The application serves as a verbal interface for a Large Language Model (LLM), specifically OpenAI’s GPT-3.5 turbo model. Here’s a breakdown of the technical implementation:

- **Audio Input and Output:** The application takes audio input from the user, converts it to text, and processes it using the LLM. The generated text response is then converted back to audio to be played aloud to the user.

- **Speaker Diarization:** In RTA Mode, Google Cloud’s Speech diarization platform is utilized to identify distinct speakers within a conversation, ensuring accurate reflective statements.

- **Feedback Mechanism:** In Practice Mode, the application not only evaluates the user’s reflective responses but also provides suggestions for improvement, fostering a continuous learning environment.

- **Android Application**: The application was developed using Kotlin within an Android Studio Project.


![](/assets/images/posts/realtime-ai-verbal-conversation-assistant-capstone/image.png?w=300){: class="post-image" }

{:refdef: style="text-align: center;"}
*Android Application Interface*
{: refdef}

### Development and Evaluation

The project development followed a structured approach, with regular updates and milestones tracked through Gantt charts. We adhered to strict requirements and specifications to ensure the application’s functionality, responsiveness, and efficiency. The final product was thoroughly tested and passed evaluations with high marks for both response time and accuracy.

### Key Contributions

- **Design and Implementation:** Participated in designing the android application's architecture and implementing key features such as audio processing and integration with GPT-3.5 turbo.

- **Testing and Evaluation:** Conducted extensive testing to ensure the application met performance benchmarks and provided accurate, timely responses.

- **User Experience:** Focused on creating an intuitive user interface that facilitates seamless interaction, making it easy for users to engage with the application in both modes.

### Outcome

ConvoAssistant successfully accomplishes its goal of facilitating reflective listening in users, providing a practical tool for improving communication skills. The project showcases my ability to apply advanced AI technology to solve real-world problems and enhance user experiences.

### Conclusion

This project exemplifies the intersection of technology and communication, demonstrating how AI can be harnessed to improve essential interpersonal skills.


![](/assets/images/posts/realtime-ai-verbal-conversation-assistant-capstone/poster.png?w=1024){: class="post-image" }

{:refdef: style="text-align: center;"}
*Final Project Poster*
{: refdef}
