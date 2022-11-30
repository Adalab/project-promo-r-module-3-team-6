import Header from './Header';
import PreviewCard from './PreviewCard';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Footer from './Footer';
function Card(props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
      };
    return (
        <>
<Header></Header>

<main className='create-main'>
  <PreviewCard person={props.person} handle={props.handleReset}></PreviewCard>

  <form action='' className='form js_form' onSubmit={handleSubmit}>
    <Design handleInput={props.handleInput} person={props.person}></Design>
    <Fill handleInput={props.handleInput} person={props.person}></Fill>
    <Share handleShare={props.handleShare} dataResult={props.dataResult}></Share>
  </form>
</main>
<Footer></Footer>
</>
    );
}

export default Card;
