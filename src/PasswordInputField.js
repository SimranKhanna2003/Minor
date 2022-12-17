function PasswordInputField({handlePasswordChange, passwordValue, passwordStrength}){
     
       
    return(
        <div className="form-group">
        <input type="password" onChange={handlePasswordChange} onInput={passwordStrength} value={passwordValue} name="password" placeholder="Password" className="form-control" />
        </div>
    )
}

export default PasswordInputField;