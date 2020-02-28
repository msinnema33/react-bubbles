import React, { useState } from 'react'
import { axiosWithAuth } from '../Utils/axiosWithAuth'
const Login = props => {
	const [user, setUser] = useState({
		username: '',
		password: ''
	})
	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
	const login = e => {
		e.preventDefault()
		axiosWithAuth()
			.post('/api/login', user)
			.then(res => {
				localStorage.setItem('token', res.data.payload)
				props.history.push('/Bubblespage')
			})
			.catch(err => console.error(err))
	}
	return (
		<div className='signin'>
			<h2>Sign In</h2>
			<form className='login-form' onSubmit={login}>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						name='username'
						placeholder='Username'
						type='text'
						onChange={handleChange}
						value={user.username}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						name='password'
						placeholder='Password'
						type='password'
						onChange={handleChange}
						value={user.password}
					/>
				</div>
				<div>
					<button className='btn'>Login</button>
				</div>
			</form>
		</div>
	)
}
export default Login














// import React from "react";
// // import axios from 'axios';
// import { axiosWithAuth } from "../Utils/axiosWithAuth";

// class Login extends React.Component {
//   state = {
//       credentials: {
//           username: '',
//           password: ''
//       }
//   };

//   handleChange = e => {
//       this.setState({
//           credentials: {
//               ...this.setState.credentials,
//               [e.target.name]: e.target.value
//           }
          
//       });
//   };

//   login = e => {
//       e.preventDefault();

//       axiosWithAuth()
//     //   axios  http://localhost:5000
//         .post('/api/login', this.state.credentials)
//         .then(res => {
//         //   console.log(res)
//             localStorage.setItem('token', res.data.payload);
//             console.log(localStorage)
//             this.props.history.push('/BubblePage');
//         })
//         .catch(err => console.log(err));
//   };

//   render(){
//       return (
//           <div>
//               <form onSubmit={this.login}>
//                   <input
//                       type='text'
//                       name='username'
//                       value={this.state.credentials.username}
//                       onChange={this.handleChange}
//                   />
//                   <input
//                       type='password'
//                       name='password'
//                       value={this.state.credentials.password}
//                       onChange={this.handleChange}
//                   />
//                   <button>Log In</button>        
//               </form>
//           </div>
//       );
//   }    
  
// }

// export default Login;



// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
//       <p>Build a login page here</p>
//     </>
//   );
// };

// export default Login;
