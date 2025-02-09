'use client';

import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>لواسان</span>
            <span className='text-slate-700'>لاین</span>
          </h1>
        </Link>
        <form
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='جستجو...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link href='/'>
            <li className='hidden md:inline text-slate-700 hover:underline'>
              ثبت نام
            </li>
          </Link>
            <Link href='/sign-in'>
              <li className='hidden md:inline text-slate-700 hover:underline'>
                ورود
              </li>
            </Link>
        </ul>
      </div>
    </header>
  );
}
