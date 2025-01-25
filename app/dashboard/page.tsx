
import CardWrapper from "../components/CardWrapper"
import ChartWrapper from "../components/ChartWrapper"
import LatesInvoicesWrapper from "../components/LatesInvoicesWrapper"
import { bebas } from "../ui/fonts"


const Dashboard = async () => {

  return (
    <main>
      <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl p-b `}>Dashborad</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="w-full md:col-span-4">
          <h2 className={`${bebas.className} md-4 text-xl md:text-2xl`}>RECENTE</h2>
          <ChartWrapper  />
        </div>
        <div className="w-full md:col-span-4">
          <h2 className={`${bebas.className} md-4 text-xl md:text-2xl`}>LATEST</h2>
          <LatesInvoicesWrapper />
        </div>
      </div>
    </main>
  )
}

export default Dashboard