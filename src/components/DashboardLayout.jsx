// DashboardLayout.jsx
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar' // hoặc SideBar (cẩn thận phân biệt hoa/thường)

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* Đây là chỗ nội dung con (dashboard, books, users...) sẽ hiện ra */}
      </div>
    </div>
  )
}

export default DashboardLayout
