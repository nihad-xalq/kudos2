"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputTextareaField extends React.ComponentProps<"textarea"> {
    label?: string;
    styles?: string;
    name: string;
}

export const InputTextareaField: FC<IInputTextareaField> = ({ ...props }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <div className="input_wrapper relative w-full">
            {props.label && (
                <label
                    className="text-lg text-[rgb(104, 104, 104)] font-semibold pl-1"
                    htmlFor={props.label}
                >
                    {props.label}
                </label>
            )}
            <textarea
                className={`w-full py-4 px-5 font-medium border border-[rgb(92, 88, 88)] placeholder:text-[#9e9e9e] placeholder:font-medium rounded-2xl focus-visible:outline-none ${props.styles}`}
                {...register(props.name)}
                {...props}
                id={props?.label}
            />
            <ErrorMessage
                errors={errors}
                name={props.name}
                render={({ message }) => (
                    <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1">
                        {message}
                    </p>
                )}
            />
        </div>
    );
};
