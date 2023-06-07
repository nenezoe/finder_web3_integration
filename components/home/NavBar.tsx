import React, { useState } from 'react';
import Link from 'next/link';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Button from '../ui/Button';

export const useToggle = (intialState = false) => {
	const [state, setState] = useState(intialState);

	const toggle = () => {
		setState((prev) => !prev);
	};

	return [state, toggle];
};

export default function NavBar() {
	const [isToggle, toggle]: any = useToggle();

	const router = useRouter();

	const handleRouter = () => router.push('signin');

	return (
		<nav>
			<div className='w-full flex flex-row items-center  lg:fixed lg:top-0 lg:z-50 bg-white justify-between px-8'>
				<div className='py-5'>
					<Link href='/'>
						<img
							src='/superproxy.svg'
							className='h-6 lg:h-8 pointer-events-auto'
						/>
					</Link>
				</div>
				<div className='flex lg:hidden relative'>
					<div
						className=' lg:hidden text-black text-xl'
						onClick={toggle}>
						{isToggle ? <FaTimes /> : <FaHamburger />}
					</div>
				</div>
				<ul className='hidden lg:flex lg:flex-row md:hidden md:flex-row justify-center space-x-12 no-underline p-7'>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold '>
						<Link href='/findhire'>Find Artisan</Link>
					</li>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold'>
						<Link href='/findwork'>Find Work</Link>
					</li>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold'>
						<Link href='/about'>About Us</Link>
					</li>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold'>
						<Link href='/'>Contact</Link>
					</li>
				</ul>
				<div className='hidden md:hidden lg:flex lg:flex-row h-full gap-4 my-4 items-center'>
					<button
						className='bg-yellow-500 hover:bg-yellow-600 text-white p-2 h-10 w-24 rounded-[3px] font-bold'
						onClick={handleRouter}>
						Login
					</button>
					<button className='bg-black hover:bg-gray-600 p-2 px-5 h-12  rounded-full flex flex-row items-center gap-3'>
						<img
							src='/callicon.svg'
							alt='call'
							className='h-4 my-1'
						/>
						<span className='text-white font-bold text-sm'>800 456 889</span>
					</button>
				</div>
			</div>
			<div
				onClick={toggle}
				className='md:block lg:hidden  fixed top-16 z-50'>
				{isToggle && (
					<div className='w-screen  bg-black p-8 rounded-lg relative z-40'>
						<ul className='flex flex-col items-center space-y-4 pt-12'>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold '>
								<Link href='/findhire'>Find Artisan</Link>
							</li>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold'>
								<Link href='/findwork'>Find Work</Link>
							</li>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold'>
								<Link href='/contact'>About Us</Link>
							</li>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold'>
								<Link href='/signin'>Contact</Link>
							</li>
						</ul>
						<div className='flex flex-col my-4 space-y-4 items-center'>
							<Button onClick={handleRouter}>Login</Button>
							{/* <button
								className='bg-yellow-500 hover:bg-yellow-600 p-2 h-10 w-24 rounded-[3px] font-bold'
								onClick={handleRouter}>
								Login
							</button> */}
							<button className='bg-white font-bold text-sm hover:bg-gray-600 p-3 px-5  h-12  rounded-full'>
								800 456 889
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
