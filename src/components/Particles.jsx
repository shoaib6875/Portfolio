function Particles() {
  return (
    <div className="particles-container">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="particle" />
      ))}
    </div>
  );
}

export default Particles;