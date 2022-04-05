import {useState} from 'react';
import './index.css'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'orange juice'
    },
    {
     id: 2,
     checked: false,
     item: 'apple juice'
   },
   {
     id: 3,
     checked: false,
     item: 'mango juice'
   }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item)=>item.id === id ? {...item, checked: !item.checked} : item);
   setItems(listItems);
   localStorage.setItem('shoppinglist', JSON.stringify(listItems));
   }

   const handleDelete = (id) =>{
     const listItems = items.filter((item) =>item.id !== id);
     setItems(listItems);
     localStorage.setItem('shoppinglist', JSON.stringify(listItems));
   }

 return (
  <div className="App">
    <Header title="Groceries List"/>
    <Content
     items={items}
     setItems={setItems}
     handleCheck={handleCheck} 
     handleDelete={handleDelete}
    />
    <Footer />
  </div>
  );
}

export default App;
