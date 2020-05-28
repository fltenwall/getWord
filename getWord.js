
export default function getWord(wordArr){
	document.onmousedown = () => {
	    document.onmouseup = () => {
	        let txt = window.getSelection ? window.getSelection() : document.selection.createRange().text;
	        txt = txt + "";
	        txt = txt.replace(/^\s+|\s+$/g, "");
	        if(txt.length > 0){
	        	console.log(txt);
	        	wordArr.push(txt);
	        	console.log(wordArr);
	    	}
		};
	};
	return wordArr;
}

