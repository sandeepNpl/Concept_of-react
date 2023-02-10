import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {userValidate} from '../helper/validate'

const Username = () => {
    const formik  = useFormik({
        initialValues : {
            username:''
        },
        validate: userValidate,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit : async values =>{
            console.log(values)
        }
    })
  return (
    <div className='container mx-auto'>
      <Toaster position="top-center" reverseOrder='false'></Toaster>
        <div className=' flex  justify-center items-center'>
            <div className={style.glass}>
                <div className='title flex flex-col items-center'>
                 <h4 className='text-4xl font-bold'>Hello Again</h4>
                 <span className='py-5 text-xl w-2/3 text-center text-gray-500'></span>
                </div>

                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} className= {style.profile_img} alt="avatar"/>
                    </div>

                    <div className='text-box flex flex-col  items-center gap-6 '>
                        <input {...formik.getFieldProps('username')} className={style.textbox} type="input" placeholder='Username'/>
                        <button className={style.btn} type="submit">Let's Go!</button>
                    </div>

                    <div className='text-center py-4'>
                        <span className='text-gray-500'>Not a member <Link className='text-red-500' to="/register" >Register Now</Link></span>
                    </div>

                </form>
            </div>
        </div>
    </div>

  )
}

export default Username
