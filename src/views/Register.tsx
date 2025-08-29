"use client"

import { InputTextField } from "@/components/form/inputs/InputTextField";
import { useNotification } from "@/components/reusable/Notification";
import { CFormProvider } from "@/components/form/CFormProvider";
import Notification from "@/components/reusable/Notification";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as yup from "yup";
import { InputCheckboxField } from "@/components/form/inputs/InputCheckboxField";

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Terms and conditions are required'),
});

type FormValues = yup.InferType<typeof schema>;

const Register: React.FC = () => {
    const { notification, showNotification, hideNotification } = useNotification();

    const methods = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
        },
    });

    const handleSubmit = (data: FormValues) => {
        console.log('Registration submitted with data:', data);
        showNotification('success', 'Success', 'Registration completed successfully');

        // Clear the form
        methods.reset();

        // Close notification after 3 seconds
        setTimeout(() => {
            hideNotification();
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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

            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join our community and start making a difference
                    </p>
                </div>

                {/* Registration Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <CFormProvider
                        onSubmit={handleSubmit}
                        methods={methods}
                        className="space-y-6"
                    >
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputTextField
                                name="firstName"
                                label="First name"
                                placeholder="John"
                            />
                            <InputTextField
                                name="lastName"
                                label="Last name"
                                placeholder="Doe"
                            />
                        </div>

                        {/* Email Field */}
                        <InputTextField
                            name="email"
                            label="Email address"
                            placeholder="john@example.com"
                            type="email"
                        />

                        {/* Password Fields */}
                        <InputTextField
                            name="password"
                            label="Password"
                            placeholder="••••••••"
                            type="password"
                        />

                        <InputTextField
                            name="confirmPassword"
                            label="Confirm password"
                            placeholder="••••••••"
                            type="password"
                        />

                        {/* Terms and Conditions */}
                        <div className="flex items-start space-x-3">
                            <InputCheckboxField
                                name="terms"
                                label={
                                    <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                                        I agree to the{' '}
                                        <Link href="/terms" className="text-emerald-600 hover:text-emerald-500 font-medium">
                                            Terms and Conditions
                                        </Link>
                                        {' '}and{' '}
                                        <Link href="/privacy" className="text-emerald-600 hover:text-emerald-500 font-medium">
                                            Privacy Policy
                                        </Link>
                                    </label>
                                }
                            />

                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
                            >
                                Create Account
                            </button>
                        </div>
                    </CFormProvider>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        By creating an account, you agree to our terms of service and privacy policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
