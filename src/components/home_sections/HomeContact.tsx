import { InputTextField } from "../form/inputs/InputTextField";
import { useNotification } from "../reusable/Notification";
import { CFormProvider } from "../form/CFormProvider";
import { yupResolver } from '@hookform/resolvers/yup';
import Notification from "../reusable/Notification";
import SectionTitle from "../reusable/SectionTitle";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import * as yup from "yup";
import Logo from "../Logo";

const schema = yup.object().shape({
    fullname: yup.string().required('Bu xana vacibdir'),
    mobile_number: yup.string().required('Bu xana vacibdir'),
    team_name: yup.string().required('Bu xana vacibdir'),
    member_count: yup.string().required('Bu xana vacibdir'),
});

type FormValues = yup.InferType<typeof schema>;

export default function HomeContact() {
    const { notification, showNotification, hideNotification } = useNotification();

    const methods = useForm<Required<FormValues>>({
        resolver: yupResolver(schema),
    });

    const handleSubmit = (data: FormValues) => {
        // TODO: Error handling, error type notification on catch
        showNotification('success', 'Success', 'Form submitted successfully');
        console.log(data);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const formVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const logoVariants = {
        hidden: { x: 50, opacity: 0, scale: 0.8 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            id="register_form"
            className="flex flex-col items-start justify-center gap-12 pb-16 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div variants={itemVariants}>
                <SectionTitle title="Contact US" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <motion.div
                    className="flex flex-col items-center justify-center gap-10 w-full md:w-5/6"
                    variants={formVariants}
                >
                    <CFormProvider onSubmit={handleSubmit} methods={methods} className="space-y-4">
                        <InputTextField name="fullname" label="Full name" placeholder="Elgün Abdurrahmanov" />
                        <InputTextField name="mobile_number" label="Mobile number" placeholder="055 123 45 67" />
                        <InputTextField name="team_name" label="Team name" placeholder="KUDOS" />
                        <InputTextField name="member_count" label="Member count" placeholder="EX: 5" type="number" />
                        <motion.button
                            type="submit"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xl px-4 py-3 rounded-full w-full border-2 border-black transition-all duration-300 cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                y: -2,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
                        </motion.button>
                    </CFormProvider>
                </motion.div>
                <motion.div
                    className="flex items-center justify-center"
                    variants={logoVariants}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 }
                    }}
                >
                    <Logo inverted={false} />
                </motion.div>
            </div>

            {/* Notification Component */}
            {notification && (
                <Notification
                    type={notification.type}
                    title={notification.title}
                    message={notification.message}
                    isVisible={notification.isVisible}
                    onClose={hideNotification}
                    duration={3000}
                />
            )}
        </motion.div>
    );
}