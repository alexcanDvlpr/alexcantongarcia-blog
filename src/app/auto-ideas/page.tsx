"use client";
import { useState } from "react";
import Head from "next/head";
import { Send } from "lucide-react";

const AutoIdeasPage = () => {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        setIsLoading(true)

        try {
            const response = await fetch("https://hook.eu2.make.com/lslc96r0mmkskglkb8kcstryfiwwpccs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postIdea: input
                }),
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }
            setInput("")
            alert("Mensaje enviado correctamente ✅");
        } catch (error) {
            alert("Hubo un error ❌");
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <div className="w-full min-h-screen py-24 lg:py-30 flex flex-col justify-start items-center bg-gray-900 text-white relative">
                <div className="w-full max-w-md px-4">
                    <p className="text-3xl">{input}</p>
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                            className="flex-1"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="px-4">
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AutoIdeasPage;