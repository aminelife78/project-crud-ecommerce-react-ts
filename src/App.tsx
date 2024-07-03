import "./App.css";
import ProductCard from "./Components/ProductCard/ProductCard";
import Button from "./Components/Ui/Button";
import InputForm from "./Components/Ui/InputForm";
import Modal from "./Components/Ui/Modal";
import { formInputsList, productList } from "./data/data";
import { useState } from "react";

function App() {
  /*______ state ______*/
  const [isOpen, setIsOpen] = useState(false);

  /*______ jsx map ______*/
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const FormInput = formInputsList.map((input) => {
    return (
      <div key={input.id} className="flex flex-col ">
        <label
          htmlFor={input.id}
          className="pb-[1px] text-sm font-mediumtext-gray-700"
        >
          {input.label}
        </label>
        <InputForm type={input.type} name={input.name} id={input.id} />
      </div>
    );
  });
  /*______ handler ______*/
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /*______ render ______*/
  return (
    <main className="container ">
      <Button bgColor="bg-blue-600" widths="w-fit" onClick={openModal}>
        Ajouter Produit
      </Button>
      <div className=" my-5 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {renderProductList}
      </div>
      <Modal
        title="Ajouter un nouveau Produit "
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <div className="space-y-3">
        {FormInput}
        <div className="flex space-x-1 ">
          <Button bgColor="bg-blue-400">Submit</Button>
          <Button bgColor="bg-gray-400" onClick={closeModal}>
            Cancel
          </Button>
        </div>
        </div>
      </Modal>
    </main>
  );
}

export default App;
