import React from "react";

const FAQSection = () => {
  const sectionStyle = {
    background: "#f7f7f7",
    padding: "2em 1em",
  };

  const h2Style = {
    textAlign: "center",
    marginBottom: "1em",
  };

  const dlStyle = {
    maxWidth: "600px",
    margin: "auto",
  };

  const dtStyle = {
    fontWeight: "bold",
  };

  const ddStyle = {
    marginBottom: "1em",
    color: "#666",
  };

  // Define your hardcoded FAQs here
  const faqs = [
    {
      question: "Can I create multiple petitions?",
      answer: "Yes, you can create multiple petitions.",
    },
    {
      question: "Can I sign a petition more than once?",
      answer: "No, you cannot sign a petition more than once.",
    },
    {
      question: "Do I need to be authenticated to sign a petition?",
      answer: "Yes, users need to be authenticated to sign a petition.",
    },
    {
      question: "How can I view the petitions I have signed?",
      answer:
        "You can view the petitions you have signed in a list sorted by date.",
    },
    {
      question: "Can I search for petitions by tag?",
      answer:
        "Yes, you can search for petitions by tag and they will be sorted by creation date.",
    },
    // Add more FAQs as needed
  ];

  return (
    <section id="faq" style={sectionStyle}>
      <h2 style={h2Style}>Common Questions</h2>
      <dl style={dlStyle}>
        {faqs.map((faq, index) => (
          <div key={index}>
            <dt style={dtStyle}>{faq.question}</dt>
            <dd style={ddStyle}>{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default FAQSection;
