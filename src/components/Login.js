import Filter from "./Filter";
function Login(props) {
    let page=props.page
    let setPage=props.setPage
    let details=props.details
    let setDetails=props.setDetails
    function inputHandler(e){
        const{name,value}=e.target

        setDetails(prev=>{
          return {
            ...prev,
            [name]:value,
          }
        })
    }
   
    function submitHandler(e){
      e.preventDefault();
    }
    return (
      <div className="login-box flex flex-col items-center w-[300px] sm:w-[300px] md:w-[450px] h-auto p-5 rounded-md container pb-5">
        <Filter page={page} setPage={setPage}></Filter>
        <form className="flex flex-col w-[200px] sm:w-[250px] md:w-[350px]" onSubmit={submitHandler}>
        <div className=" flex flex-col gap-[10px]">
        <div className="flex flex-col justify-center">
        <label htmlFor="username" className="text-black font-semibold text-[15px] mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="rounded-sm border-none p-4 mb-4"
            id="username"
            name="email"
            value={details.email}
            onChange={inputHandler}
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
            value={details.password}
            onChange={inputHandler}
          />
        </div>
        </div>
        <div className=" pl-6 text-[15px] flex gap-1">
            Lost Password? <span className=" cursor-pointer text-blue-600 hover:text-blue-800 font-semibold">ClickHere</span>
        </div>
        <button type="submit" className="w-[120px] h-[35px] rounded-md bg-[#724517] bg-opacity-70 hover:bg-opacity-90 transition-all duration-200 mx-auto mt-[30px] font-semibold">
            LOGIN
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;
  