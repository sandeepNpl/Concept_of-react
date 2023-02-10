import toast from 'react-hot-toast' 
// validate username

// validate login page user name

export async  function userValidate(values){
    const errors = usernameVerify({}, values);
    return errors
}

const usernameVerify = (error= {}, values) =>{
    if(!values.username){
        error.username = toast.error('Username required')
    }
    return error;

}