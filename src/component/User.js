
function User(props){
    // console.log(props.arg);
    const {id, email, first_name, last_name, avatar} = props.arg
    console.log(email)
    return(
        <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td><img src={avatar}/></td>
        </tr>
    )
}
export default User;