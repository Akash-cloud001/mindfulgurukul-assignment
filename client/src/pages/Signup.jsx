import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [ques, setQues] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [filteredState, setFilteredState] = useState('');

  const navigate = useNavigate();

  let stateName = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
  stateName = stateName.map((ele)=>{return ele.toLowerCase()});


  const handlefilter = (e)=>{
    setFilteredState(e.target.value.toLowerCase());
    setState(e.target.value.toLowerCase());
  }
  const handleStateSelection = (ele)=>{
    setState(ele);
    setFilteredState('');
  }

  const handleQuestion = (e)=>{
    setQues(prev=>{
     return [...prev, e.target.value];
    })
  }

  async function registerUser(event){
    event.preventDefault();

    const res = await fetch('http://localhost:5000/api/signup', {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        gender,
        city,
        state,
        hearAboutUs:ques
      })
    })
    const data = await res.json();
    if(data.status === 'ok'){
      navigate('/');
    }
  }

  return (
    <>
      <form 
        onSubmit={registerUser} 
        className='w-full sm:w-full h-max flex flex-col items-center justify-center gap-4 px-4 py-4'
        >   
        <header className='text-xl mb-4'>Sign Up</header>

{/* Name */}
        <div className='input-container'>
            <label htmlFor="name">Name</label>
            <input 
            type="text"
            name='name' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='input-style' 
            required
            />
        </div>

{/* Email */}
        <div className='input-container'>
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            name='email' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='input-style' 
            required
            />
        </div>

{/* Phone */}
        <div className='input-container'>
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel"
              name='phone' 
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className='input-style' 
              required
            />
        </div>

{/* Password */}
        <div className='input-container'>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='input-style' 
            required
            />
        </div>

{/* Gender */}
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 '>
            <label htmlFor="gender">Gender</label>
            <div className='w-4/6 text-left mt-2'>
                <input 
                  type="radio"
                  name='gender' 
                  value='male'
                  onChange={(e)=>setGender(e.target.value)}
                  className='mr-2'
                  required
                />
                <label htmlFor="male">Male</label>
                <br />
                
                <input 
                  type="radio"
                  name='gender' 
                  value='female'
                  onChange={(e)=>setGender(e.target.value)}
                  className='mr-2'
                  required
                />
                <label htmlFor="female">Female</label>
                <br />

                <input 
                  type="radio"
                  name='gender' 
                  value='others'
                  onChange={(e)=>setGender(e.target.value)}
                  className='mr-2'
                  required
                />
                <label htmlFor="others">Others</label>
                <br />
            </div>
        </div>


{/* Question */}
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3'>
          <label htmlFor="checkbox">How did you hear about us?</label>
          <div className='w-4/6 mt-2'>
            <input type="checkbox" id='linkedin' name='linkedin' value='linkedin' className='mr-2' onChange={e=>handleQuestion(e)}/>
            <label htmlFor="linkedin">LinkedIn</label>
            <br />

            <input type="checkbox" id='friends' name='friends' value='friends' className='mr-2' onChange={e=>handleQuestion(e)}/>
            <label htmlFor="friends">Friends</label>
            <br />

            <input type="checkbox" id='job-portal' name='job-portal' value='job-portal'className='mr-2' onChange={e=>handleQuestion(e)} />
            <label htmlFor="job-portal">Job Portal</label>
            <br />

            <input type="checkbox" id='others' name='others' value='others' className='mr-2' onChange={e=>handleQuestion(e)} required/>
            <label htmlFor="others">Others</label>
            <br />
          </div>
        </div>
        
{/* City */}
        <div className='input-container'>
          <label htmlFor="city">City</label>
          <select name="city" id="city" value={city} className='input-style' onChange={(e)=>setCity(e.target.value)} required>
            <option value="" disabled ></option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
            <option value="ahmedabad">Ahmedabad</option>
          </select>
        </div>


{/* State */}
        <div className='input-container items-start'>
          <label htmlFor="state">State</label>
          <div className='bg-white w-4/6 text-base text-gray-700 rounded-sm px-0 py-0 h-max relative'>
            
            <input 
              type="text" 
              id='state' 
              value={state} 
              onChange={(e)=>handlefilter(e)} 
              className='bg-white w-full text-base px-4 py-1 text-gray-700 rounded-sm capitalize' 
              required
            />
            
            {filteredState && <ul className='max-h-40 overflow-y-scroll mt-1'>
              { stateName.map((ele)=>{
                if(ele.includes(state)){
                  return <li
                          key={ele}
                          className='text-base h-auto w-full bg-white border border-b-gray-200 px-4 cursor-pointer capitalize'
                          onClick={()=>handleStateSelection(ele)}>{ele}
                          </li>
                }
              })}
            </ul>}

          </div>

        </div>

{/* Button */}
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 gap-2 flex items-center justify-around mt-4'>
            <button  type='submit' className='btn bg-white text-blue-600'>
                Create account
            </button>
        </div>
    </form>
    </>
  )
}

export default Signup;