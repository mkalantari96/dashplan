import Classes from "./loginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSendData, AppDispatch, RootState } from "../../store/store";

interface LoginState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState("password-hide");
  const stateStore = useSelector((state: RootState) => state.loginData);
  const dispatch: AppDispatch = useDispatch();
  function showPassword() {
    setPasswordShow((prevState) => {
      if (passwordShow === "password-hide") {
        return "password-show";
      }
      return "password-hide";
    });
  }
  function goToApp() {
    if (stateStore.token) {
      navigate("/");
    }
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);
    console.log(fd);
    const username = fd.get("username") as string | null;
    const password = fd.get("password") as string | null;
    console.log(username);
    if (
      !username ||
      username.trim() === "" ||
      !password ||
      password.trim() === ""
    ) {
      stateStore.error = "لطفا نام کاربری و یا رمز عبور را وارد نمایید";
      return;
    }
    const data = { email: username, password: password };
    dispatch(loginSendData(data));
  }
  return (
    <div className="w-full justify-center">
      <nav className="bg-primary  px-4 h-auto">
        <ul className="grid grid-cols-[auto_auto_1fr] md:text-[1.4rem] md:gap-x-[1.5rem] sm:text-[1.2rem] sm:gap-x-[1.3rem] gap-x-[0.4rem] text-[0.8rem]   text-white justify-items-start items-center ">
          <li>
            <a
              className="px-8 justify-self-start  hover:text-secondary"
              href="https://dashplan.ir"
            >
              بازگشت به سایت
            </a>
          </li>
          <li>
            <a
              className="justify-self-start hover:text-secondary"
              href="https://dashplan.ir/تماس-با-ما-و-درخواست-دمو"
            >
              درخواست حساب کاربری
            </a>
          </li>
          <img
            className="justify-self-end w-[20rem]"
            src="logo.png"
            alt="dashplan"
          />
        </ul>
      </nav>

      <div className="bg-slate-50 mx-auto w-[25rem] max-w-[25rem] py-12 px-8 my-20 shadow-xl text-2xl  flex flex-col gap-3 items-center justify-center rounded-md">
        <p className=" text-2xl font-semibold ">ورود به حساب کاربری</p>
        <img src="fav.png" alt="dashplan" className={Classes.logoClass} />

        {stateStore.error && (
          <p className="text-xl text-red-500">{stateStore.error}</p>
        )}
        <form
          className="flex flex-col gap-3 justify-center my-7 py-4 px-2"
          onSubmit={handleSubmit}
        >
          <div className="my-4">
            <label htmlFor="username ">نام کاربری</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              required
              className="mt-4 h-12 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-xl ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-zinc-950 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 placeholder:text-gray-400"
            />
          </div>
          <div className="relative">
            <label htmlFor="password">رمز عبور</label>
            <input
              type={passwordShow === "password-hide" ? "password" : "text"}
              name="password"
              id="password"
              required
              placeholder="******"
              className="mt-4 h-12 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-xl ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-zinc-950 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 placeholder:text-gray-400"
            />

            <img
              onClick={showPassword}
              src={`${passwordShow}.svg`}
              alt="hide password"
              className="absolute h-5 w-5 border border-zinc-200 rounded-full right-[90%]  top-[65%] cursor-pointer"
            />
          </div>
          <button className="mt-8 rounded-md border bg-primary text-white py-3 ">
            ورود
          </button>
        </form>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-primary z-10">
        <div className="w-full flex flex-col py-3 items-center justify-center gap-2">
          <div className="flex h-6">
            <img
              loading="lazy"
              src="/logo.png"
              alt="logo"
              className="object-contain"
            />
          </div>

          <p className="text-white text-base font-normal">
            With Dashplan, We make it easy to plan
          </p>
        </div>
      </footer>
    </div>
  );
}
