import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from '../actions/userActions'
import Loading from './loading'

function User() {
   //const [data, setData] = useState([]);
   //const [loading, setLoading] = useState(true);
   //const [error, setError] = useState('');
  
   const content = useSelector(state => state.users); //this hook gives us redux store state
   const dispatch = useDispatch(); //this hook gives us dispatch method

   console.log("UserComponent - useSelector");
   console.log(content);
   console.log(content.users);

   useEffect(() => {
    dispatch(fetchUsers());
   },[]);
   /*
   useEffect(() => {
       async function fetchData() {
           try {
               const response = await Api.getUsers();
               const json = await response.json();

            setData(json);
           } catch (e) {
               setError(e.message || 'Unexpected error');
           }
           setLoading(false);
       }
       fetchData();
   }, []);
   */
  
   if (content.isFetching) {
       return <Loading />
   }
   if (content.errorMessage) {
       return <div style={{color: 'red'}}>ERROR: {content.errorMessage}</div>
   }
   return (
       <table>
           <thead>
           <tr>
               <th>Name</th>
               <th>Height</th>
               <th>Mass</th>
           </tr>
           </thead>
           <tbody>
           {content.users && content.users.results &&
            content.users.results.map((user,i)=>{
            return(<tr key={i}>
                   <td>{user.name}</td>
                   <td>{user.height}</td>
                   <td>{user.mass}</td>
               </tr>)
           })
           }
           </tbody>
       </table>
   );
}
export default User;