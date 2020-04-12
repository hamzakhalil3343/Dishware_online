import React,{Component} from 'react';
import Moment from 'react-moment';

import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
class DishDetail extends Component{
           

    constructor(props) {
      
        super(props);
      
        console.log("dish is "+this.props.passdata);
      }
                  //***********Render Comments Function */
                  renderComments(comments){
                    return(
                      <div className="ist-unstyled ">
                        
                        <Card>
                        <h4>Comments</h4>
                      <CardText>{comments.map((comment)=>{return(
                        <div>
                          {comment.comment}  
                          <br></br>
                     <b>{comment.author}</b>     <Moment format="YYYY/MM/DD">
                {comment.date}
            </Moment>

                        </div>
                      
                       
                       );})}</CardText>
                    
                      </Card>

                      </div>
                      

                    )
                  }
 

                 //**********Render Dish Function */
                 renderDish(dish) {
                  if( dish!=null)
            
                  return(
                    <div className="container">
    
    
    
                    <div  className="row">
                    <div className="col-12 col-md-5 m-1" >
                      
                    <Card>
                       <CardImg top src={dish.image} alt={dish.name} />
                       <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                         
                       </CardBody>
                   </Card>
                     </div>
                     
                     <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)} 
                     
                     </div>
                    </div>
    
    
                    </div>
                    
                   
    
                       );
                       else
                       return(
                        <div>    
                         </div>
                        );
                       
                      }












          render(){

                 return( <div >{this.renderDish(this.props.passdata)}</div>  );
           
              
          }



    
}
export default DishDetail;