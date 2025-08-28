"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputTextField extends React.ComponentProps<"input"> {
    label?: string;
    styles?: string;
    name: string;
}

export const InputTextField: FC<IInputTextField> = ({ ...props }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="input_wrapper relative w-full">
            {props.label && (
                <label
                    className="text-lg text-[rgb(104, 104, 104)] font-semibold"
                    htmlFor={props.label}
                >
                    {props.label}
                </label>
            )}
            <input
                className={`${props.styles} bg-white w-full py-3 pl-6 pr-5 border-2 border-[rgb(92, 88, 88)] text-[16px] text-[rgba(51,51,51,1)] placeholder:text-[rgba(179,180,186,1)] placeholder:text-[14px] placeholder:font-light font-[400] rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none`}
                {...register(props?.name)}
                {...props}
                id={props?.label}
            />
            <ErrorMessage
                errors={errors}
                name={props?.name}
                render={({ message }) => (
                    <p className="willSimplyFadeIn text-[rgba(227,30,36,1)] text-[14px] font-normal mt-1">
                        {`• ${message}`}
                    </p>
                )}
            />
        </div>
    );
};
