import React,{useState} from 'react';
import { Disclosure } from "@headlessui/react";
import { FaCheckCircle,FaMapMarkerAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import CheckBox from "../ui/Checkbox";

export default function FindHire() {
	const [checked, setChecked] = useState(false);

	function handleChecked(){}
  
	const nameData = [
	  {
		name: "John Doe",
	  },
	  {
		name: "Jane Flona",
	  },
	  {
		name: "John Micheal",
	  },
	  {
		name: "John Micheal",
	  },
	  {
		name: "John Micheal",
	  },
	  {
		name: "John Micheal",
	  },
	];
  
	return (
		<>
			<section className='bg-black h-full'>
				<div
					className='grid grid-flow-row px-8 md:px-24 lg:items-center gap-4 lg:px-10 lg:grid-cols-12 py-32'
					// className='flex flex-col gap-4 lg:flex-row lg:justify-around lg:items-end px-8 py-12 md:px-44 lg:px-0 lg:py-40'
				>
					<div className='col-span-5'>
						<div>
							<h1 className='text-white text-3xl lg:text-5xl font-bold'>
								Find Hire
							</h1>
							<hr className='w-16 border-yellow-500' />
						</div>
						<div className='lg:max-w-md py-4'>
							<h2 className='text-white text-3xl lg:text-4xl font-bold'>
								<strong className='text-yellow-500'>200k</strong> Plus Artisans
								on our platform
							</h2>
							<p className='text-white text-md py-4'>
								We make it easy for you to hire the most proficient Artisan with
								years of experience, and the exact skills you’re looking for.
							</p>
						</div>
						<div>
							<form className='h-10 bg-white w-full lg:max-w-sm rounded-[2px] font-bold flex flex-row justify-between'>
								<input
									className='h-10 bg-white w-full px-4 lg:pl-8 lg:max-w-sm rounded-[2px] outline-none border-none'
									placeholder='Search...'
								/>
								<button className='bg-yellow-500 text-white hover:bg-yellow-600 h-10 px-4 max-w-xl rounded-r-[2px] font-bold'>
									Search
								</button>
							</form>
						</div>
					</div>
					<div className='col-span-7'>
						<div className='grid lg:grid-flow-col lg:items-center lg:gap-4'>
							<form className='h-10 bg-white w-full lg:max-w-sm rounded-[2px] flex flex-row'>
								<FaMapMarkerAlt className='text-black-400 lg:absolute text-base m-3' />
								<input
									className='h-10 max-w-md  bg-white lg:px-10  lg:placeholder:text-sm rounded-md outline-none border-none'
									placeholder='Enter your location'
								/>
							</form>
							<select className='h-10 bg-white w-full rounded-[2px] lg:max-w-sm font-sm my-4 outline-none px-4'>
								<option>All categories</option>
								<option>SW</option>
								<option>AS</option>
							</select>
							<select className='h-10 bg-white w-full rounded-[2px] lg:max-w-sm font-sm outline-none px-4'>
								<option>All types</option>
								<option>ER</option>
								<option>EF</option>
							</select>
						</div>
					</div>
				</div>
				<div>
				</div>
			</section>
			<main className="grid grid-flow-row my-24 px-10 lg:grid-cols-12 gap-4 h-screen">
          <div className="border-2 border-gray-400 rounded-lg w-full h-[400px] col-span-3">
            <div className="px-4 gap-4">
              <h3 className="text-[16px] pt-2">Categories</h3>
              <Disclosure>
                {({ open }) => (
                  <div className="pt-2">
                    <Disclosure.Button className="flex gap-8">
                      <CheckBox
                        label="Building maintence"
                        onChange={handleChecked}
                      />
                      <BiChevronDown
                        className={`${
                          open ? "" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-4">
                      <CheckBox label="Painting" onChange={handleChecked} />
                      <CheckBox label="Plumbing" onChange={handleChecked} />
                      <CheckBox label="Carpenter" onChange={handleChecked} />
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <div className="pt-2">
                    <Disclosure.Button className="flex gap-8">
                      <CheckBox
                        label="Outdoors Services"
                        onChange={handleChecked}
                      />
                      <BiChevronDown
                        className={`${
                          open ? "" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-4">
                      <CheckBox label="Gardening" onChange={handleChecked} />
                      <CheckBox label="Massonry" onChange={handleChecked} />
                      <CheckBox label="Surveying" onChange={handleChecked} />
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <div className="py-2">
                <p>Experience level</p>
                <CheckBox label="Beginner" onChange={handleChecked} />
                <CheckBox label="Intermediate" onChange={handleChecked} />
                <CheckBox label="Expert" onChange={handleChecked} />
              </div>
            </div>
          </div>
          <section className="border-2 border-gray-400 rounded-lg w-full h-screen overflow-y-scroll col-span-8 px-2">
            <section className="h-40 py-8 px-4 gap-4">
              <div className="bg-yellow-400 max-w-[130px] rounded-lg px-4">
                <p className="text-sm font-bold">Recommended</p>
              </div>
              {nameData.map((data) => (
                <section className="py-4 px-4">
                  <section className="flex flex-row items-center justify-between">
                    <div className="w-[80px] h-[80px] bg-gray-400 text-gray-400">
                      <p>000000000</p>
                      <p>000000000</p>
                    </div>
                    <div>
                      <h1 className="text-yellow-500 text-l font-bold">
                        {data.name}
                      </h1>
                      <p className="text-sm">Plumbing, Drainage management</p>
                    </div>
                    <div>
                      <p className="text-sm pb-2 text-gray-500 flex justify-end">
                        Hourly rate - ₦3000
                      </p>
                      <div className="bg-gray-200 max-w-[200px] rounded-lg px-4">
                        <p className="text-sm">Available 10 hours a week</p>
                      </div>
                    </div>
                  </section>
                  <div className="w-full pt-2">
                    <p className="text-sm">
                      I am looking for a Co-Founder to join me visualize an idea
                      to fruition. The Macro Idea is an Platform BYOB which
                      stands for BeYourOwnBoss will
                    </p>
                  </div>
                  <section className="mt-4">
                    <div className="bg-blue-600 py-1 max-w-[90px] rounded-full justify-center text-white flex gap-2 items-center">
                      <span>
                        <FaCheckCircle />
                      </span>
                      <p className="text-sm">Verified</p>
                    </div>
                  </section>
                  <div>
                <hr className="w-full my-3 border-1 border-gray-400" />
              </div>
                </section>
              ))}
              <div className="text-center py-2">
            <button className="border-2 border-gray-400 px-4 py-[8px] font-bold rounded-lg">
              Load more
            </button>
          </div>
            </section>
          </section>
        </main>
		</>
	);
}
