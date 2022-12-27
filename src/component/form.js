function form(){
    var fname=, lname, email, roll;
    return (
        <div>
            <label>First Name: </label>
            <input type='text' name="fName" value='Enter First Name...' onChange={handleChange}/>
            <label>Last Name: </label>
            <input type='text' name="lName" value='Enter Last Name...'/>
            <label>Email: </label>
            <input type='text' name="email" value='Enter Email...'/>
            <label>Roll No.: </label>
            <input type='text' name="roll" value='Enter Roll...'/>
            <input type='submit' name='submit' value='submit' />
        </div>
    )
}