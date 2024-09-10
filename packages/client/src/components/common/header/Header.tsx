import { Text } from '@/components/ui';
import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  return (
    <header className="header fixed top-0 z-50 w-full">
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
        <section>
          <Link to={'/'}>login</Link>
        </section>
      </div>
    </header>
  );
}