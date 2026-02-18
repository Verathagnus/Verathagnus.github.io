import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };
  return (
    <section id="contact" className="py-48">
      {/* Headings */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5 text-theme-text">
            <span className="text-theme-green">CONTACT ME</span>{" "}
            <span className="text-theme-muted">TO GET STARTED</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-[55.5%]" />
          </div>
        </div>
      </motion.div>

      {/* Form and Image */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/3993986f858d92bbaf15b33063440629"
            method="POST"
          >
            {[
              {
                placeholder: "NAME",
                type: "text",
                fieldName: "name",
                registerParams: {
                  required: true,
                  maxLength: 100,
                },
              },
              {
                placeholder: "EMAIL",
                type: "text",
                fieldName: "email",
                errorFieldLabel: "email address",
                registerParams: {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              },
              {
                placeholder: "MESSAGE",
                type: "textarea",
                fieldName: "message",
                registerParams: {
                  required: true,
                  maxLength: 2000,
                },
              },
            ].map(({ placeholder, registerParams, type, fieldName, errorFieldLabel }) => (
                <div key={fieldName}>
                  {type === "textarea" ? (
                    <textarea
                      className="w-full bg-theme-card border border-theme-purple/20 text-theme-text font-semibold placeholder-theme-muted p-3 mb-5 rounded-lg"
                      placeholder={placeholder}
                      rows="4"
                      cols="50"
                      {...register(fieldName, registerParams)}
                    />
                  ) : (
                    <input
                      className="w-full bg-theme-card border border-theme-purple/20 text-theme-text font-semibold placeholder-theme-muted p-3 mb-5 rounded-lg"
                      type={type}
                      placeholder={placeholder}
                      {...register(fieldName, registerParams)}
                    />
                  )}

                  {errors[fieldName] ? (
                    <p className="text-theme-purple mt-1 text-sm">
                      {errors[fieldName].type === "required"
                        ? "This field is required."
                        : null}
                      {errors[fieldName].type === "maxLength"
                        ? `Max length is ${registerParams.maxLength} chars.`
                        : null}
                      {errors[fieldName].type === "pattern"
                        ? `Invalid ${errorFieldLabel || fieldName}.`
                        : null}
                    </p>
                  ) : null}
                </div>
            ))}

            <button
              type="submit"
              className="p-5 bg-theme-green font-semibold text-white rounded-lg hover:bg-theme-teal transition duration-300"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
