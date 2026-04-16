import { useState } from 'react'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-list" role="list">
      {items.map((item, i) => (
        <div className="faq-item" key={i} role="listitem">
          <button
            className={`faq-question${openIndex === i ? ' open' : ''}`}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            {item.question}
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div
            className="faq-answer"
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            style={{ maxHeight: openIndex === i ? '500px' : '0' }}
          >
            <div className="faq-answer-inner">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
