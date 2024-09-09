import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div id="notfound" className="text-center">
        <div className="notfound-bg relative w-full h-full">
          <div className="absolute top-0 bottom-0 left-1/5 w-px bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-2/5 w-px bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-3/5 w-px bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-4/5 w-px bg-gray-300"></div>
        </div>
        <div className="notfound max-w-2xl w-full mx-auto">
          <h1 className="font-bold text-6xl lg:text-7xl xl:text-8xl text-teal-500">
            ۴۰۴
          </h1>
          <h2 className="mt-20 font-bold text-3xl lg:text-4xl xl:text-4xl text-gray-800">
            صفحه مورد نظر یافت نشد!
          </h2>
          <p className="mt-1 text-lg lg:text-xl xl:text-xl text-gray-700">
            احتمالا صفحه مورد نظر شما حذف یا تغییر نام داده شده است.
          </p>
          <button className="mt-12">
            <Link
              to="/"
              className="inline-block py-2 px-6  font-bold text-lg bg-gray-200 text-gray-800 rounded-lg shadow-md transition duration-300 hover:bg-teal-500 hover:text-white"
            >
              بازگشت به صفحه اصلی
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
