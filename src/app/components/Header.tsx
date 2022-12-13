import Image from 'next/image'
import Link from 'next/link'

// components
import LogoutButton from './LogoutButton'

export default function Header() {
  const session = true

  if (session) {
    return (
      <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm'>
        <div className='flex space-x-2'>
          <Image
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aa68f80-158e-4744-95e9-da53a23e1eba/dasli0e-0189993a-d23c-4825-a6fc-aa0403374080.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYTY4ZjgwLTE1OGUtNDc0NC05NWU5LWRhNTNhMjNlMWViYVwvZGFzbGkwZS0wMTg5OTkzYS1kMjNjLTQ4MjUtYTZmYy1hYTA0MDMzNzQwODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fIqn95jSk9V2Ue2AWhx7Ow8k4B1T7to-RjMXJs04mmA'
            alt='avatar'
            height={10}
            width={50}
            className='rounded-full mx-2 object-contain'
          />
          <div>
            <p className='text-blue-400'>Logged in as:</p>
            <p className='font-bold text-lg'>Brandon Franks</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    )
  }

  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
      <div className='flex flex-col items-center space-y-5'>
        <div className='flex space-x-2 items bg-center'>
          <Image
            src='https://links.papareact.com/jne'
            alt='logo'
            height={10}
            width={50}
          />
          <p className='text-blue-400'>Welcome to Meta Messenger</p>
        </div>
        <Link className='btn' href='/auth/signin'>
          Sign In
        </Link>
      </div>
    </header>
  )
}
