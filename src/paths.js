export const HOME = 'HOME';
export const GIF = 'GIF';
export const JPEG = 'JPEG';
export const PNG = 'PNG';
export const TRANSFER = 'TRANSFER';


// captureIMAGE = () => {
//     /* If yes, populate the captures array with the appropriate image then clear imgURL
//     input field*/
//             if (this.checkJPG(this.state.imgURL) === true) {
//                 let newCapture = [...this.state.captures, 
//                     {imgURL: this.state.imgURL}
//                     ];
//                 this.setState({
//                     captures: newCapture,
//                     imgURL: ''
//             })
//             }
//     /* If no, alert the user about incorrect file type and the clear imgURL input field
//     and captures array*/
//             else{
//                 window.alert("Please input correct file type [.jpg,.jpeg,.jpe,.jif,.jfif,.jfi])")
//                 this.setState({
//                     captures: [],
//                     imgURL: ''
//             })
//             }
//         }

// renderIMAGE = (imgURL, index) => {
//     return(
//         <div key={index}>
//             <img  className="image-describe" src={imgURL} alt="Capture"/>
//             <button type="submit">DOWNLOAD</button>
//         </div>
//     )
// }
