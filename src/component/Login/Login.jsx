// in this component Login i use the Native validation in the Formic by use JavaScript Native
// but in the registue component i must use the Yup Npm to validation
import axios from 'axios';
import style from './Login.module.css'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


export default function Login({setIsLogin,setUserData}) {
    const apiUrl = import.meta.env.VITE_SERVER;
    const apiPort = import.meta.env.VITE_PORT;
    const navigate=useNavigate();
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:LoginUser,
        validate:values=>{
            let errors={};

            if(!values.password){
                errors.password="invalid password"
            }else if(values.password.length <8){
                errors.password="password length must greate 8 caracter"
            }

            if(!values.email){
                errors.email="email must required"
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email="invalid email address"
            }
            return errors;
        }
    })
    async function  LoginUser(){
        console.log(formik.values);
        const {data} = await axios.post(`${apiUrl}:${apiPort}/movies/v1/auth/signin`,formik.values); 
        if(data.message=='success'){
            localStorage.setItem("userToken",data.token);
            setIsLogin(true);
            const decoded = jwtDecode(data.token);
            // console.log(decoded);
            setUserData(decoded);
            navigate('/');
        }
        // console.log(data);
    }
    //console.log(formik.touched)
  return (
    <>
    <div className={`${style.login}`}>
        <div className={`${style.data_login}`}>
            <form action="" onSubmit={formik.handleSubmit} >
                <div>

                <div className="form-floating mb-3">
                    <input onBlur={formik.handleBlur} type="email" name="email" value={formik.email} onChange={formik.handleChange} className="form-control" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">Email address</label>
                    {
                        (formik.touched.email &&formik.errors.email)?
                        <div className="alert alert-danger">{formik.errors.email}</div>
                        :null
                    }
                    
                    {/* {formik.errors.email} */}
                </div>
                <div className="form-floating">
                    <input onBlur={formik.handleBlur} type="password" name="password" value={formik.password} onChange={formik.handleChange} className="form-control" id="floatingPassword" placeholder="" />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.touched.password && formik.errors.password?formik.errors.password:null}
                </div>
                </div>
                <button className='btn btn-outline-primary mt-3' type="submit">Login</button>
 
            </form>
        </div>
    </div>
    
    </>
  )
}

/* 
i have a problem : when i touch the email it show error invalid in the all input field
to solve this error design you must use formik.toucked >> when you touched in the name print in the formik.toucked =>{name=true}

but to formik.toucked work you must define onBlur={formik.handleBlur} in the all input form

*/