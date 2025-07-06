import { useState } from "react"
import { Link } from "react-router-dom"
import { appRoutes } from "../../constants/appRoutes"

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  const faqs = [
    {
      question: "How to rent tools?",
      answer:
        "You can rent tools by contacting us directly or visiting our location. We'll help you select the right tools for your project and arrange pickup or delivery.",
    },
    {
      question: "Do you provide support?",
      answer:
        "Yes, we provide full customer support including equipment training, troubleshooting, and technical assistance throughout your rental period.",
    },
    {
      question: "What are the rental terms?",
      answer:
        "Our rental terms vary depending on the duration of the hire. We offer flexible options to suit your project needs. Contact us for more details.",
    },
    {
      question: "Can I extend my hire?",
      answer:
        "Yes, you can extend your rental period subject to availability. Contact us as soon as possible to arrange an extension.",
    },
    {
      question: "What if I need delivery?",
      answer:
        "We offer delivery services for most equipment. Delivery charges may apply depending on location and equipment type. Contact us for delivery options and pricing.",
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-accent">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about tool hire, rental terms and
            customer support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral rounded-lg overflow-hidden shadow-lg">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full px-6 py-4 text-left bg-base-200 hover:bg-base-300 transition-colors duration-200 focus:outline-none focus:bg-base-300"
                  onClick={() => toggleAccordion(index)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="px-6 py-4 bg-base-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            <div className="px-6 py-8 bg-base-100">
              <h3 className="text-lg font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-700 mb-6">
                Contact us for more information.
              </p>
              <Link
                to={appRoutes.contact}
                className="btn-primary-custom inline-block">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
