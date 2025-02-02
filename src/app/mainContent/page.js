'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-900">

            <section className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Ювелирный магазин 585</h2>
                <p className="text-lg text-gray-700">
                    Для того, чтобы оставить запись, позвоните по номеру телефона <br />
                    <span className="text-[#2b4264] font-semibold text-xl">+7 (912) 356-56-56</span>
                </p>
            </section>

            <section className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-6">Логотип ювелирного магазина</h3>
                <div className="w-40 h-40 flex items-center justify-center bg-white rounded-full shadow-lg">
                    <Image src="/Resourses/logo.png" width={100} height={100} alt="Логотип" />
                </div>
            </section>
        </main>
    );
};

export default Page;
