import * as firebase from 'firebase';
import firebaseConfig from "../../config/firebase";

async function firebaseLogin(email, password) {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password).then((user)=>{        
        console.log('An User has logged in with email: '+user.email);
        //console.log(firebase.auth().currentUser);
    }).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
}

function getFromDB(column, field, callback){
    const objRef = firebase.database().ref(column);
    objRef.once('value', (snap) => {
      
		// get children as an array
		var items = [];
		snap.forEach((child) => {
			items.push({
				value: child.val()[field],
				_key: child.key
			});
		});
		callback(items);
    });
}

export default firebaseServices = {
	firebaseLogin, 
	getFromDB 
};