
import { useFormik } from 'formik'
import style from './Register.module.css'
import axios from 'axios';
import * as yup from 'yup';
export default function Register() {
    const apiUrl = import.meta.env.VITE_SERVER;
    const apiPort = import.meta.env.VITE_PORT;
    const schema =yup.object({
        userName:yup.string().min(3).max(10).required(),
        email:yup.string().required().min(5).email(),
        password:yup.string().min(6).required()
    });
    
    const formik = useFormik({
        initialValues:{
            userName:"",
            email:"",
            password:""
        },
        onSubmit:RegisterUser,
        validationSchema:schema
    })

    async function RegisterUser(){
        const {data} = await axios.post(`${apiUrl}:${apiPort}/movies/v1/auth/signup`,formik.values);
        console.log(data);
        // console.log(formik.values);
    }
  return (
    <>
    <div className={`${style.register}`}>
        <div className={`${style.data_register}`}>
            <form action="" onSubmit={formik.handleSubmit} >
                <div>
                <div className="form-floating mb-3">
                    <input onBlur={formik.handleBlur} type="text" name="userName" value={formik.userName} onChange={formik.handleChange} className="form-control" id="floatingInput2" placeholder="" />
                    <label htmlFor="floatingInput2">User Name</label>
                    {
                        (formik.touched.userName &&formik.errors.userName)?
                        <div className="alert alert-danger">{formik.errors.userName}</div>
                        :null
                    }
                </div>
                <div className="form-floating mb-3">
                    <input onBlur={formik.handleBlur} type="email" name="email" value={formik.email} onChange={formik.handleChange} className="form-control" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">Email address</label>
                    {
                        (formik.touched.email &&formik.errors.email)?
                        <div className="alert alert-danger">{formik.errors.email}</div>
                        :null
                    }
                </div>
                <div className="form-floating">
                    <input onBlur={formik.handleBlur} type="password" name="password" value={formik.password} onChange={formik.handleChange} className="form-control" id="floatingPassword" placeholder="" />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.touched.password && formik.errors.password?<p className='text-danger'>{formik.errors.password}</p>:null}
                </div>
                </div>
                <button className='btn btn-outline-primary mt-3' type="submit">Register</button>
 
            </form>
        </div>
    </div>
    
    </>
  )
}

// in the validation when use formik you must define the onBlur={formik.handleBlur} in the input form
