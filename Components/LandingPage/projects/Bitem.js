import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({
    weight: '400',
    subsets:['latin']
});


export default function Bitem() {
    return (
        <div className="md:h-[60vh] w-full flex flex-col md:flex-row items-center">
            <div className="h-auto md:h-full w-full md:w-[50%] px-5 flex flex-col justify-center">
                <h1 className={`text-6xl md:text-9xl ${bebas_Neue.className} text-red-600 md:text-right`}>Bitem</h1>
                <div className="block md:hidden h-full w-full border border-zinc-800 rounded-[20px] overflow-hidden z-10 bg-white/10 mb-5 mt-3">
                    <Image className="h-full w-full object-contain" src={'/bitem.png'} alt={"Bitem"} width={1440} height={1440} />
                </div>
                <div className="md:text-right">
                    This is an e-commerce website which is developed using the MERN stack. On this website the user can add the products to their wishlist and to the cart. The user can also remove the the items from the wishlist and the cart.
                    The seller can also create a product on this project and can list their products on this website. The sellers are provided with a seperate website called bitem business where they can create products.
                </div>
                <div className="h-auto flex md:justify-end gap-4 mt-5">
                    <Link href="https://bitem.in"><button className="px-5 py-2 bg-zinc-900 rounded-full hover:bg-zinc-800 capitalize">visit</button></Link>
                    <Link href="https://github.com/ogamanbs/bitem-server"><button className="px-5 py-2 bg-zinc-900 rounded-full hover:bg-zinc-800 capitalize">github</button></Link>
                    {/* <Link href=""><button className="px-5 py-2 bg-zinc-900 rounded-full hover:bg-zinc-800">Explanation</button></Link> */}
                </div>
            </div>
            <div className="hidden md:block h-full w-full md:w-[50%] p-5 md:p-10 mt-10 md:mt-0">
                <Link href="https://bitem.in"></Link><div className="h-full w-full border border-zinc-800 rounded-[20px] overflow-hidden z-10 bg-white/10">
                    <Image className="h-full w-full object-contain" src={'/bitem.png'} alt={"Bitem"} width={1440} height={1440} />
                </div>
            </div>
        </div>
    )
}
