'use client'
import { useState, useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState<string>('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleDateString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
            setTime(formatted)
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="text-sm text-gray-500 mb-2">
            Current Time: {time}
        </div>
    )
}