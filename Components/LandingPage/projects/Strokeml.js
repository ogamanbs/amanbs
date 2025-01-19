import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({
    weight: '400',
    subsets:['latin']
});


export default function Strokeml() {
    return (
        <div className="md:h-[60vh] w-full flex flex-col md:flex-row items-center mt-32">
            <div className="hidden md:block h-full w-full md:w-[50%] p-5 md:p-10 mt-10 md:mt-0">
                <div className="h-full w-full border border-zinc-800 rounded-[20px] overflow-hidden z-10 bg-white/10">
                    <Image className="h-full w-full object-contain" src={'/strokeml.png'} alt={"Stroke Prediction App"} width={1440} height={1440} />
                </div>
            </div>
            <div className="h-auto md:h-full w-full md:w-[50%] px-5 flex flex-col justify-center">
                <h1 className={`text-6xl md:text-9xl ${bebas_Neue.className} text-red-600`}>Stroke Prediction App</h1>
                <div className="block md:hidden h-full w-full border border-zinc-800 rounded-[20px] overflow-hidden z-10 bg-white/10 mb-5 mt-3">
                    <Image className="h-full w-full object-contain" src={'/strokeml.png'} alt={"Stroke Prediction App"} width={1440} height={1440} />
                </div>
                <div className="">
                    This is a Stroke prediction app which is developed using flask and react where the dataset to train the model was picked up from kaggle.
                    In this project I have used various machine learning concepts like linear regression and pipelining etc.
                    In this project if you input the asked fields like age, gender, bmi etc., then it will display a message that if you are likely to get a stroke and you need to get diagnosed or not.
                </div>
                <div className="h-auto flex gap-4 mt-5">
                    {/* <Link href=""><button className="px-5 py-2 bg-zinc-900 rounded-full hover:bg-zinc-800">Explanation</button> */}
                    <Link href="https://github.com/ogamanbs/stroke-prediction-server"><button className="px-5 py-2 bg-zinc-900 rounded-full hover:bg-zinc-800 capitalize">github</button></Link>
                    <Link href="https://strokeml.vercel.app"><button className="px-5 py-2 bg-zinc-900 rounded-full hover:bg-zinc-800 capitalize">visit</button></Link>
                </div>
            </div>
        </div>
    )
}
