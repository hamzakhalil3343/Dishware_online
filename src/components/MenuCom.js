import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker,Map } from 'google-maps-react';
const mapStyles = {
  width: '50%',
  height: '50%'
};
const MenuCom = (props) => {
  // state = {
  //       showingInfoWindow: false,  //Hides or the shows the infoWindow
  //       activeMarker: {},          //Shows the active marker upon click
  //       selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  //     };
  const [showingInfoWindow,setshowingInfoWindow]=useState(false);
  const [activeMarker,setactiveMarker]=useState({});
  const [selectedPlace,setselectedPlace]=useState({});


    
    const  onMarkerClick = (props, marker, e) =>
      {setshowingInfoWindow(true);
      // setactiveMarker(marker);
      // setselectedPlace(props);

      }
    
   const onClose = props => {
      if (showingInfoWindow) {
        setshowingInfoWindow(false);
        setactiveMarker(null);
        // this.setState({
        //   showingInfoWindow: false,
        //   activeMarker: null
        // });
      }
    };
    const mouse=(name)=>{
      return(alert(name))
    }
  return (
    <Map google={props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    onClick={onMarkerClick}
    position={{lat: 37.778519, lng: -122.405640}} > </Marker>

        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>hamza</h4>
          </div>
        </InfoWindow>
   
  
 
</Map>
  );
};

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey
    }
  ))(MenuCom)



// import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker,Map } from 'google-maps-react';
// const mapStyles = {
//   width: '50%',
//   height: '50%'
// };
// class MenuCom extends Component {
//   state = {
//     showingInfoWindow: false,  //Hides or the shows the infoWindow
//     activeMarker: {},          //Shows the active marker upon click
//     selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
//   };
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
//   onMarkerClick = (props, marker, e) =>
//   this.setState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   });

// onClose = props => {
//   if (this.state.showingInfoWindow) {
//     this.setState({
//       showingInfoWindow: false,
//       activeMarker: null
//     });
//   }
// };
//   render() {
//     return (
      
//         // Important! Always set the container height explicitly
//         <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//          lat: -1.2884,
//          lng: 36.8233
//         }}
//       >
//         <Marker
//           onClick={this.onMarkerClick}
//           name={'Kenyatta International Convention Centre'}
//         />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper(
//   (props) => ({
//     apiKey: props.apiKey
//   }
// ))(MenuCom)