import React from 'react';

const NavBar = ({type, handleChangeType}) => {
  return (
    <nav id="sidebarMenu" className={"col-md-3 col-lg-2 pl-0 mt-lg-3 mt-md-3 bg-light sidebar"}>
        <div className="position-sticky pt-3 pt-sm-0">
            <ul className="nav ">
                <li className="nav-item w-100">
                    <a className={"nav-link " + (type === "users" ? "active" : "")} onClick={() => handleChangeType("users")} aria-current="page" href="#">
                        Usuários
                    </a>
                </li>
                <li className="nav-item w-100">
                    <a className={"nav-link " + (type === "repositories" ? "active" : "")} onClick={() => handleChangeType("repositories")} href="#">
                        Repositórios
                    </a>
                </li>
                <li className="nav-item w-100">
                    <a className={"nav-link " + (type === "moost_seen" ? "active" : "")} onClick={() => handleChangeType("moost_seen")} href="#">
                        Mais visitados
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default NavBar;