import Navigation from '../Navigation/Navigation';

export default function Header({ light }) {
  return (
    <header className={`Header${light ? ' Header_light' : ''}`}>
      <div className={`Header__logo${light ? ' Header__logo_light' : ''}`}>
        NewsEexplorer
      </div>
      <Navigation light={light} />
    </header>
  );
}
