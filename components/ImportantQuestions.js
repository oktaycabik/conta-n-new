import React from "react";
import questions from "../data/questions.json";
const ImportantQuestions = () => {
  return (
    <section className="questions-container pt-5 pb-4">
      <div className="container">

        {questions.map((question) => (
          <div key={question.id} className="row pe-5 ps-5 mt-4 mb-5">
            <div
              data-bs-toggle="collapse"
              href={question.href}
              role="button"
              aria-expanded="false"
              aria-controls={question.aria}
            >
              <h5 className="">{question.question}</h5>
            </div>

            <div className="collapse multi-collapse" id={question.data}>
              <div className="card card-body">{question.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantQuestions;
