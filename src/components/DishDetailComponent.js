import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


                   //***********Render Comments Function */
                  function RenderComments({comments}) {
                    return(
                      <div className="ist-unstyled ">
                        <h4>Comments</h4>
                        <Card>
                      <CardText>{comments.map((comment)=>{return(
                        <div>
                          {comment.comment}  
                          <br></br>
                     <b>{comment.author}</b>    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}

                        </div>
                      
                       
                       );})}</CardText>
                    
                      </Card>

                      </div>
                      

                    )
                  }
 

                 //**********Render Dish Function */
                 function RenderDish({dish}) {
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
                        {/* {this.RenderComments(dish.comments)}  
                        */}
                        
                     <RenderComments comments={dish.comments} ></RenderComments>
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












            const  DishDetail = (props) => {

                 return( <div className="container" >
                   {/* {this.RenderDish(this.props.dish)} */}
                   <RenderDish dish={props.dish}/>

                   </div>  );
           
              
                  }
export default DishDetail;