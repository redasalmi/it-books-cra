import { Outlet } from 'react-router-dom';

import Navbar from '~/components/Navbar';
import Welcome from '~/components/Welcome';
import Footer from '~/components/Footer';

const Main = () => (
  <>
    <Navbar />
    <Welcome />
    <main className='container content'>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Main;
