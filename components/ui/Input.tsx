import React, { InputHTMLAttributes } from 'react';
import { useToggle } from '../home/NavBar';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: any;
	onChange?: (...args: any[]) => any;
	onClick?: (...args: any[]) => any;
	label?: any;
	icons?: any;
	error?: any;
}

const Input: React.FC<InputProps> = (props) => {
	const { className, label, onChange, icons, error, onClick, ...rest } = props;

	const handleChange = (e: any) => {
		if (onChange) {
			onChange(e.target.value);
		}
		return null;
	};

	return (
		<>
			<label
				htmlFor='text'
				className='text-[14px]'>
				{label}
			</label>
			<form className='h-9 w-64 border-black border-2 rounded relative font-normal outline-none bg-none placeholder:text-black-700 text-sm'>
				<input
					className='h-8 w-60 font-normal outline-none pl-4 bg-none placeholder:text-black-700 text-sm'
					onChange={handleChange}
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					spellCheck='false'
					required
					{...rest}
				/>
				<div
					className='absolute top-[10px] right-[10px]'
					onClick={onClick}>
					{icons}
				</div>
			</form>
			<span>{error}</span>
		</>
	);
};

export default Input;
