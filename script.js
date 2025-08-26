body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f3f3f3;
  margin: 0;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 420px;
}

h1 {
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

input, button {
  width: 100%;
  padding: 10px;
  margin: 6px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

.result {
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
  background: #f9fafb;
  border: 1px solid #ddd;
}
