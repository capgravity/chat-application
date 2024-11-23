import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'


const SignUp = () => {

	const [inputs,setInputs]= useState({
		fullname:'',
		username:'',
		password:'',
		confirmedPassword:'',
		gender:'',
	})

	const handleCheckBoxChange= (gender)=>{
		setInputs({...inputs,gender})
	}//to handle gender input box only

	const{loading, signup} = useSignup() //created custom hook useSignup.js and imported signup from there

	const handleSubmit = async (e)=>{
		e.preventDefault();
		// console.log(inputs);
		await signup(inputs);

	}
	return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
		<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<h1 className='text-3xl font-semibold text-center text-gray-300'>
				Sign Up <span className='text-gray-300'> TextWave</span>
			</h1>
			<form onSubmit={handleSubmit}>
			<div>
				<label className='label p-2'>
					<span className='text-base label-text'>Full Name</span>
				</label>
				<input type='text' placeholder='Joseph Cooper' className='w-full input input-bordered  h-10'
				value= {inputs.fullname}
				onChange={(e)=>setInputs({...inputs,fullname: e.target.value})} />
			</div>
			<div>
				<label className='label p-2 '>
					<span className='text-base label-text'>Username</span>
				</label>
				<input type='text' placeholder='coop24$' className='w-full input input-bordered h-10' 
				value= {inputs.username}
				onChange={(e)=>setInputs({...inputs,username: e.target.value})}/>
			</div>
			<div>
				<label className='label'>
					<span className='text-base label-text'>Password</span>
				</label>
				<input
					type='password'
					placeholder='Enter Password'
					className='w-full input input-bordered h-10'
					value= {inputs.password}
					onChange={(e)=>setInputs({...inputs,password: e.target.value})}
				/>
			</div>
			<div>
				<label className='label'>
					<span className='text-base label-text'>Confirm Password</span>
				</label>
				<input
					type='password'
					placeholder='Confirm Password'
					className='w-full input input-bordered h-10'
					value= {inputs.confirmedPassword}
					onChange={(e)=>setInputs({...inputs,confirmedPassword: e.target.value})}
				/>
			</div>


			<GenderCheckbox onCheckBoxChange= {handleCheckBoxChange} selectedGender= {inputs.gender}></GenderCheckbox>
			<Link to={"/login"} className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block' href='#'>
				Already have an account?
			</Link>
			<div>
				<button className='btn btn-block btn-sm mt-2 border border-slate-700'
				disabled= {loading}>
					{loading ? <span className='loading loading-spinner'></span>: "Sign Up"}
				</button>
			</div>



			</form>
		</div>


	</div>
}

export default SignUp