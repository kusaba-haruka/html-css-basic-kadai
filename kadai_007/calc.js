let num = 9;

// 変数numの値を出力する（確認用）
console.log(num);


// 変数numの値が3と5の倍数であれば、「 3と5の倍数です」という文字列を出力する
if(num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
  }

else if (num % 3 == 0){
    console.log('3の倍数です');
  }


  else if (num % 5 == 0){
    console.log('5の倍数です');
  }

// それ以外のときは、「num」という文字列を出力する
else {
    console.log('num');
  }





 