function ChangeSpell({ title, castSpell }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <button className="btn" type="button" onClick={() => castSpell('lumos')}>Lumos</button>
      <button className="btn" type="button" onClick={() => castSpell('nox')}>Nox</button>
    </div>
  );
}

export default ChangeSpell;
