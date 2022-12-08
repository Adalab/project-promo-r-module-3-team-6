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

      <main className="create-main">
        <PreviewCard
          person={props.person}
          handleReset={props.handleReset}
          avatar={props.avatar}
          updateAvatar={props.updateAvatar}
        ></PreviewCard>

        <form action="" className="form js_form" onSubmit={handleSubmit}>
          <Design
            designIsOpen={props.designIsOpen}
            arrowDesign={props.arrowDesign}
            handleCollapseDesign={props.handleCollapseDesign}
            handleInput={props.handleInput}
            person={props.person}
          ></Design>
          <Fill
            handleInput={props.handleInput}
            person={props.person}
            handleAvatar={props.handleAvatar}
            updateAvatar={props.updateAvatar}
            avatar={props.avatar}
            fillIsOpen={props.fillIsOpen}
            handleCollapseFill={props.handleCollapseFill}
          ></Fill>
          <Share
            handleShare={props.handleShare}
            dataResult={props.dataResult}
            shareIsOpen={props.shareIsOpen}
            handleCollapseShare={props.handleCollapseShare}
          ></Share>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Card;
