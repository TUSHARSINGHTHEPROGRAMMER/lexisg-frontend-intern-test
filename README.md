




# 🧑‍⚖️ Lexisg-frontend-intern-test

This is a React-based frontend project simulating a Lexi-style legal assistant. It mimics a chat interface (like ChatGPT) where users can input a legal question, view an AI-generated answer, and click citations to trace them back to the original legal PDF document.

---

## 🚀 Live Demo

🔗 [View Deployed App](https://lexisg-frontend-intern-test-wheat.vercel.app/)  


---



---

## 🛠️ Tech Stack

* ⚛️ React.js
* 💨 Tailwind CSS
* 🧠 Simulated AI response (no backend needed)
* 📄 SharePoint-hosted citation link
* 🎨 Chat-style message bubbles
* 🧩 React Icons for loading indicator

---

## ✨ Features

* 🧑‍💻 User can input legal questions
* 🤖 Simulated AI-generated legal answers
* 📌 Clickable citation appears under each answer
* 🔗 Clicking citation opens PDF in new tab
* 🗂️ Clean, chat-style UI: User input on the right, AI answer on the left
* 🕓 Submit button shows spinner during loading
* ⚠️ Safe fallback if PDF can't embed due to CSP

---

## 📂 Project Structure

```
lexisg-frontend-intern-test/

├── src/
│   ├── components/
│   │   ├── QueryInput.jsx
│   │   └── AnswerCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── README.md
```

---

## ⚙️ Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/lexisg-frontend-intern-test.git
cd lexisg-frontend-intern-test
npm install
npm run dev     # For Vite
# or
npm start       # For CRA (if used)
```

---

## 📄 Citation Handling Details

* Clicking the citation opens the legal judgment PDF in a **new tab** (SharePoint-hosted).
* ❗ **Note**: Microsoft SharePoint blocks iframe embedding due to CSP (Content Security Policy).
* ✅ If needed, you can host the PDF locally in `/public/` and simulate highlighting/scrolling to a paragraph using `#page=1` in the PDF viewer URL.

---

## ✅ Submission Details

**Submitted by:**
**Tushar Singh**
📧 [check.tushar03@gmail.com](mailto:check.tushar03@gmail.com)
📞 +91 9306292328

---

## 🧪 Assignment Summary

This project satisfies all assignment requirements:

* ✅ Ask a legal question
* ✅ Show generated legal answer
* ✅ Display citation
* ✅ Click citation to open PDF
* ✅ Chat-style interface with Tailwind styling
* ✅ Deployed online (bonus)

---


```
