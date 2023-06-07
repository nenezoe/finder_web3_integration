import React, { useState } from 'react';
import Spinner from './Spinner';

interface ButtonProps {
	children?: any;
	loading?: Boolean;
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, loading,onClick }) => {
	return (
		<button onClick={onClick} className='h-9 w-64 bg-amber-400 hover:bg-yellow-600  rounded-[3px] font-normal text-white'>
			{children}
			{loading && <Spinner />}
		</button>
	);
};

export default Button;
