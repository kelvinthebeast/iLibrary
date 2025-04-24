import Header from '../Header'
import Sidebar from '../Sidebar.jsx'
function DefaultLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex-1">Main content {children}</div>
        </div>

      </div>
    </>
  )
}

export default DefaultLayout