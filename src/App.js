
//components
import CategoryListing from "./components/category-listing";

function App() {

  const categories = [
    {
      title: 'Hats',
      imageUrl: '/images/1.webp'
    },
    {
      title: 'Accessories',
      imageUrl: '/images/2.webp'
    },
    {
      title: 'Jackets',
      imageUrl: '/images/3.webp'
    },
    {
      title: 'Sneakers',
      imageUrl: '/images/4.webp'
    },
    {
      title: 'Womens',
      imageUrl: '/images/5.webp'
    },
    {
      title: 'Mens',
      imageUrl: '/images/6.webp'
    }
  ]

  return (
    <div className="App">
    
      <CategoryListing categories={categories}/>

    </div>
  )
}

export default App;
