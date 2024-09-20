import './App.css';

function AppJSX() {
  const name = "mina"
  const list = ['딸기', '바나나', '우유']
  return (
    <div>
      <h1>{`Hello! ${name}!`}</h1>
      <h2 className='orange'>test2</h2>
      <p>{name}</p>

      <ul>
        {
          list.map(item=>(
            <li>{item}</li>
          ))
        }
      </ul>


    <img
      style={{width: '200px', height: '200px'}}
      src="https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="charging" 
    />

    </div>
  );
}

export default AppJSX;
