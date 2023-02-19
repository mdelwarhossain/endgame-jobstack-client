import React from "react";
import { Link } from "react-router-dom";
//work
const Footer = () => {
  return (
    // eslint-disable-next-line react/style-prop-object
    <div data-theme="night">
      <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-between text-white py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                </svg>
              </div>
              <span className="self-center text-2xl text-green-600 font-semibold">
                CareerEdge
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-green-500">
                Our Services
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/hire">Hire</Link>
                </li>
                <li>
                  <Link to="/network">Network</Link>
                </li>
                <li>
                  <Link to="/messenger">Messages</Link>
                </li>
                <li>
                  <Link to="/notification">Notification</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase  text-green-500">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/maksudur-rahman-61b286215/"
                  >
                    Maksudur Rahman
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/mohammad-delwar-hossain/"
                  >
                    Delwar Hossain
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/mahabub-imam/"
                  >
                    Mahabub Imam
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/sadia-afsana-8b6355244/"
                  >
                    Sadia Afsana
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/md-mohsin-a1b702245/"
                  >
                    Md Mohsin
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-green-500">
                Company
              </h3>
              <ul className="space-y-1 ">
                <li>
                  <a rel="noopener noreferrer" href="https://www.upwork.com/hire/">
                    Hire Professional
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.investopedia.com/terms/i/investorrelations.asp">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer"
                    href="https://www.astartingpoint.com/static/tos.html?gclid=Cj0KCQiArsefBhCbARIsAP98hXQ7FclpXt-veeRLGlEpni3V888BdOPF5YipJ6SyO7ZFqKmU18_4NgMaApqyEALw_wcB"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer"
                    href="https://www.impress.press/">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 2023 Team PH warriors Programming hero
        </div>
      </footer>
    </div>
  );
};

export default Footer;
