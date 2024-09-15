import { Button, Text } from '@/components/ui';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  return (
    <header className="header fixed top-0 z-50 w-full px-4">
      <div className="mx-auto flex h-16 max-w-desktop items-center justify-between">
        <section className="flex items-center gap-16">
          <Link to={'/'}>
            <Text variant={'subtitle'} asChild>
              <h6>Lucky Pick</h6>
            </Text>
          </Link>
          <nav className="flex gap-8">
            <Link to={'/create'}>create</Link>
            <Link to={'/'}>faq</Link>
            <Link to={'/raffles'}>my raffles</Link>
          </nav>
        </section>
        <section className="flex items-center gap-2">
          <HeaderAccountSection />
        </section>
      </div>
    </header>
  );
}

export function HeaderAccountSection() {
  const { user, logout } = useAuth();

  return user === null ? (
    <Link to={'/login'}>login</Link>
  ) : (
    <>
      <Text>{user.username}</Text>
      <Button onClick={() => logout()}>logout</Button>
    </>
  );
}
