import React from 'react';

export default function NFT() {
 
  return <div className='nftcontainer'>
        <h1>Title</h1>
        <input type="text" className='nftinput' />
        <h1>Description of the NFT</h1>
        <textarea name="" id="" cols="" rows="5"></textarea>
        <h1>Program</h1>
        <div className="accessbox2">
        <p className='acp1'>No access</p>
        <p className="acp2">Access</p>
        <div className="obox2">
          <div className="accesstexts">
            <p>
              <del>Money Academy</del>{" "}
            </p>
            <p>Coach Academy</p>
            <p>Investment</p>
            <p>Real Estate</p>
            <p>Lifestyle Academy</p>
          </div>
          <div className="line"></div>
          <div className="noaccesstexts">
            <h4 className="accessp">Money Academy</h4>
          </div>
        </div>
        <div className="boxicons">
          <i className="bi bi-arrow-left arrowl2"></i>
          <i className="bi bi-arrow-right arrowr2"></i>
        </div>
      </div>
    <div className="imginput">
        <input type="file" className='fileinput' />
    </div>
    <div className="softwarebox">
        <div className="one">
            <h1>Blockchain</h1>
            <input type="text" />
        </div>
        <div className="two">
            <h1>Price</h1>
            <input type="text" />
        </div>
        <div className="three">
            <h1>Quantity of this NFT</h1>
            <input type="text" />
        </div>
    </div>
    <h1>Overview of the NFT</h1>
        <div className="imagecontainer">
            {
                // <img src="" alt="" />
            }
        </div>
        <button className='btn addnftbtn'>Add the NFT</button>    
    </div>;
}
