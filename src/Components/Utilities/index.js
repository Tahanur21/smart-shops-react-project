// getValue
const getValue =()=>{
    const addAll = localStorage.getItem('data');
    if(addAll){
        const data = JSON.parse(addAll)
        return data;
    }
    else{
        return [];
    }
}

// addValue
const addValue = (cart) =>{
    const data = getValue();
    const isExist = data.find(item=> item.product_id === cart.product_id);
    if(isExist){
        alert('already added');
        return;
    }
    data.push(cart);
    localStorage.setItem('data',JSON.stringify(data));
}

// removeValue
const removeValue = (cart) =>{
    const data = getValue();
    const removeData = data.filter(item=> item.product_id != cart.product_id);
    localStorage.setItem('data',JSON.stringify(removeData));
}

// totalAmount 
// const handleAmount = (amount)=>{
//     const totalAmount = getValue();
//     console.log()

// }

export {addValue,getValue,removeValue}
