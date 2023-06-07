// import { Form } from 'formik'
import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
// import Input from './input'


function Form() {
const [name, setName] = useState('')
const [location, setLocation] = useState('')


	function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setName('')
		setLocation('')
	}	
		
	return (
		<section>
			<form onSubmit={handleSubmit} className='mt-6'>
				<input
					className='h-12 w-72 px-2 appearance-none rounded font-normal outline-none bg-gray-100 placeholder:text-black-700 text-sm'
					id='text'
					type='search'
					onChange={(event) => setName(event.target.value)}
					placeholder='What service are you looking for?'
					value={name}
				/>
				<div className='pt-4 flex flex-row justify-center gap-2 content-center relative'>
					<input
						className='h-12 sm:w-42 appearance-none rounded font-normal outline-none pl-4 bg-gray-100 placeholder:text-black-700 text-sm'
						id='text'
						onChange={(event) => setLocation(event.target.value)}
						placeholder='Enter your location'
						value={location}
					/>
					<span className='text-black-400 absolute pl-16 py-4'>
						<FaMapMarkerAlt />
					</span>
					<button className='h-12 w-20 px-2 bg-amber-400 hover:bg-yellow-600 rounded font-bold text-black'>
						Search
					</button>
				</div>
				<p className='pt-3 text-white font-bold'>or</p>
			</form>
			<div className='pt-3 '>
				<button className='h-12 md:w-72 px-4 bg-amber-400 hover:bg-yellow-600 rounded font-bold text-black'>
					Post a job
				</button>
			</div>
		</section>
	);
}


   


export default Form