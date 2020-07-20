import React,{Component} from 'react';
import { Col,Row,Modal,ModalBody,ModalHeader,Label,Button,Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm,Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

               
//*****************************************CommentForm Class **********************************/

class CommentForm extends Component{

  constructor(props){
      super(props);
      this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
  }


   
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
    handleSubmit(values) {
      this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

      // event.preventDefault();
  }
  render(){
      


      return(
          
          <div>   <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submit Comment </Button>
           <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Submit Comment </ModalHeader>
                  <ModalBody>
                  
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                         
                         <Row className="form-group">
                                             <Label htmlFor="Rating" md={3}>Rating </Label>
                                             <Col md={9}>
                                                 
                                             <Control.select model=".rating" id="rating">
                                               <option value="1">1</option>
                                                   <option value="2">2</option>
                                                 <option value="3">3</option>
                                                 <option value="4">4</option>
                                                 <option value="5">5</option>
                                                 </Control.select>
                                            </Col>
                                         </Row>
                                         <Row className="form-group">
                                             <Label htmlFor="yourname" md={3}>Your Name</Label>
                                             <Col md={9}>
                                                 <Control.text model=".yourname" id="yourname" name="yourname"
                                                     placeholder="Your Name "
                                                     className="form-control"
                                                     validators={{
                                                         required, minLength: minLength(2), maxLength: maxLength(15)
                                                     }}
                                                      />
                                                 <Errors
                                                     className="text-danger"
                                                     model=".yourname"
                                                     show="touched"
                                                     messages={{
                                                         required: 'Required',
                                                         minLength: 'Must be greater than 2 characters',
                                                         maxLength: 'Must be 15 characters or less'
                                                     }}
                                                  />
                                             </Col>
                                         </Row>
                                         <Row className="form-group">
                                             <Label htmlFor="comment" md={3}>Comment</Label>
                                             <Col md={9}>
                                                 <Control.textarea model=".comment" id="textarea" name="textarea"
                                                     placeholder="Comment Here " rows="6"
                                                     className="form-control"
                                                    
                                                      />
                                                
                                             </Col>
                                         </Row>
                                       
                                         <Row className="form-group">
                                             <Col md={{size:10, offset: 2}}>
                                                 <Button type="submit" color="primary">
                                                 Submit 
                                                 </Button>
                                             </Col>
                                         </Row>
                                     </LocalForm>
                  </ModalBody>
              </Modal>
          
          
          </div>
      )
  }
}
               
                   //***********Render Comments Function */
                  function RenderComments({comments,addComment,dishId}) {
                    
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
                      <br/>

                      <CommentForm dishId={dishId} addComment={addComment} />
                     
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








                             /*******************************DishDetail Const to Export ***************************/

            const  DishDetail = (props) => {
              if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if (props.dish != null) 
             
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
                        
                          <RenderComments comments={props.comments}
                              addComment={props.addComment}
                             dishId={props.dish.id}
                         />
                       
                       
                        

                        
                    </div>
                    
                </div>
                
                </div>
            );
           
              
}
export default DishDetail;