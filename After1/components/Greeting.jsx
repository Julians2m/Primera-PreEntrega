

function Greeting() {
  const containerStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const messageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h2 style={messageStyle}>¡Hola, mundo!</h2>
    </div>
  );
}

export default Greeting;
