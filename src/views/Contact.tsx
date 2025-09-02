"use client"

import { InputTextareaField } from "@/components/form/inputs/InputTextareaField";
import { InputSelectField } from "@/components/form/inputs/InputSelectField";
import { InputTextField } from "@/components/form/inputs/InputTextField";
import { useNotification } from "@/components/reusable/Notification";
import { CFormProvider } from "@/components/form/CFormProvider";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Notification from "@/components/reusable/Notification";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";
import * as yup from "yup";

interface ContactInfo {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  text: string;
  bgColor: string;
}

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    icon: <MdEmail />,
    link: "mailto:info@example.com",
    text: "info@example.com",
    bgColor: "bg-blue-500/20",
  },
  {
    id: 2,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm",
    icon: <MdPhone />,
    link: "tel:+15551234567",
    text: "+1 (555) 123-4567",
    bgColor: "bg-green-500/20",
  },
  {
    id: 3,
    title: "Visit Us",
    description: "Come say hello at our office",
    icon: <MdLocationOn />,
    link: "https://www.google.com/maps/place/Safrani+Baku/@40.3919942,49.8485243,15z/data=!4m5!3m4!1s0x40307d00164bf987:0xf627c02295b999f6!8m2!3d40.3919942!4d49.8485243",
    text: "123 Main Street, City, State 12345",
    bgColor: "bg-red-500/20",
  },
];

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  subject: yup.string().required('Subject is required'),
  newsletter: yup.boolean().required('Newsletter is required'),
});

type FormValues = yup.InferType<typeof schema>;

export default function Contact() {
  const { notification, showNotification, hideNotification } = useNotification();

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      newsletter: false,
    },
  });

  const handleSubmit = (data: FormValues) => {
    console.log('Form submitted with data:', data);
    showNotification('success', 'Success', 'Form submitted successfully');

    // Clear the form
    methods.reset();

    // Close notification after 3 seconds
    setTimeout(() => {
      hideNotification();
    }, 3000);
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Notification Component */}
      {notification && (
        <Notification
          type={notification.type}
          title={notification.title}
          message={notification.message}
          duration={notification.duration}
          isVisible={notification.isVisible}
          onClose={hideNotification}
        />
      )}
      {/* Hero Section */}
      <motion.section
        className="relative bg-black text-white py-20"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="mx-auto px-4 relative z-10">
          <div className="mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We&apos;d love to hear from you and answer any questions you may have
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Information Cards */}
      <motion.section
        className="py-16 bg-white"
        variants={sectionVariants}
      >
        <div className="mx-auto px-4">
          <ul className="grid md:grid-cols-3 gap-8 mx-auto">
            {contactInfo.map((info) => (
              <motion.li
                key={info.id}
                className={`p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 ${info.bgColor}`}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 mb-4">{info.description}</p>
                <Link
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  {info.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-16 bg-gray-50"
        variants={sectionVariants}
      >
        <div className="mx-auto px-4">
          <div className="mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and w&apos;ll get back to you as soon as possible
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl p-4 md:p-12 max-w-4xl mx-auto"
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <CFormProvider
                onSubmit={handleSubmit}
                methods={methods}
                className="space-y-8"
              >
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputTextField name="firstName" label="First name" placeholder="Elgün" />
                  <InputTextField name="lastName" label="Last name" placeholder="Abdurrahmanov" />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputTextField name="email" label="Email" placeholder="elgun@example.com" />
                  <InputTextField name="phone" label="Phone" placeholder="055 123 45 67" />
                </div>

                {/* Subject Selection */}
                <div className="w-full">
                  <InputSelectField
                    name="subject"
                    label="Subject"
                    placeholder="Select a subject"
                    defaultOptions={[
                      { id: 1, name: "General Inquiry" },
                      { id: 2, name: "Partnership Opportunity" },
                      { id: 3, name: "Volunteer Information" },
                      { id: 4, name: "Donation Question" },
                      { id: 5, name: "Other" },
                    ]}
                  />
                </div>

                {/* Message */}
                <div className="w-full">
                  <InputTextareaField
                    name="message"
                    label="Message"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Newsletter Subscription */}
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="newsletter"
                    {...methods.register('newsletter')}
                    className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700 leading-relaxed">
                    I would like to receive updates about your organization and upcoming events
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <motion.button
                    type="submit"
                    className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg px-8 py-4 rounded-full border-2 border-emerald-600 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg min-w-[200px]"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </CFormProvider>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-16 bg-white"
        variants={sectionVariants}
      >
        <div className="mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our office or reach out to schedule a meeting</p>
          </motion.div>

          <motion.div
            className="relative w-full pb-[56.25%] md:pb-[40%]"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.22066667136244!2d49.848524354291285!3d40.39199423129661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d00164bf987%3A0xf627c02295b999f6!2sSafrani%20Baku!5e1!3m2!1sen!2saz!4v1756383828704!5m2!1sen!2saz&zoom=10"
                className="absolute inset-0 w-full h-full rounded-lg border-0"
                title="Safrani Baku - Kudos.az"
                aria-label="Safrani Baku - Kudos.az"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
              ></iframe>
              <figcaption className="text-center text-gray-600 text-sm mt-2">Safrani Baku - Kudos.az</figcaption>
            </figure>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
