import { assets } from "@/assets/assets";
import Image from "next/image";
import { FormEvent, useState } from "react";

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
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
        {fields.map((field) => (
          <input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-gray-500 duration-300"
          />
        ))}
      </div>
      <textarea
        placeholder="Your message"
        rows={6}
        name="message"
        required
        className="w-full p-3 border border-gray-300 rounded-md  outline-none focus:border-gray-500 duration-300 my-6"
      />
      <button
        type="submit"
        className="w-max mx-auto py-3 px-8 flex items-center justify-between gap-2 bg-black/80 hover:bg-black duration-300 text-white rounded-full"
      >
        Submit now
        <Image
          alt="right arrow"
          src={assets.right_arrow_white}
          className="w-4 mt-1"
        />
      </button>
      <p className="mt-4">{result}</p>
    </form>
  );
};

export default ContactForm;
