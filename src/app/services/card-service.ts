import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService{


  	constructor() { }

	  valid:boolean;
	  
	listCardKitchen = [
		{
		path: './assets/photo/cuisine1.jpg',
		title: 'titre photo 1',
		desc: 'une petite description de la photo 1',
		like:true,
		comment:''
		}, 
		{
		path: './assets/photo/cuisine2.jpg',
		title: 'titre photo 2',
		desc: 'une petite description de la photo 2',
		like:true,
		comment:''
		},
		{
		path: './assets/photo/cuisine3.jpg',
		title: 'titre photo 3',
		desc: 'une petite description de la photo 3',
		like:false,
		comment:''
		},

		{
			path: '//maisonetdemeure.com/wp-content/uploads/imported/galleries/md-shot-5_SUP_HH_AU09.jpg',
			title: 'la cuisine de Ricardo :)',
			desc: 'Nice cuisine!!',
			like:false,
			comment:''
			}

	];
	
	listCardBathtub = [
		{
			path: './assets/photo/salle_bain1.jpg',
			title: 'titre photo 1',
			desc: 'une petite description de la photo 1',
			like:false,
			comment:''
		}, 
		{
			path: './assets/photo/salle_bain2.jpg',
			title: 'titre photo 2',
			desc: 'une petite description de la photo 2',
			like:false,
			comment:''
		},
		{
			path: './assets/photo/salle_bain3.jpg',
			title: 'titre photo 3',
			desc: 'une petite description de la photo 3',
			like:false,
			comment:''
		}
  ];
  
    listCardCustomImg =[];
  
    getListFromType(typeList:string){
        if (typeList === 'kitchen'){
            return this.listCardKitchen;
		}
		else if(typeList === 'bathtub'){
			return this.listCardBathtub
		}
		else if(typeList === 'custom'){
			return this.listCardCustomImg
		}
	}

	addCardToList(typeList:string, pathImg:string, title:string, description:string){
		// this.checkImage(pathImg, this.success, this.fail);
		// this.checkImage(pathImg, this.success, this.fail);
		// if (!this.valid){
		// 	console.log('valid??');
		// 	console.log(this.valid);
		// 	return
		// }

		let goodList:any[];
		goodList = this.getListFromType(typeList)

		// if (typeList === 'kitchen'){
        //     goodList = this.listCardKitchen;
		// }
		// else if(typeList === 'bathtub'){
		// 	goodList = this.listCardBathtub
		// }
		// else if(typeList === 'custom'){
		// 	goodList= this.listCardCustomImg
		// }
debugger;
		goodList.push(
			{
				path: pathImg,
				title:  title,
				desc: description,
				like:false,
				comment:''
			}
		)
	}

	saveACard(cardType, cardIndex, like, comment){
		console.log('save card ',cardIndex, cardType);
		let goodList = this.getListFromType(cardType);
		goodList[cardIndex].like = like;
		goodList[cardIndex].comment = comment;

	}

	// success(){
	// 	console.log('success')
	// 	this.valid = true;
	// }
	// fail(){
	// 	console.log('fail')
	// 	this.valid= false;
	// }

	// monCallBack(url, message){
	// 	debugger;
	// 	console.log(message);
	// }


	 // Check the existence of an image file at `url` by creating a
  // temporary Image element. The `success` callback is called
  // if the image loads correctly or the image is already complete.
  // The `failure` callback is called if the image fails to load
  // or has failed to load in the past.
//   	checkImage(url, success, failure):boolean {
// 		debugger;
// 		let errors = {};
// 		var img = new Image(),    // the 
// 		loaded = false,
// 		errored = false;

//     // Run only once, when `loaded` is false. If `success` is a
//     // function, it is called with `img` as the context.
// 		img.onload = function () {
// 			if (loaded) {
// 				return;
// 			}

// 			loaded = true;

// 			if (success && success.call) {
// 				success.call(img);
// 				// return true;
// 			}
// 		};

//     // Run only once, when `errored` is false. If `failure` is a
//     // function, it is called with `img` as the context.
//     img.onerror = function () {
//       if (errored) {
//         return;
//       }

//       errors[url] = errored = true;

//       if (failure && failure.call) {
// 		// failure.call(img);
// 		return false;
//       }
//     };

//     // If `url` is in the `errors` object, trigger the `onerror`
//     // callback.
//     if (errors[url]) {
//       img.onerror.call(img);
//       return;
//     }
    
//     // Set the img src to trigger loading
//     img.src = url;

//     // If the image is already complete (i.e. cached), trigger the
//     // `onload` callback.
//     if (img.complete) {
//       img.onload.call(img);
//     }
//   };
	
}
