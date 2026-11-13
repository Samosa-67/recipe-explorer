const questions = [
  {
    question: "How do I search for recipes?",
    answer: "Use the search bar on the Home page.",
  },
  {
    question: "Can I save recipes?",
    answer: "Yes! Use the favorite button to save recipes.",
  },
  {
    question: "Where does the recipe data come from?",
    answer: "Recipe information comes from TheMealDB API.",
  },
  {
    question: "Can I see ingredients?",
    answer: "Yes! Open a recipe to view its ingredients and instructions.",
  },
];

export default function FAQ() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        Frequently Asked Questions
      </h1>

      <div className="accordion" id="faqAccordion">
        {questions.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  index !== 0 ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq${index}`}
              >
                {item.question}
              </button>
            </h2>

            <div
              id={`faq${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}