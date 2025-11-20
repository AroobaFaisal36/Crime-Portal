*Task 1 – Crime Portal React Website*

Project Overview

This project is a dynamic *React JS Crime Reporting Portal*.
It converts a previous static HTML website into a modular React application with dynamic content, API integration, Firebase Firestore, local storage, video integration, and AI chat.

Team Members

| Name          | ID       |
| ------------- | -------- |
| Oswa Saleem   | 23i-2124 |
| Amna Hassan   | 23i-2015 |
| Arooba Faisal | 23i-2033 |

Features

* *Component-based React design* – Reusable components (Navbar, Footer, CardPlaceholder, AIChat, VideoPlaceholder)
* *Dynamic data* – All cards, banners, and content loaded from /src/data/content.json
* *DummyJSON API integration* – Fetches live product listings dynamically
* *Local Storage* – Saves favorites and theme preferences
* *Firebase Firestore* – Stores user-submitted crime reports
* *Video element* – Local MP4 or embedded YouTube video
* *AI Chat Box* – Ask safety tips using a free AI model API
* *Routing* – React Router DOM to navigate Home, Report, Safety pages
* *Styling* – Tailwind CSS and custom styles for responsiveness

Folder Structure


/src
  /assets
    crimelogo.png
    video.mp4
  /components
    Navbar.jsx
    Footer.jsx
    CardPlaceholder.jsx
    AIChat.jsx
    VideoPlaceholder.jsx
  /data
    content.json
  /services
    firebase.js
    api.js
App.jsx
index.js
tailwind.css
styles.css

Public API Used

*DummyJSON API* – Example endpoint:


https://dummyjson.com/products?limit=8

Firebase

*Collection Name:* crimeReports
*Example code:*

js
await addDoc(collection(db, "crimeReports"), {
  ...form,
  createdAt: new Date().toISOString()
});


---

Video Integration

Local MP4 stored in /public/video.mp4
Embedded in VideoPlaceholder.jsx

Screenshots

<img width="918" height="594" alt="Screenshot 2025-11-20 224316" src="https://github.com/user-attachments/assets/c69dee07-6ad5-4693-88b7-554ad23bfa18" />



![Homepage](./screenshots/home.png)
Caption: Dynamic cards loaded from JSON, main banner displayed.


*Crime Report Form*
<img width="909" height="598" alt="Screenshot 2025-11-20 224420" src="https://github.com/user-attachments/assets/0144326e-8f57-4f24-9596-1baf4c434ad6" />


![Report Form](./screenshots/report.png)
Caption: Form submitting data to Firebase Firestore collection "crimeReports".


![AI Chat](./screenshots/aichat.png)
Caption: Ask safety-related questions, demo replies via AI model.
<img width="915" height="595" alt="Screenshot 2025-11-20 224456" src="https://github.com/user-attachments/assets/f15df886-7c45-40c8-b874-fe4cd3bd80ca" />


![Video](./screenshots/video.png)
Caption: Embedded local MP4 video for community safety awareness.


Setup Instructions

1. Clone repo: git clone https://github.com/your-repo-url.git
2. Install dependencies: npm install
3. Configure Firebase in /src/services/firebase.js
4. Run development server: npm run dev
5. Build production: npm run build

Team Contributions

| Name          | Contribution                                     |
| ------------- | ------------------------------------------------ |
| Oswa Saleem   | Routing, API integration, Firebase form          |
| Amna Hassan   | Component design, Homepage layout, Video section |
| Arooba Faisal | Local Storage, AI Chat, Favorites functionality  |
