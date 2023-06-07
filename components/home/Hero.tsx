import React from 'react';
import Form from '../ui/Form';
import { useRouter } from 'next/router';

export default function Hero() {
	const router = useRouter();

	const handleWork = () => router.push('findwork');
	const handleHire = () => router.push('findhire');

	return (
		<header>
			<div className='relative z-10'>
				<img
					src='/sp.png'
					className='h-screen  bg-cover w-full md:h-3/7 lg:h-2/4'
					alt='hero'
				/>
				<div className='container absolute left-0 top-0 mt-4 bottom-0'>
					<div className='flex flex-col items-center md:flex-row  lg:flex-row lg:justify-between  xl:justify-between'>
						<div className='px-4 pt-12'>
							<p className='text-white my-2 text-center lg:text-left text-2xl font-bold lg:text-md'>
								Get a trusted Artisan right away!
							</p>
							<h2 className='hidden text-white text-xl py-4 text-center lg:block md:block font-bold text-md md:text-4xl lg:text-4xl xl:text-6xl lg:text-left'>
								Connect to over 200k plus <br /> Artisans & Businesses
								<br /> across the Philipines
							</h2>
						</div>
						<div className='flex flex-col lg:flex-col md:pt-10 lg:my-32'>
							<div className='max-w-md mx-4 overflow-hidden md:w-80 lg:w-96  bg-yellow-500 p-8 lg:p-4 md:p-8 rounded-lg'>
								<h2 className=' text-2xl lg:text-4xl font-bold'>
									Find Artisan
								</h2>
								<p className='py-4 text-md font-bold lg:font-normal'>
									We make your job easier – that means finding you the best
									Artisan within reach.
								</p>
								<button
									className='bg-white hover:bg-gray-200 h-10 w-28 rounded-[3px] font-bold'
									onClick={handleHire}>
									Hire now
								</button>
							</div>
							<div className='max-w-md mx-4 bg-white overflow-hidden md:w-80 p-8 md:p-8 lg:p-4 lg:w-96 mt-4 lg:mt-0 rounded-lg relative lg:right-14'>
								<h2 className=' text-2xl lg:text-4xl font-bold'>Find Work</h2>
								<p className='py-4 text-md font-bold lg:font-normal'>
									We make your job easier – that means finding you the best
									Artisan within reach.
								</p>
								<button
									className='bg-yellow-500 text-white hover:bg-yellow-600 h-10 w-28 rounded-[3px] font-bold'
									onClick={handleWork}>
									Find work
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
