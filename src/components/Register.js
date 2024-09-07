import Filter from "./Filter";

function Register(props) {
    let page = props.page;
    let setPage = props.setPage;
    let registerDetails = props.registerDetails;
    let setRegisterDetails = props.setRegisterDetails;

    function changeHandler(e) {
        const { name, value } = e.target;
        setRegisterDetails(prev => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    console.log(registerDetails)
    function submitHandler(e){
        e.preventDefault();
        if(registerDetails.password!==registerDetails.confirmPassword){
            alert("Passwords do not match. Please try again.");
            return;
        }
    }
    return (
        <div className="login-box flex flex-col items-center w-[300px] sm:w-[300px] md:w-[450px] h-auto p-5 rounded-md container pb-5">
            <Filter page={page} setPage={setPage}></Filter>
            <form className="flex flex-col w-[200px] sm:w-[250px] md:w-[350px]" onSubmit={submitHandler}>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="name" className="text-black font-semibold text-[15px] mb-2">
                            Name
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            id="name" 
                            name="name"
                            className="rounded-sm border-none p-4 mb-4"
                            onChange={changeHandler}
                            value={registerDetails.name} 
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <label htmlFor="email" className="text-black font-semibold text-[15px] mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="rounded-sm border-none p-4 mb-4"
                            id="email"
                            name="email"
                            onChange={changeHandler}
                            value={registerDetails.email}
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <label htmlFor="password" className="text-black font-semibold text-[15px] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter 6 characters or more"
                            className="rounded-sm border-none p-4 mb-4"
                            name="password"
                            id="password"
                            onChange={changeHandler}
                            value={registerDetails.password}
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <label htmlFor="confirmPassword" className="text-black font-semibold text-[15px] mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="rounded-sm border-none p-4 mb-4"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={changeHandler}
                            value={registerDetails.confirmPassword}
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-[120px] h-[35px] rounded-md bg-[#724517] bg-opacity-70 hover:bg-opacity-90 transition-all duration-200 mx-auto mt-[25px] font-semibold"
                >
                    REGISTER
                </button>
            </form>
        </div>
    );
}

export default Register;
