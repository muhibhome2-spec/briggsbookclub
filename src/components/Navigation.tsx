import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from './ui/Container';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToJoin = () => {
    if (location.pathname === '/') {
      document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/hadiyah');
    }
  };

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-warm-200/40"
      role="navigation"
      aria-label="Main navigation"
    >
      <Container size="md" className="flex items-center justify-between h-16">
        <Link
          to="/"
          className="text-base sm:text-lg font-serif text-warm-900 hover:text-sage-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 rounded-sm"
          aria-label="Go to home page"
        >
          Briggs&rsquo; Book Club
        </Link>

        <button
          onClick={goToJoin}
          className="min-h-[44px] px-5 py-2.5 bg-sage-600 text-cream-50 rounded-lg text-sm font-semibold hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
          aria-label="Join the book club"
        >
          Join
        </button>
      </Container>
    </nav>
  );
}
