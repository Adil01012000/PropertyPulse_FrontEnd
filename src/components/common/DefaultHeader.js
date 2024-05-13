"use client";
import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const showLoginRegisterLink = () => {
    return !sessionStorage.getItem("token");
  };

  const showAddPropertyButton = () => {
    return sessionStorage.getItem("token");
  };

  return (
    <>
      <header
        className={`header-nav nav-homepage-style main-menu  ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                  <Link className="header-logo logo1" href="/">
                      <Image
                        width={138}
                        height={44}
                        src="/images/header-logo2.svg"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={138}
                        height={44}
                        src="/images/header-logo2.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>

                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  {showLoginRegisterLink() ? (
                    <a
                      href="#"
                      className="login-info d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#loginSignupModal"
                      role="button"
                    >
                      <i className="far fa-user-circle fz16 me-2" />{" "}
                      <span className="d-none d-xl-block">Login / Register</span>
                    </a>
                  ) : (
                    <Link
                      className="ud-btn add-property menu-btn bdrs60 mx-2 mx-xl-4"
                      href="/dashboard-add-property"
                    >
                      Add Property
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  )}
                  {!showAddPropertyButton() && (
                    <Link
                    className="ud-btn add-property menu-btn bdrs60 mx-2 mx-xl-4"
                    href="/not-found"
                  >
                    Add Property
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="signup-modal">
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal />
          </div>
        </div>
      </div>

    </>
  );
};

export default DefaultHeader;
