import React from 'react'
import Header from '../Header'
import Slider from '../Slider'
import { Helmet } from 'react-helmet'
import './style.css' // CSS riêng để style layout nếu cần

const LayoutDefault = ({ children, pageTitle }) => {
  return (
    <div>
      {/* Set HTML Head */}
      <Helmet>
        <title>{pageTitle || 'Admin Panel'}</title>
        <link
          rel="icon"
          href="https://img.icons8.com/?size=100&id=fzAoxIsUMv0P&format=png&color=000000"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="/admin/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
        {/* Optional script or style can be added here */}
      </Helmet>

      {/* Header */}
      <Header />

      {/* Layout container */}
      <div className="layout-container">
        {/* Sidebar */}
        <Slider />

        {/* Main Content */}
        <main className="layout-main">
          {children}
        </main>
      </div>
    </div>
  )
}

export default LayoutDefault
