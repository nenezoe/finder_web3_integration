import React from 'react'

export default function Footer() {
  return (
		<>
			<div className='text-center my-8 px-18'>
				<ul className='flex flex-col lg:flex-row lg:gap-4 lg:justify-center text-yellow-500'>
					<li>PRIVACY POLICY</li>
					<li>TERMS OF USE</li>
				</ul>
				<p className='py-4 text-sm'>
					COPYRIGHT© 2022 SuperProxy INC., ALL RIGHTS RESERVED
				</p>
				<div className='flex flex-row justify-center h-8'>
					<img src='/linkedin.svg' />
					<img src='/facebook.svg' />
					<img src='/instagram.svg' />
					<img src='/twitter.svg' />
				</div>
			</div>
		</>
	);
}
