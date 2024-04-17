import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-center dark:bg-secondary-600">
      {/* <!--Sign-up form section--> */}
      <div className="px-6 pt-6">
        <div className="mb-6 text-center">
          <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Stay up to date with our latest news
          </h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            Sign up to receive email updates about our new features, updates, and offers
          </p>
        </div>
        <div className="flex justify-center">
          <form action="">
            <button
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700" />
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <span>
          © 2023 Copyright:
        </span>
      </div>
    </footer>
  )
}

export default Footer