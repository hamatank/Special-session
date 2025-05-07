import LinkCp from "./LinkCp";

function ListCp(props){
  console.log('li 전달받은 속성값들 중 : ', props)

  return(
    <li><LinkCp hrefPr={PaymentResponse.hrefPr} textPr={props.textPr} /></li>
  );
}
export default ListCp;