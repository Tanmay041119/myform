function Filter(props) {
    const { page, setPage } = props;

    function changeHandler(e) {
        const txt = e.target.textContent;
        setPage(txt);
    }

    return (
        <div className="flex mb-4 w-full mt-2 justify-around">
            <button 
                className={`text-[17px] p-2 font-semibold hover:cursor-pointer w-[120px] h-[35px] rounded-md transition-all duration-200 flex justify-center items-center ${
                    page === "Login" ? "bg-[#5b3612] text-white" : "bg-[#5b3612] bg-opacity-50 text-black"
                }`} 
                onClick={changeHandler}
            >
                Login
            </button>
            <button 
                className={`text-[17px] p-2 font-semibold hover:cursor-pointer w-[120px] h-[35px] rounded-md transition-all duration-200 flex justify-center items-center ${
                    page === "Register" ? "bg-[#5b3612] text-white" : "bg-[#5b3612] bg-opacity-50 text-black"
                }`} 
                onClick={changeHandler}
            >
                Register
            </button>
        </div>
    );
}

export default Filter;
