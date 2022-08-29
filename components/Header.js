import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [search, setSearch] = React.useState("")
  const handleSubmit=(e) => {
    router.push(`/product?s=${search}`)
    e.preventDefault()
  }
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">Navbar</a>
          <button className="btn btn-danger navbar-toggler border-3 px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <img style={{width: '30px'}} src="image/text-center.svg" alt="menu icon" />
          </button>
          <div className="offcanvas offcanvas-start-lg bg-dark" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header d-flex d-lg-none">
              <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Navbar</h5>
              <a href="javascript:void(0) " className="text-reset p-0" data-bs-dismiss="offcanvas" aria-label="close">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#FFFFFF" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </div>
            <div className="offcanvas-body p-lg-0">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/"> 
                  <a className="nav-link active" aria-current="page" >Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/referenzen"> 
                  <a className="nav-link active" aria-current="page" >Referance</a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/angebote"> 
                  <a className="nav-link active" aria-current="page" >Angebote</a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/kontakt"> 
                  <a className="nav-link active" aria-current="page" >Contact</a>
                  </Link>
                </li>
                <form onSubmit={handleSubmit}>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search' className='bg-light' type="text"/>
                </form>
                
              </ul>
            </div>
       
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header