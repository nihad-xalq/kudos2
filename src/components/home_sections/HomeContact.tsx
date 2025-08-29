import { InputTextField } from "../form/inputs/InputTextField";
import { useNotification } from "../reusable/Notification";
import { CFormProvider } from "../form/CFormProvider";
import { yupResolver } from '@hookform/resolvers/yup';
import Notification from "../reusable/Notification";
import SectionTitle from "../reusable/SectionTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

    return (
        <div className="flex flex-col items-start justify-center gap-12 pb-16 px-6">
            <SectionTitle title="Contact US" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div className="flex flex-col items-center justify-center gap-10 w-full md:w-5/6">
                    <CFormProvider onSubmit={handleSubmit} methods={methods} className="space-y-4">
                        <InputTextField name="fullname" label="Full name" placeholder="Elgün Abdurrahmanov" />
                        <InputTextField name="mobile_number" label="Mobile number" placeholder="055 123 45 67" />
                        <InputTextField name="team_name" label="Team name" placeholder="KUDOS" />
                        <InputTextField name="member_count" label="Member count" placeholder="EX: 5" type="number" />
                        <button
                            type="submit"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xl px-4 py-3 rounded-full w-full border-2 border-black transition-all duration-300 cursor-pointer"
                        >
                            Register
                        </button>
                    </CFormProvider>
                </div>
                <div className="text-[80px] md:text-[100px] font-bold flex items-center justify-center">
                    <span className="-translate-y-10">KUDOS</span>
                </div>
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
        </div>
    );
}