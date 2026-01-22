import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const navigate = useNavigate();

    const patterns = {
        email: /^([a-z\d\.-])+@([a-z\d-]+\.([a-z]{2,8}))$/,
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[*@\-/$%&])[a-zA-Z\d*@\-/$%&]{8,}$/
    }

    const validate = (regex, input) => {
        return patterns[regex].test(input);
    }

    const checkAll = async () => {
        let flag = 0
        if (email === "" || !validate("email", email)) {
            flag = 1;
        }
        else if (password === "" || !validate("password", password)) {
            flag = 1;
        }
        if (flag == 1)
            alert("Please fill all of the Fiels");
        else {
            try {
                const res = await fetch("http://localhost:5000/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                })
                const data = await res.json()
                if (!res.ok) {
                    alert(data.error || "Login failed");
                    return;
                }
                localStorage.setItem("token", data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                setemail("")
                setpassword("")
                navigate("/web/home")
            }
            catch (err) {
                alert("Something went wrong")
                console.log(err)
            }
        }
    };
    return (
        <>
            <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    @keyframes animation-gradient{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
    }
    .animation{
    background:linear-gradient(-45deg, #1e1b4b, #312e81, #4f46e5, #0ea5e9);
    background-size:400% 400%;
    animation:animation-gradient 15s ease infinite;
    }
    .pop{
    font-family:"Poppins";
    }
    `}
            </style>
            <div className='w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center animation'>
                <div className=' w-[35vw] pt-15 pb-15 rounded-3xl shadow-2xl fade-in  flex flex-col justify-center relative'>
                    <button className='pop w-25 h-10 text-xl text-white absolute top-5 ml-5 rounded-4xl bg-transparent transform hover:scale-110 transition-transform duration-300 focus:ring-4 focus:ring-indigo-400/50 fous:outline-none' onClick={() => navigate("/")}>&larr;Back</button>
                    <div className='pop font-semibold text-white text-5xl  text-center'>Login</div>
                    <div className='flex flex-col items-center'>
                        <input type="text" placeholder='Email' value={email}
                            onChange={(e) => setemail(e.target.value)} className='mt-10  pl-4 bg-gray-100/15 w-90 h-17 rounded-4xl placeholder:text-xl  placeholder-indigo-200/70' />
                        {!validate("email", email) && email != ""
                            && <div className='w-[30.5vw] h-[3vh] ml-30 text-base pop font-medium rounded-2xl text-white  mt-2 pl-2.5' id='email'>Please enter a valid Email.</div>
                        }
                        <input type="text" placeholder='Password' value={password}
                            onChange={(e) => setpassword(e.target.value)} className='mt-5 pl-4 bg-gray-100/15 w-90 h-17 rounded-4xl placeholder:text-xl  placeholder-indigo-200/70' />
                        {
                            !validate("password", password) && password != ""
                            && (< div className='Desc_Password' id='password' >
                                <div className='w-[30.5vw] h-[3vh] ml-30 text-base pop font-medium rounded-2xl text-white  mt-2 pl-2.5 pr-20' id='email'>
                                    Minimum 8 characters at least 1 uppercase and 1 number
                                </div>
                            </div>)
                        }
                        <button className='h-15 w-80  mt-10 text-indigo-500 pop text-2xl font-medium shadow-2xl bg-white rounded-4xl transform hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-white/50 focus:outline-none' onClick={checkAll}>Login</button>
                        <div className='mt-5 text-xl text-indigo-200/70 pop flex'>Don't have an account?<div className='transform hover:scale-105 duration-300 ml-1 hover:text-white'><Link to="/signup" className='underline '>Signup</Link></div> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login