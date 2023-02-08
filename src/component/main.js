import React from 'react';
import './main.css';

export default function Main(){
    return(
        <div className='main'>
            <div className='filters'>
                
                <div id="location">
                <h4>location</h4>
                <input id="location-searchBar" type='text' placeholder='search localities'></input>
                <a href=''><img src='https://cdn-icons-png.flaticon.com/512/3917/3917754.png' width="20px" height="20px"
                ></img></a>


<br/>
                <input type='checkbox' />coimbatore
                
                </div>
                <hr/>
                <div className='price'>
                    <h4>price</h4>
                    
                    <div>
                    <input type="range" id="price" name="price"
                            min="0" max="11"/>
                    <label for="price">price</label>
                    </div>

                </div>
                <div className='sq.feet'>
                    <h4>sq.feet</h4>
                    
                    <div>
                    <input type="range" id="sqFeet" name="sq.feet"
                            min="0" max="11"/>
                    <label for="sq.feet">sq.feet</label>
                    </div>

                </div>
                <div>
                <h4>furnishing status</h4>
                <input type='radio'/>fully furnished
                <input type='radio'/>not furnished<br/>
                <input type='radio'/>half

                </div>

                
                <h3>age of property</h3>
                <input type='radio'/>1-5years
                <input type='radio'/>5-10yrs<br/>
                <input type='radio'/>10+yrs
                <h3>no.of bedrooms</h3>
                <input type='radio'/>1BHK
                <input type='radio'/>2BHK<br/>
                <input type='radio'/>3BHK
                <h3>types of property</h3>
                <input type='radio'/>Appartment
                <input type='radio'/>villa<br/>
                <input type='radio'/>house
                <h3>available for</h3>
                <input type='radio'/>men
                <input type='radio'/>women<br/>
                <input type='radio'/>married

            </div>
            <div className='properties'>
               
                <img></img>
                </div>
        </div>
    )
    
}