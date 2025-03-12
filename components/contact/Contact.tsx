import SectionHeader from "../SectionHeader";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <SectionHeader
        heading="Connect with me"
        subHeading="Get in touch"
        description="I would love to hear from you! If you have any questions, comments or
        feedback, please use the form below."
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
