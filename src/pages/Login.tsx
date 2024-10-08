import '../assets/all.css';

function Login() {
  return (
    <div className='loginAll'>
        <div className='loginCard'>
            <div className='loginCardTop'>
                <h2></h2>
                <input placeholder='USER'></input>
                <input placeholder='PASSWORD'></input>
            </div>
            <div className='loginCardBottom'>
                <button></button>
                <a><p>forgot password?</p></a>
            </div>
        </div>
    </div>
  );
}

export default Login;
