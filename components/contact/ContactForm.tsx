import { assets } from "@/assets/assets";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import { motion } from "motion/react";
import { MouseContext } from "@/app/MouseProvider";

const fields = [
  {
    name: "name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your email",
    required: true,
  },
];

const ContactForm = () => {
  const [result, setResult] = useState("");
  const { setCursorType } = useContext(MouseContext);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY ?? ""
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
        {fields.map((field, index) => (
          <motion.input
            onMouseEnter={() => setCursorType("textNormal")}
            onMouseLeave={() => setCursorType("default")}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index % 2 ? 0.3 : 0.2,
            }}
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            className="w-full p-3 border border-gray-200 dark:bg-darkHover/30 dark:border-white/50 dark:focus:border-white rounded-md outline-none focus:border-gray-500 duration-300"
          />
        ))}
      </div>
      <motion.textarea
        onMouseEnter={() => setCursorType("textNormal")}
        onMouseLeave={() => setCursorType("default")}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        placeholder="Your message"
        rows={6}
        name="message"
        required
        className="w-full p-3 border border-gray-200 dark:bg-darkHover/30 dark:border-white/50 dark:focus:border-white rounded-md  outline-none focus:border-gray-500 duration-300 my-6"
      />
      <motion.button
        onMouseEnter={() => setCursorType("pointer")}
        onMouseLeave={() => setCursorType("default")}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", duration: 0.1 }}
        type="submit"
        className="w-max mx-auto cursor-none py-3 px-8 flex items-center justify-between gap-2 bg-black/80 hover:bg-black dark:bg-transparent dark:hover:bg-darkHover dark:border dark:border-white/50 duration-300 text-white rounded-full"
      >
        Submit now
        <Image
          alt="right arrow"
          src={assets.right_arrow_white}
          className="w-4 mt-1"
        />
      </motion.button>
      <p className="mt-4">{result}</p>
    </motion.form>
  );
};

export default ContactForm;
