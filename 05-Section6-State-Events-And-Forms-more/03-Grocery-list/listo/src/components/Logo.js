export default function Logo({ onLogout, user }) {
  return (
    <header className="logo-header">
      <h1 className="app-logo">✏️ Listo 🛒</h1>

      <button className="logout-btn" onClick={onLogout}>
        <img
          src={
            user?.photoURL ||
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          }
          alt="User Avatar"
          className="logout-avatar"
        />
        <span className="logout-text">Logout</span>
      </button>
    </header>
  );
}
