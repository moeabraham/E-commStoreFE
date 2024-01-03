import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>

        <div className='smallScrCols'>
            <div className="col smlScrColTop">

                <div className="row"  style={{height:"45vh"}}>
                    <img src="https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className="link" to="/products/1" >Sale</Link>
                    </button>
                </div>

                <div className="row " style={{height:"45vh"}}>
                    <img src="https://images.pexels.com/photos/950308/pexels-photo-950308.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    <button>
                        <Link className="link" to="/products/1" >Women</Link>
                    </button>        
                </div>  

            </div>

            <div className="cols smlScrColBottom"style={{height:"175vh"}}  >
                <div className="  row longCol"  >
                    <img src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className="link" to="/products/1" >New Season</Link>
                    </button>
                </div> 
             </div>
        </div>
        {/* <div className="col smlCol">

            <div className="row">
                <img src="https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <button>
                    <Link className="link" to="/products/1" >Sale</Link>
                </button>
            </div>

            <div className="row smlRow">
                <img src="https://images.pexels.com/photos/950308/pexels-photo-950308.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                <button>
                    <Link className="link" to="/products/1" >Women</Link>
                </button>        
            </div>  

        </div>

        <div className="col smlCol">
            <div className="row">
                <img src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <button>
                    <Link className="link" to="/products/1" >New Season</Link>
                </button>
            </div> 
        </div> */}







        
        <div className="smallScrCols2">

        
        <div className="col col-l ">

            <div className="row ">
                <div className="col smlScrTopRow">
                    <div className="row smlScrTopRow">
                        <img className='menAndAccess' src="https://images.pexels.com/photos/1233720/pexels-photo-1233720.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                        <button className='Hbutton'>
                            <Link className="link" to="/products/1" >Men</Link>
                        </button>
                    </div>  
                </div>

                <div className="col smlScrTopRow">
                    <div className="row smlScrTopRow">
                        <img className='menAndAccess' src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                            <Link className="link" to="/products/1" >Accessories</Link>
                        </button>
                    </div>   
                </div>
            </div>

            <div className="row " >
                <img  src="https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className="link" to="/products/1" >Shoes</Link>
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Categories;
