import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do I find scholarships on the platform?",
    answer:
      "You can use our search and filter tools to find scholarships that match your profile and preferences.",
    value: "item-2",
  },
  {
    question:
      "Can I save scholarships that I am interested in?",
    answer:
      "Yes, you can save scholarships to your personal list to keep track of the ones you want to apply for later.",
    value: "item-3",
  },
  {
    question: "How does the SOP and Resume builder work?",
    answer:
      "Our platform provides AI-powered tools to help you create impressive Statements of Purpose (SOP) and resumes tailored to scholarship applications.",
    value: "item-4",
  },
  {
    question:
      "Can I track application deadlines?",
    answer:
      "Yes, our platform allows you to save and manage application deadlines so you never miss an important date.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
