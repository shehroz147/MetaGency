import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowPrograms(props) {
    const programs = [
    {
      name: "Money Academy",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "LifeStyle Acedemy",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Business Academy",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Coach Academy",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Investment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Real Estate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
  ];
  return <div>
            <Link to = "/createprogram"><button className='btn createprogrambtn'>Create +</button></Link>
            <div className="showprogram">
            <table class="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
             </tr>
          </thead>
          <tbody>
          {
              programs.map((pro)=>(
                <tr>
                <td className='pname'>{pro.name}</td>
                <td><div className="dataicons">
                <Link to = "/editprogram"> <i className="bi bi-gear-fill" onClick={()=>props.selectprogram(pro)}></i></Link>
                         <i className="bi bi-trash-fill"></i>
                     </div></td>
              </tr>
              ))
          }
            
          </tbody>
        </table>
        

            </div>
        </div>;
}