import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg max-w-md w-full border border-gray-300 p-6 relative">
        <div className="absolute top-0 left-0 right-0 flex justify-center transform -translate-y-1/2">
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                <span className="text-white text-3xl font-bold">♥</span>
            </div>
        </div>
        <h2 className="text-2xl font-bold text-center mt-8 text-gray-800">Log in</h2>
        <form className="mt-6">
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500"
                />
            </div>
            <div className="flex items-center mb-4">
                <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring focus:ring-red-500"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                    Remember me
                </label>
            </div>
            <div className="flex justify-between items-center">
                <a href="#" className="text-sm text-red-500 hover:underline">Forgot password?</a>
                <button
                    type="submit"
                    className="px-6 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:ring focus:ring-red-500"
                >
                    Log in
                </button>
            </div>
        </form>
    </div>
</div>

        </GuestLayout>
    );
}

