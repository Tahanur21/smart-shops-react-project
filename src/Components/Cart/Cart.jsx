
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Cart = ({item,handleRemove}) => {
     const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = item || {};

    return (
        <div className='flex flex-col lg:flex-row gap-10 items-center bg-base-100 rounded-4xl shadow-sm max-w-6xl mx-auto p-4'>
            <figure className='w-2/4 lg:w-52 rounded-4xl border border-[#9538E2]'>
                <img className=' rounded-4xl' src={product_image} alt={product_title} />
            </figure>
            <div className='flex-2 space-y-6 px-4 lg:px-1'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-semibold'>{product_title}</h1>
                    <button
                    onClick={()=>handleRemove(item)}
                    className='text-4xl font-light text-red-400 hover:scale-110 transition'>
                        <IoIosCloseCircleOutline  className='cursor-pointer'/>
                    </button>
                </div>
                <p className='font-semibold'>Description : <span className='text-sm font-light'>{description}</span></p>
                <p className='font-semibold'>Price : ${price}</p>
            </div>
        </div>
    );
};

export default Cart;