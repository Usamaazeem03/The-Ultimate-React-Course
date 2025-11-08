export default function Logo({ onLogout, user }) {
  return (
    <header className="logo-header">
      <h1 className="app-logo">✏️ Listo 🛒</h1>

      <button className="logout-btn" onClick={onLogout}>
        <img
          src={
            user?.photoURL ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAaVBMVEUAAAD////8/PwaGhr5+flVVVWbm5vKysqurq7s7Ozi4uL19fXPz8/n5+ff39/BwcG0tLTV1dWkpKQ5OTmRkZELCwspKSlJSUkjIyNDQ0N0dHRnZ2cUFBRtbW2EhIRQUFBeXl4xMTF8fHwtjVbsAAADF0lEQVRogb3Z2ZKqMBAG4KCyBJBdFkFc3v8hB8s6DiTpTrdmzn+NX1EhS3cUHikyq8ZrPYm+9s9FnNB+5AnKQ2HTiVX2YxC7wuPLSahpm4MLXM6a/OKj3dd47JvtJY9v8RCkl1xtI4/juT7a6wwWHcXTCbWF8PFJieFHC73kgk4aBJc3Oy6aD/GAYAtRfoRLko0ODIwDi0dL+AFe7ol4B786iFdEWwjJxpMLGQ/YeEYdlWUXYOM52RbtkYs3dHwC5wuEn+n4qeDi8DauJ+LidwYOThcI7/8S7+zmOxUXHxk4+4NSt60lU87FCzreZ1y8pOM1ZIM46Yx7ZWbjjPUPH3QgTt659nB5AR9z1HEBFz+GpzS7gw8irLR4kHBwBeF41hJsH7HRco7wTWtwAdlwe83VY/WWBd/Zhh3cVQi4ZSm1FtvatlRwiTGg403BvRRqLm72dpHQKlaDgfaR+pODe8dAPa67nNREkzpo75A13b3dn8S0b2s/kpQOF8HLvIiCYj2NZRYWUZ7GGzhcHipy6Msa8aQZXwPRzmibLM+vuVRfAuNzBjxbH85TAfLJZgEHhnJUxwtlZj+AKVcq1Uetzx8VP+hrsm/0qbGTD60BnrTiSMXNu8mcbgbnEJqLYLWuU3CoE9pfqveYZsEIrdoCw/FSaLg9zr5pub5zCmE84dS2xnQwTjs10QQQXn794suElABOu0mwpDDjR8ppb836fmeF0xtyNKERd/Lim0rmF0cv4jiRBtzJ53ymMOCMnhnPrOMxpzlEMx40HCwh2LlnGh65sldF3htnNJ62RCq+41xTWDJruINN619uOxV3Z4taxROHuFBxYu9Gy0HBGbdx9kgFZ9xS2BMruMM1JESm4I5OildSBXe24T4T/k/8Tz+os0PumUTBif9Q0KIuop3t/yZGBnX5uztCV/XiG3e4/lMNl84O6Fui4e42gN96blXOXd3YZ8+EZ5wLeTBXacS9sv7e9te97qZtKdFuipJx00dvuzk50/97MqQNttcZapNbzh+PzaC1/3rvfyyD651ZxfS1X5X6vesPPsslEEXGy6wAAAAASUVORK5CYII="
          }
          alt="User Avatar"
          className="logout-avatar"
        />
        <span className="logout-text">Logout</span>
      </button>
    </header>
  );
}
