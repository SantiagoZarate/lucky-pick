import { Text } from '@/components/ui';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 w-full">
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
          </nav>
        </section>
        <section>
          <Link to={'/'}>login</Link>
        </section>
      </div>
    </header>
  );
}
