import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css'

<helmet>

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" ></link>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" ></link>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

</helmet>

const Signup = () => {
    const [user, setUser] = useState({
      FirstName:"",LastName:"",Email:"",Password:"",Cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }
    const History = useHistory()
const PostData=async(e)=>{
    e.preventDefault();
    const { FirstName, LastName, Email, Password, Cpassword } = user;

    const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            FirstName, LastName, Email, Password, Cpassword

        })
    });
    const data = res.json()
    if(res.status === 400 || !data)
    {
        alert("Please Fill Data")
    }
    else if(res.status === 401)
    {
        alert("Please enter the valid password.Password requires one capital letter,one small letter,numbers and minimum 8 character")
    }
    else if(res.status === 422)
    {
        alert("Registered Succesfully")
        // window.Location = "/"
        History.push("/login");
    }
    


}
    
    return (
    
<div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post" onSubmit={PostData}>
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input onChange={handleInputs} value={user.FirstName} type="text" class="form-control" name="FirstName" placeholder="First Name" required="required"/></div>
				<div class="col"><input onChange={handleInputs} value={user.LastName} type="text" class="form-control" name="LastName" placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input onChange={handleInputs} value={user.Email} type="email" class="form-control" name="Email" placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
        {/* <input onChange={handleInputs} value={user.Password} type="password" class="form-control" name="Password"  placeholder="Enter Password" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />  */}
             <input onChange={handleInputs} value={user.Password} type="password" class="form-control" name="Password" placeholder="Password" required="required"/>  
        </div>
		<div class="form-group">
            <input onChange={handleInputs} value={user.Cpassword} type="password" class="form-control" name="Cpassword" placeholder="Confirm Password" required="required"/>
        </div>        
        <div class="form-group">
			<label class="form-check-label">
        <input type="checkbox" required="required"/> I accept the <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>
        </label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" onClick={PostData}>Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <a href="/">Sign in</a></div>
</div>

    );
};
export default Signup;