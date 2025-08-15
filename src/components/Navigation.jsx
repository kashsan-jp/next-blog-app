import getAuthUser from '@/lib/getAuthUser'
import NavLink from './NavLink'
import { logout } from '@/actions/auth';

export default async function Navigation() {

    const authUser = await getAuthUser();

    // console.log(authUser);

  return (
    <nav className='h-1'>
        <div className='lg:mr-150 sm:mr-0 '>
            <NavLink label="Home" href="/" />
        </div>
            { authUser ? 
                (
                    <div className='flex items-center sm:text-sm lg:text-lg sm:gap-0.1'>
                        <NavLink label="New Post" href="/posts/create" />
                        <NavLink label="Dashboard" href="/dashboard" />
                        <form action={logout}>
                            <button className='nav-link'>Logout</button>
                        </form>
                    </div>
                    ) : (
                    <div>
                        {/* <NavLink label="Register" href="/register" /> */}
                        <NavLink label="Login" href="/login" />
                    </div>
                )}
    </nav>
  );
}
