import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

               

                      
               
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
                    
                      
                    <Card>
                       <CardImg top src={dish.image} alt={dish.name} />
                       <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                         
                       </CardBody>
                   </Card>
                   
                    
                   
    
                       );
                       else
                       return(
                        <div>    
                         </div>
                        );
                       
                      }










            const  DishDetail = (props) => {
              
             
              return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                   
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <br></br>
                     <CommentForm></CommentForm>
                        

                        
                    </div>
                    
                </div>
                
                </div>
            );
           
              
                  }
export default DishDetail;