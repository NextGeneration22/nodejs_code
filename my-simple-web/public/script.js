const mathBooks =[
  {g:'<img id="bookImage" src="./mathbooks/basic math.png"/>', file: 'Basic Math & Pre-Algebra ( PDFDrive ).pdf'},
  {g:'<img id="bookImage" src="./mathbooks/Algebra 1.png"/>', file: 'Algebra I For Dummies, 2nd Edition ( PDFDrive ).pdf'},
  {g:'<img id="bookImage" src="./mathbooks/Algebra 2.png"/>', file: 'Algebra II For Dummies ( PDFDrive ).pdf'},
  {g:'<img id="bookImage" src="./mathbooks/trigonometry.png"/>', file: 'Trigonometry For Dummies ( PDFDrive ).pdf'},
  {g:'<img id="bookImage" src="./mathbooks/calculus.png"/>',file: 'Calculus For Dummies - pdf.th7.cn ( PDFDrive ).pdf'},
  {g:'<img id="bookImage" src="./mathbooks/calculus 2.png"/>',file: 'Calculus For Dummies - pdf.th7.cn ( PDFDrive ).pdf'},
  {g:'<img id="bookImage" src="./mathbooks/deferential equation.png">',file: 'Calculus For Dummies - pdf.th7.cn ( PDFDrive ).pdf'}
];

function disMathBook(){
  document.getElementById('bookRead').innerHTML=mathBooks.map((item)=>`<button onClick="downloadBook('${item.file}')">${item.g}</button>`) ;
};
disMathBook();
function downloadBook(fileName){
  window.location.href=`/download/${fileName}`
}