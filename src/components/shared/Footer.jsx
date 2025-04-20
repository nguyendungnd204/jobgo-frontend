import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Go</h2>
            <p className="text-sm text-gray-500">© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400 text-gray-500"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24h11.49v-9.294H9.691V11.01h3.123V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-400 text-gray-500"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.917 4.917 0 003.946 4.827 4.935 4.935 0 01-2.224.085 4.919 4.919 0 004.59 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.213c9.055 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-gray-400 text-gray-500"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.85v-5.569c0-1.328-.027-3.036-1.849-3.036-1.852 0-2.135 1.445-2.135 2.939v5.666H9.276V9h3.44v1.561h.049c.48-.905 1.654-1.849 3.405-1.849 3.641 0 4.314 2.396 4.314 5.509v6.231zM5.337 7.433a1.998 1.998 0 11.001-3.996 1.998 1.998 0 01-.001 3.996zm1.773 13.019H3.56V9h3.55v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .771 23.2 0 22.222 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
