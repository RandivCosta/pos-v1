import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* shared UI for dashboard */}
            <Header />

            <div>
                {/* <div className="flex">
                    <Sidebar />
                </div> */}
                <div className="flex overflow-auto w-full">{children}</div>
            </div>
        </section>
    )
}