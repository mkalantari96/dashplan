import ProjectCostChart from "../../components/ProjectCostChart";
import ProjectCostStatusChart from "../../components/ProjectCostStatusChart";
import ProjectOpeningStatusChart from "../../components/ProjectOpeningStatusChart";
import ProjectScheduleStatusChart from "../../components/ProjectScheduleStatusChart";
import SideBarItem from "../../components/SideBarItem";
import { Link, NavLink } from "react-router-dom";
import Classes from "./mainPage.module.css";
export default function MainPage() {
  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyles = {
    borderBottom: "2px solid #ddd",
    padding: "8px",
  };

  const tdStyles = {
    borderBottom: "1px solid #ddd",
    padding: "8px",
  };
  const data: string[] = [];

  return (
    <>
      <nav className="bg-primary  py-6 px-4 h-20 ">
        <ul className="grid grid-cols-[auto_auto_auto_auto_auto_1fr] md:text-[1.4rem] md:gap-x-[1.5rem] sm:text-[1.2rem] sm:gap-x-[1.3rem] gap-x-[0.4rem] text-[0.8rem]   text-white justify-items-start items-center">
          <li>
            <NavLink to="" className="justify-self-start hover:text-secondary">
              حساب کاربری
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="justify-self-start hover:text-secondary">
              گروه کاری
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="justify-self-start hover:text-secondary">
              مدیریت منابع انسانی
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="justify-self-start hover:text-secondary">
              مدیریت ماشین آلات
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="justify-self-end hover:text-secondary">
              خروج از حساب کاربری
            </NavLink>
          </li>

          <img
            className="justify-self-end w-[20rem]"
            src="logo.png"
            alt="dashplan"
          />
        </ul>
      </nav>

      <aside className=" pt-20 pb-8 px-5 w-60 max-h-svh bg-primary/10 border-l-2 border-primary/50 fixed right-0 inset-y-0 overflow-x-hidden overflow-y-auto max-md:hidden z-40">
        <ul className="flex flex-col gap-1 justify-start items-start content-start">
          <SideBarItem
            keyId={"1"}
            itemInside={[
              { href: "/login", label: "سبد پروژه" },
              { href: "/login", label: "پروژه 1" },
              { href: "/login", label: "پروژه 1" },
              { href: "/login", label: "پروژه 1" },
              { href: "/login", label: "پروژه 1" },
            ]}
          >
            پروژه ها
          </SideBarItem>
          <SideBarItem
            keyId="2"
            itemInside={[
              { href: "/letters", label: "گزارشات نامه" },
              { href: "/accidents", label: "گزارشات حوادث" },
              { href: "/policy", label: "گزارشات بیمه نامه" },
              { href: "/contracts", label: "گزارشات قرارداد ها" },
              { href: "/session-management", label: "گزارشات جلسات" },
              { href: "/installments", label: "گزارشات اقساط" },
            ]}
          >
            گزارشات و اتوماسیون
          </SideBarItem>

          <SideBarItem
            keyId="3"
            itemInside={[
              { href: "/login", label: "پروژه 1" },
              { href: "/login", label: "پروژه 1" },
              { href: "/login", label: "پروژه 1" },
            ]}
          >
            تقویم کاری
          </SideBarItem>
        </ul>
      </aside>
      <main className=" max-md:right-0 my-4 p-4 mr-60 ml-40 max-md:mx-auto flex flex-col gap-10 overflow-x-hidden overflow-y-visible ">
        <section className="flex items-center justify-end">
          <div></div>
          <button className="flex rounded-md border bg-primary text-white py-3 text-lg px-3">
            <Link to="">ایجاد پروژه جدید</Link>
          </button>
        </section>
        <section className="mt-8 grid grid-cols-[1fr,1fr,1fr] gap-6 max-sm:grid-cols-1 max-xl:grid-cols-2 max-xs:flex max-xs:flex-col">
          <div className="h-56 bg-blue-50 shadow rounded-xl flex items-center justify-center py-2">
            <ProjectOpeningStatusChart statusData={[1, 2, 3, 4, 5]} />
          </div>
          <div className="h-56 bg-blue-50 shadow rounded-xl flex items-center justify-center py-2">
            <ProjectScheduleStatusChart statusData={[10, 20, 30]} />
          </div>
          <div className="h-56 bg-blue-50 shadow rounded-xl flex items-center justify-center py-2">
            <ProjectCostStatusChart statusData={[10, 20, 30]} />
          </div>
          <div className="h-96 bg-blue-50 shadow rounded-xl col-span-3 max-xl:col-span-2 max-sm:col-span-1 flex items-center justify-center py-2">
            <ProjectCostChart
              data={[100000, 200000, 3000000]}
              labels={["پروژه 1", "پروژه 2", "پروژه 3"]}
            />
          </div>
        </section>

        <h2 className=" mt-10 text-3xl font-semibold">پروژه های تعریف شده</h2>
        <section className="mt-10 mx-4 p-4 overflow-y-scroll overflow-x-scroll border  rounded-lg border-gray-300 leading-loose">
          <div className="grid grid-cols-17  text-2xl font-semibold justify-items-center justify-center items-center  w-[300rem]    leading-loose text- ">
            <h4 className="col-start-1 row-start-1 bg-blue-50 px-4 row-span-2 flex justify-center items-center border-2 border-gray-500 w-[100%] h-[100%] ">
              جزئیات
            </h4>

            <h4 className="col-start-2 row-start-1 bg-blue-50 px-4 row-span-2 flex justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              کد پروژه
            </h4>
            <h4 className="col-start-3 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              نام پروژه
            </h4>
            <h4 className="col-start-4 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center  items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              تاریخ شروع قرارداد
            </h4>
            <h4 className="col-start-5 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              تاریخ پایان قرارداد
            </h4>
            <h4 className="col-start-6 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              آخرین بروزرسانی
            </h4>
            <h4 className="col-start-7 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              وضعیت پروژه
            </h4>
            <h4 className="col-start-8 row-start-1 col-span-2  bg-blue-50 flex px-4 row-span-1 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%] py-2">
              هزینه کل
            </h4>
            <h5 className="col-start-8  row-start-2  bg-blue-50 flex px-4 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              ریالی
            </h5>
            <h5 className="col-start-9  row-start-2 bg-blue-50 flex px-4 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]   py-2">
              دلاری
            </h5>

            <h4 className="col-start-10 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%] py-2">
              سیستم پروژه
            </h4>
            <h4 className="col-start-11 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              کارفرما
            </h4>
            <h4 className="col-start-12 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%] py-2">
              پیمانکار
            </h4>
            <h4 className="col-start-13 row-start-1 bg-blue-50 flex px-4 row-span-2 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%] py-2">
              مشاور
            </h4>
            <h4 className="col-start-14 col-span-2  row-start-1 bg-blue-50 flex px-4 row-span-1 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%] py-2">
              مولفه پیشرفت بدون در نظر گرفتن ارزش زمانی پول
            </h4>
            <h5 className="col-start-14 col-span-1 row-start-2 row-span-1 bg-blue-50 flex px-4 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              CV
            </h5>
            <h5 className="col-start-15 col-span-1 row-start-2 row-span-1 bg-blue-50 flex px-4 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2 ">
              SV
            </h5>
            <h4 className="col-start-16 col-span-2  row-start-1 bg-blue-50 flex px-4 row-span-1 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%] py-2">
              مولفه پیشرفت با در نظر گرفتن ارزش زمانی پول
            </h4>
            <h5 className="col-start-17 col-span-1 row-start-2 row-span-1 bg-blue-50 flex px-4 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]  py-2">
              CV
            </h5>
            <h5 className="col-start-18 col-span-1 row-start-2 row-span-1 bg-blue-50 flex px-4 justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-500 w-[100%] h-[100%]   py-2">
              SV
            </h5>
          </div>
          {!data && (
            <div className="col-start-1 col-span-full">
              <p>پروژه‌ای تعریف نشده است</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

{
  /* <h5>222</h5>
            <h5>222</h5>
            <h5>222222222222222222222222222222222</h5>
            <h5>1375/02/01</h5>
            <h5>1375/02/01</h5>
            <h5>1375/02/01</h5>
            <h5>1375/02/01</h5>
            <h5 className=" px-4">20000000000000000000</h5>
            <h5 className=" px-4">20000000000000000000</h5>
            <h5>222222222222222222222222222222222</h5>
            <h5>222222222222222222222222222222222</h5>
            <h5>222222222222222222222222222222222</h5>
            <h5>222222222222222222222222222222222</h5>
            <h5>222</h5>
            <h5>222</h5>
            <h5>222</h5>
            <h5>222</h5>*/
}
