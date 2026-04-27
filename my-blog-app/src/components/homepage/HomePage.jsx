import React from 'react'
import { Link } from 'react-router'

function HomePage() {
  return (
    <div className="blog-container">
      <h3>Welcome!</h3>
      <p>This is the blog of Katelyn Tran, made for Spring 2026-ITIS-3135.</p>
      <p>Please login to access the rest of the blog.</p>
      <Link to="/login">Login Here</Link>
      </div>
  )
}

export default HomePage;