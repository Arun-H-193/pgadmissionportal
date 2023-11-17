import React, { useState } from "react";
import '../Assets/css/FAQ.css'

const Faq = () => {
  const [questions, setQuestions] = useState([
    {
        question: "How do I apply?",
        answer:
          "To apply, login to your student account, fill in your personal and academic details, and select the colleges you wish to apply to. Submit your application and wait for the colleges to review your application.",
      },
      {
        question: "How long does it take to process an application?",
        answer:
          "The processing time for applications varies depending on the college. It can take anywhere from a few days to a few weeks. You can check the status of your application on your student account.",
      },
      {
        question: "Can I apply to multiple colleges?",
        answer:
          "Yes, you can apply to multiple colleges using our portal. Simply select the colleges you are interested in during the application process.",
      },
      {
        question: "How can I track my application status?",
        answer:
          "You can track the status of your application by logging into your student account. The colleges will update the status of your application once they review it.",
      },
      {
        question: "What if my application is rejected?",
        answer:
          "If your application is rejected by a college, you will receive a notification on your student account. You can contact the college for more information or consider applying to other colleges.",
      },
  ]);

  return (
    <div className="faq-container">
      <h1 className="faq-heading">FAQs</h1>
      <ul className="faq-questions">
        {questions.map((question) => (
          <li className="faq-question" key={question.question}>
            <h3 className="faq-question-header">{question.question}</h3>
            <p className="faq-question-answer">{question.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
