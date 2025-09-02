"use client"

import { IoClose, IoCheckmarkCircle, IoAlertCircle, IoInformationCircle, IoWarning } from 'react-icons/io5';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationProps {
    type: NotificationType;
    title: string;
    message: string;
    duration?: number;
    onClose?: () => void;
    isVisible: boolean;
}

const notificationConfig = {
    success: {
        icon: IoCheckmarkCircle,
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        textColor: 'text-emerald-800',
        iconColor: 'text-emerald-600',
        progressColor: 'bg-emerald-500'
    },
    error: {
        icon: IoAlertCircle,
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-800',
        iconColor: 'text-red-600',
        progressColor: 'bg-red-500'
    },
    info: {
        icon: IoInformationCircle,
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-800',
        iconColor: 'text-blue-600',
        progressColor: 'bg-blue-500'
    },
    warning: {
        icon: IoWarning,
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        textColor: 'text-amber-800',
        iconColor: 'text-amber-600',
        progressColor: 'bg-amber-500'
    }
};

export default function Notification({
    type,
    title,
    message,
    duration = 5000,
    onClose,
    isVisible
}: NotificationProps) {
    const [progress, setProgress] = useState(100);
    const [isClosing, setIsClosing] = useState(false);

    const config = notificationConfig[type];
    const Icon = config.icon;

    const handleClose = useCallback(() => {
        setIsClosing(true);
        onClose?.();
    }, [onClose]);

    useEffect(() => {
        if (!isVisible) return;

        // Reset progress when notification becomes visible
        setProgress(100);
        setIsClosing(false);

        // Auto-close timer
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        // Progress bar animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev <= 0) {
                    clearInterval(progressInterval);
                    return 0;
                }
                return prev - (100 / (duration / 100));
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [isVisible, duration, handleClose]);

    if (!isVisible && !isClosing) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="fixed top-4 right-4 z-50 max-w-sm w-full"
                    initial={{ x: 400, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: 400, opacity: 0, scale: 0.8 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30,
                        duration: 0.3
                    }}
                >
                    <motion.div 
                        className={`
                            relative overflow-hidden rounded-xl border shadow-lg
                            ${config.bgColor} ${config.borderColor}
                            transform transition-all duration-300 ease-in-out
                            hover:scale-105 hover:shadow-xl
                        `}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        {/* Progress bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                            <motion.div
                                className={`h-full ${config.progressColor}`}
                                initial={{ width: "100%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <div className="flex items-start gap-3">
                                <motion.div 
                                    className={`flex-shrink-0 ${config.iconColor}`}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.div>

                                <div className="flex-1 min-w-0">
                                    <motion.h4 
                                        className={`text-base font-semibold ${config.textColor}`}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                    >
                                        {title}
                                    </motion.h4>
                                    <motion.p 
                                        className={`text-base mt-1 ${config.textColor} opacity-90`}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.3 }}
                                    >
                                        {message}
                                    </motion.p>
                                </div>

                                <motion.button
                                    onClick={handleClose}
                                    className={`
                                        flex-shrink-0 p-1 rounded-lg transition-colors duration-200
                                        ${config.textColor} opacity-60 hover:opacity-100
                                        hover:bg-black hover:bg-opacity-10
                                    `}
                                    whileHover={{ 
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IoClose className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Hook for managing notifications
export function useNotification() {
    const [notification, setNotification] = useState<{
        type: NotificationType;
        title: string;
        message: string;
        duration?: number;
        isVisible: boolean;
    } | null>(null);

    const showNotification = (
        type: NotificationType,
        title: string,
        message: string,
        duration?: number
    ) => {
        setNotification({
            type,
            title,
            message,
            duration,
            isVisible: true
        });
    };

    const hideNotification = () => {
        setNotification(prev => prev ? { ...prev, isVisible: false } : null);
    };

    const clearNotification = () => {
        setNotification(null);
    };

    return {
        notification,
        showNotification,
        hideNotification,
        clearNotification
    };
}
