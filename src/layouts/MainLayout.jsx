import { Link, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"
import bdFlag from "../assets/flags/bd-flag.svg"

const MainLayout = () => {
  const { i18n } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex bg-tertiary justify-between items-center h-[60px] shadow-md px-4 sticky top-0">
        <h1 className="logo text-primary text-lg font-bold"> <Link to="/">LekhaPora</Link></h1>
        <div className="flex items-center gap-2">
          <div className="mr-10">
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="outline-none p-2 rounded-md text-sm border border-gray-300"
            >

                <option value="en">
                  🇺🇸 English
                </option>

                <option selected value="bn">
                  🇧🇩 বাংলা
                </option>

            </select>
          </div>
          <button className="btn primary">Sing Up</button>
          <button className="btn outline">Sing In</button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default MainLayout