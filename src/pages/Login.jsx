import { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Mohit",
    email: "mohit@gmail.com",
    pass: "123456",
  });

  const handleFormByObjectEntries = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
  };

  const handleFormByWebDevMastery = (e) => {
    e.preventDefault();
    const [name, value] = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  return (
    <div>
      <div className="form-container flex justify-center items-center h-[100vh]">
        <form
          onSubmit={handleFormByObjectEntries}
          className="flex flex-col gap-2 p-[1rem] bg-white text-black rounded h-auto w-[25vw] shadow-lg shadow-black"
        >
          <h1 className="mb-[1rem]  text-[2rem] self-center font-semibold">
            Login Form
          </h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            className="pl-[0.2rem] border border-black text-[0.8rem] rounded "
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="pl-[0.2rem] border border-black text-[0.8rem] rounded "
          />
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Enter Password"
            className="pl-[0.2rem] border border-black text-[0.8rem] rounded "
          />
          <input
            type="submit"
            value="Login"
            className="mt-[1rem] bg-slate-600 rounded p-[0.7rem] text-white text-[1rem] cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
