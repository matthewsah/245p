import './App.css';

import LoginForm from './LoginForm'


const handleSubmit = (data) => {
  const json = JSON.stringify(data, null, 4);
  console.clear(); // clearing previous console logs
  console.log(json); // showing what we actually submitted thru the form
};

function App() {
  return (
    <div className="App">
        <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
