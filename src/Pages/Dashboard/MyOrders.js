import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div>
           <p> My orders: {orders.length}</p>
           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product Name</th>
      </tr>
    </thead>
    <tbody>
      {
          orders.map(order => <tr>
            <th>1</th>
            <td>{order.userName}</td>
            <td>{order.userEmail}</td>
            <td>{order.pName}</td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;