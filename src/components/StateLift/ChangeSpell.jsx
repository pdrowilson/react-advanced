function ChangeSpell({ title, castSpell }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <button className="btn" type="button" onClick={() => castSpell('Lumos')}>Lumos</button>
      <button className="btn btn-dark" type="button" onClick={() => castSpell('Nox')}>Nox</button>
    </div>
  );
}

export default ChangeSpell;
