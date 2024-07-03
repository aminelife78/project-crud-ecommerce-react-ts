import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import Button from './Components/Ui/Button'
import Modal from './Components/Ui/Modal'
import { productList } from './data/data'
import { useState } from 'react'

function App() {

  /*______ state ______*/
  const [isOpen, setIsOpen] = useState(false)


/*______ jsx map ______*/
  const renderProductList = productList.map(product=>{
    return (
      <ProductCard key={product.id} product={product}/>
    )
  })
/*______ handler ______*/
function closeModal() {
  setIsOpen(false)
}

function openModal() {
  setIsOpen(true)
}


/*______ render ______*/
  return (
    <main className='container '>
      <Button bgColor="bg-blue-600" onClick={openModal}>Ajouter Produit</Button>
    <div className=' my-5 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
    
      {renderProductList}
    
    </div>
    <Modal title='Ajouter un nouveau Produit ' isOpen={isOpen} closeModal={closeModal}>
      <div className='flex space-x-1'>

      <Button bgColor="bg-blue-400">Submit</Button>
      <Button bgColor="bg-gray-400" onClick={closeModal}>Cancel</Button>
    
      </div>


    </Modal>
    </main>
  )
}

export default App
