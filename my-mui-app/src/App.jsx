import GymRegistrationCard from './assets/components/ui/Card'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-start items-center pt-16 pb-12 px-4 shadow-inner">
      <div className="w-full max-w-lg antialiased text-gray-800 mt-2">
        <GymRegistrationCard />
      </div>
    </div>
  )
}

export default App
