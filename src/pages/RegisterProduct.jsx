import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { app } from '../../config/firebaseConfig'
import Background from "../components/Background";
import Title from "../components/Title";

function RegisterProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate()

  const db = getFirestore(app)
  const productCollectionRef = collection(db, 'products')
  let registeredProduct = {}

  async function createProduct() {
    const product = await addDoc(productCollectionRef, {
      name,
      price,
      category
    })
    registeredProduct = product
  }

  return (
    <div className='h-screen flex flex-col items-center bg-primaryBackground'>
      <div className='p-6 flex justify-center items-center'>
        <Background />
      </div>
      <form>
        <Title>Cadastre suas Plantas</Title>

        <div className='my-5 flex flex-col'>
          <label className='text-white mr-1' htmlFor="name">Nome:</label>
          <input className='text-black rounded-lg p-1' placeholder="Tulipas" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='my-5 flex flex-col'>
          <label className='text-white mr-2' htmlFor="price">Preço:</label>
          <input className='text-black rounded-lg p-1' placeholder="15" type="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className='my-5 flex flex-col'>
          <label className='text-white mr-4' htmlFor="Category">Categoria:</label>
          <input className='text-black rounded-lg p-1' placeholder="Plantas com Flores" type="text" name="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button className='btn-secondary w-48 mx-20' type="submit" onClick={createProduct}>Cadastrar</button>
      </form>
      {registeredProduct.name ?
        <p>{registeredProduct.name ? `${registeredProduct.name} registrado com sucesso!` : 'Produto não foi registrado'}</p>
        : ''
      }
      <button className='btn-primary' type="button" onClick={() => navigate("/loja")}>Ir para a loja</button>
    </div>
  );
}

export default RegisterProduct;