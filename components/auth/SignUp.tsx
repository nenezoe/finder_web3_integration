import { useState, useReducer, useCallback, useEffect } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useToggle } from '../home/NavBar';
// import {createUserWithEmailAndPassword} from 'firebase/auth'
// import {auth} from '../../pages/firebase'

export default function SignUp() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [province, setProvince] = useState('');
	const [isToggle, toggle]: any = useToggle();
	const [loading, setLoading] = useState(false);
	
	// function handleSignUp(e:any){
	// 	setLoading(true)
	// 	e.preventDefault(); 
	// 	createUserWithEmailAndPassword(auth, name, lastName)
	// 	.then((userCredential) => {
    //         console.log(userCredential)
	// 		setLoading(false)
	// 	}).catch((error)=> {
	// 		console.log(error)
	// 		setLoading(false)
	// 	})
	// }

	return (
		<div className='flex flex-col items-center gap-3'>
			<div className='mt-24'>
				<div className='text-center mb-5'>
					<h1 className='font-bold text-lg'>Create an account</h1>
					<p className='font-normal text-[14px]'>
						Already have account?{' '}
						<Link href='/signin'>
							<span className='text-yellow-400 font-bold text-[14px] cursor-pointer'>
								SignIn
							</span>
						</Link>
					</p>
				</div>
			</div>

			<form>
				<div className='grid md:grid-cols-2 items-center gap-4'>
					<div>
						<Input
							label='Name'
							type='name'
							onChange={setName}
							placeholder='Enter your name'
							value={name}
						/>
					</div>
					<div>
						<Input
							label='Last Name'
							type='name'
							onChange={setLastName}
							placeholder='Enter your last name'
							value={lastName}
						/>
					</div>
					<div>
						<Input
							label='Email'
							type='email'
							onChange={setEmail}
							placeholder='Enter your email'
							value={email}
						/>
					</div>

					<div>
						<Input
							label='Password'
							type={isToggle ? 'text' : 'password'}
							onChange={setPassword}
							placeholder='Enter your password'
							value={password}
							onClick={toggle}
							icons={isToggle ? <FaEyeSlash /> : <FaEye />}
						/>
					</div>
					<div>
						<Input
							label='State/Province'
							type='city'
							onChange={setProvince}
							placeholder='Enter your province'
							value={province}
						/>
					</div>
					<div>
						<label
							htmlFor='text'
							className='text-[14px]'>
							Looking for
						</label>
						<div>
							<select className='h-9 w-64 appearance-none border-black border-2 rounded font-normal outline-none pl-4 bg-none  text-sm'>
								<option value='I need an Artisan'>I need an Artisan</option>
								<option value='I need an Artisan'>I want to work</option>
							</select>
						</div>
					</div>
				</div>
			</form>
			<div className='mt-4'>
				<Button loading={loading}>Create Account</Button>
			</div>
			<div className='text-center my-4 px-18'>
				<p className='text-slate-700 md:max-w text-sm leading-none my-1'>
					By clicking Create account,I agree that I have read and accepted the{' '}
					<span className='text-yellow-400'>Terms of Use</span> and{' '}
					<span className='text-yellow-400'>Privacy Policy</span>
				</p>
			</div>
		</div>
	);
}
