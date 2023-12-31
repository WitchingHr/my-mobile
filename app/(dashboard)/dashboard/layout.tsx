import Dashboard from '@/app/components/Dashboard'
import Footer from '@/app/components/Footer'
import NavBar from '@/app/components/NavBar'

export const metadata = {
  title: 'Dashboard | MyMobile',
  description: 'Trusted mobile network',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <Dashboard>
        {children}
      </Dashboard>
      <Footer />
    </>
  )
}