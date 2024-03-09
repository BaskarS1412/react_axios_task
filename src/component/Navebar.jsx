import React from 'react';
import { Link } from 'react-router-dom';


const Navebar = () => {
    return (
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid justify-content-center">
            <a class="navbar-brand"><img src="https://i.pinimg.com/originals/8d/4c/3e/8d4c3e3cbb275adfba239326db22397b.png" alt="Logo" width="70" height="70" class="d-inline-block align-text-top"/>CRICKET BATS</a>
            <form class="d-flex" role="search">
              <Link className='home-sty' to="/">Home</Link>
              <Link className='home-sty' to="/products">Products</Link>
            </form>
          </div>
        </nav>
      </div>
    );
};

export default Navebar;