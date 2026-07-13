import HeroSection from "./components/HeroSection"
import OptionGrid from "./components/OptionGrid"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-natural flex justify-between items-center h-[60px] shadow-md px-4">
        <h1 className="logo text-primary text-lg font-bold">LekhaPora</h1>
        <div className="">
          <button>Sing Up</button>
          <button>Sing In</button>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <OptionGrid />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App