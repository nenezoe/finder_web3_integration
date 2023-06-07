import { useRouter } from 'next/router';
import React from 'react';

export default function Features() {
	const router = useRouter();

	const handleWork = () => router.push('findwork');
	const handleHire = () => router.push('findhire');

	return (
		<main>
			<div className='mt-8 px-14'>
				<p className='text-black font-bold text-2xl md:text-md'>
					What is SuperProxy?
				</p>
				<hr className='w-16 border-yellow-500 mb-4' />
			</div>
			<div className='grid grid-row-2 md:grid-cols-2 lg:grid-cols-2'>
				<div className='mt-4 max-w-3xl lg:max-w-2xl p-12'>
					<h1 className='text-4xl md:text-3xl lg:text-5xl font-bold'>
						Your Trusted
						<br />
						Artisans
					</h1>
				</div>
				<div className='max-w-3xl lg:max-w-2xl px-4'>
					<p className='text-black text-md font-semi-bold lg:font-normal leading-6  md:max-w-lg my-4'>
						SuperProxy is a community of expert Artisans providing your needed
						services around the home and office. We guarantee comfort and peace
						of mind with our sole commitment to pairing every client –
						individual, home, or office with the best of Artisans in your local
						area to ensure you get top talent service in time and at the best
						price available.
					</p>
					<span className='text-xl font-bold text-yellow-500'>
						More About Us
					</span>
				</div>
			</div>
			<div className='mt-8'>
				<div className='px-14'>
					<p className='text-black font-bold text-2xl md:text-md'>
						Testimonials
					</p>
					<hr className='w-16 border-yellow-500 mb-4' />
				</div>
				<div className='grid grid-row-2 md:grid-cols-2 xlg:grid-cols-2'>
					<div className='max-w-3xl lg:max-w-2xl p-8 lg:h-64  h-64  overflow-hidden bg-white flex flex-row gap-4 items-center'>
						<img
							src='/coolicon.svg'
							className='h-8'
						/>
						<h3 className='text-3xl md:text-2xl font-bold'>
							What our <br /> Clients say
						</h3>
					</div>
					<div className='max-w-3xl md:max-w-full p-12 md:h-64 overflow-hidden bg-black'>
						<span className='text-yellow-600 text-md lg:text-2xl font-bold'>
							“
						</span>
						<p className='text-white text-2xl font-bold'>
							All of my expectations were not only met, but exceeded
						</p>
						<small className='text-white text-sm font-normal'>
							Michelle, Home owner
						</small>
					</div>
				</div>
			</div>
			<div className='grid grid-row-2 md:grid-cols-2 lg:grid-cols-2'>
				<div className='max-w-3xl md:max-w-full p-8 md:h-64 overflow-hidden bg-black'>
					<span className='text-yellow-600 text-md lg:text-2xl font-bold'>
						“
					</span>
					<p className='text-white text-2xl font-bold'>
						Gives connectivity and recognition of your handwork, from far and
						near.
					</p>
					<small className='text-white text-sm font-normal'>
						Jarvis, Carpenter
					</small>
				</div>
				<div className='max-w-3xl md:max-w-2xl p-12 md:h-64 overflow-hidden bg-white flex flex-row md:ml-32 gap-4 items-center'>
					<img
						src='/coolicon.svg'
						className='h-8'
					/>
					<h3 className='text-3xl md:text-2xl font-bold'>
						What our <br /> Artisans say
					</h3>
				</div>
			</div>
			<div className=''>
				<div className='grid grid-row-2 md:grid-cols-2 lg:grid-cols-2'>
					<div className='max-w-3xl lg:max-w-xl p-12 lg:h-60 lg:pt-32 lg:pl-32 overflow-hidden'>
						<h2 className='text-black text-4xl lg:text-4xl font-bold'>
							<strong className='text-yellow-500'>200k</strong> Plus Artisans on
							our platform
						</h2>
						<span>
							<hr className='w-16 border-yellow-500' />
						</span>
					</div>
					<div className='max-w-3xl lg:max-w-sm p-12 lg:h-72 lg:pt-24 overflow-hidden'>
						<p className='text-xl py-4 font-semi-bold lg:font-normal'>
							We make it easy for you to hire the most proficient Artisan with
							years of experience, and the exact skills you’re looking for.
						</p>
						<button
							className='bg-yellow-500 text-white hover:bg-yellow-600 h-10 w-32 lg:h-10 lg:w-28 rounded-[3px] font-bold'
							onClick={handleHire}>
							Hire now
						</button>
					</div>
				</div>
				<div className='grid grid-row-2 md:grid-cols-2 lg:grid-cols-2'>
					<div className='max-w-4fixxl lg:max-w-md p-12 lg:h-72 h-64  lg:pl-32 overflow-hidden'>
						<p className='text-xl py-2 font-semi-bold lg:font-normal'>
							We make it easy for you to hire the most proficient Artisan with
							years of experience, and the exact skills you’re looking for.
						</p>
						<button
							className='bg-black text-white hover:bg-gray-200 h-10 w-32 lg:h-10 lg:w-28 rounded-[3px] font-bold'
							onClick={handleWork}>
							Find work
						</button>
					</div>
					<div className='max-w-3xl lg:max-w-sm p-14 lg:h-72 h-64   overflow-hidden'>
						<h2 className='text-black text-4xl lg:text-4xl font-bold'>
							Over <strong className='text-yellow-500'>2000</strong> Jobs Posted
							daily
						</h2>
						<span>
							<hr className='w-16 border-yellow-500' />
						</span>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:flex-row'>
				<div className=''>
					<img
						src='/appmock.png'
						className='w-full md:max-w-md lg:max-w-2xl md:h-full lg:h-full'
					/>
				</div>
				<div className='my-12 p-4 md:items-center flex flex-col items-center lg:h-72 lg:m-24 lg:max-w-xs'>
					<h1 className='font-bold text-2xl lg:text-3xl'>
						Download the SuperProxy App
					</h1>
					<img
						src='/app-store.svg'
						className='h-32 my-4'
					/>
				</div>
			</div>
			<div className='bg-black text-center w-full h-full lg:flex  lg:justify-around p-8'>
				<div>
					<h1 className='text-white font-bold text-3xl'>
						Do you have any question?
					</h1>
				</div>
				<div className='lg:flex lg:flex-row lg:gap-8'>
					<button className='bg-white text-black hover:bg-gray-200 h-10 my-4 w-24 rounded-[3px] font-bold'>
						Contact us
					</button>
					<div>
						<h1 className='text-white text-3xl font-bold'>899 567 567</h1>
						<hr className='w-16 border-yellow-500 ml-24' />
						<address className='text-white'>
							Address: Street 26 Tagupo St., corner G. Araneta
						</address>
					</div>
				</div>
			</div>
		</main>
	);
}
