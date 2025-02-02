'use client';
import React, { useState } from 'react';
import Alert from '@/components/alert';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/button';
import InputField from '@/components/inputfield';
import Switch from '@/components/switch';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault(); // предотвращаем стандартное поведение формы

        if (username === '1' && password === '1') {
            setAlertMessage('Успешная авторизация...');
            setTimeout(() => {
                router.push('/mainContent');
            }, 1000); // Даем время на обновление UI перед переходом
        } else {
            setAlertMessage('Неверные данные');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1f314a] to-[#2b4264] p-6">
            {alertMessage && <Alert message={alertMessage} duration={3000} />}
            <form
                onSubmit={handleSubmit} // ✅ Теперь обработка идет на форме
                className="bg-white p-8 shadow-lg rounded-2xl max-w-md w-full border border-gray-200 text-center"
            >
                <div className="flex flex-col items-center mb-6">
                    <Image src="/Resourses/logo.png" width={60} height={60} alt="Logo" />
                    <h1 className="text-3xl font-extrabold mt-4 text-[#2b4264]">Авторизация</h1>
                </div>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700 mb-2 font-semibold">Логин:</label>
                    <InputField
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-[#2b4264] focus:border-[#2b4264] transition"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Введите логин"
                    />
                </div>
                <div className="mb-6 text-left">
                    <label className="block text-gray-700 mb-2 font-semibold">Пароль:</label>
                    <InputField
                        type="password"
                        className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-[#2b4264] focus:border-[#2b4264] transition"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите пароль"
                    />
                </div>
                <div className="mb-6 flex items-center">
                    <Switch
                        text="Запомнить меня"
                        isChecked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        backgroundColor="#2b4264"
                        textColor="gray-700"
                        className="ml-2"
                    />
                </div>
                <Button
                    type="submit"
                    backgroundColor="#2b4264"
                    textColor="white"
                    text="Войти"
                    className="w-full py-3 px-4 rounded-lg shadow-md hover:bg-[#1f314a] transition font-semibold"
                />
                <p className="mt-4 text-center text-gray-600 text-sm">
                    Еще нет учетной записи?{' '}
                    <a href="/register" className="text-[#2b4264] font-semibold hover:underline">Зарегистрироваться</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
