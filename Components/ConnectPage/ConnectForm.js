import React,{useState} from 'react';
import emailjs from '@emailjs/browser';

export default function ConnectForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,   // serviceId
                process.env.NEXT_PUBLIC_TEMPLATE_ID,  // templateId
                e.target,  // template Params
                process.env.NEXT_PUBLIC_PUBLIC_KEY    // options -> public key
            );
            if (response) {
                setStateMessage("Message sent!");
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 2000); // hide message after 5 seconds
            } else {
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(()=>{
                    setStateMessage(null);
                }, 2000); // hide message after 5 seconds
            }
        } catch(err) {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(()=>{
                setStateMessage(null);
            }, 2000); // hide message after 5 seconds
        }
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-10">
            <div className="w-full h-full flex flex-col md:flex-row gap-10">
                <div className="w-full flex flex-col gap-2">
                    <h3 className="">Name:</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        className="w-full px-5 py-2 bg-transparent border-b border-zinc-700 focus:border-red-600 outline-none"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="">Email:</h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="w-full px-5 py-2 bg-transparent border-b border-zinc-700 focus:border-red-600 outline-none"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col gap-5">
                <h3 className="text-center">Message:</h3>
                <textarea
                    type="text"
                    name="message"
                    placeholder="write your message"
                    rows="5"
                    className="w-full bg-zinc-900 rounded-[20px] p-5 outline-none resize-none"
                />
            </div>
            <div className="flex justify-center">
            {
                stateMessage ? (
                    <p>{stateMessage}</p>
                ) : (
                <input
                    type="submit"
                    className="bg-red-500 px-5 py-2 font-bold text-sm rounded-lg cursor-pointer"
                />
                )
            }
            </div>
        </form>
    );
}
