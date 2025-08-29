"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputCheckboxField extends React.ComponentProps<"input"> {
    label: string | React.ReactNode;
    styles?: string;
    labelstyles?: string;
    checked?: boolean;
}

export const InputCheckboxField: FC<IInputCheckboxField> = ({ name, label, checked, styles, labelstyles, ...props }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="checkbox-wrapper w-full flex flex-col items-start">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className={`${styles} lg:mr-1 cursor-pointer appearance-none min-w-[18px] w-[18px] min-h-[18px] h-[18px] bg-[rgba(255, 255, 255, 1)] rounded-[4px] border border-[rgba(194,194,194,1)] hover:border-emerald-600 checked:bg-emerald-600 checked:border-transparent checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center checked:after:text-xs checked:after:leading-4`}
                    {...register(name as string)}
                    {...props}
                    id={name as string}
                    checked={checked}
                />
                <label
                    htmlFor={name as string}
                    className={`${labelstyles} text-[14px] text-gray-800 px-1.5 cursor-pointer`}
                >
                    {label}
                </label>
            </div>
            <ErrorMessage
                errors={errors}
                name={name as string}
                render={({ message }) => (
                    <p className="text-red-500 text-sm mt-1 pl-1">{message}</p>
                )}
            />
        </div>
    );
};
