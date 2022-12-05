function Share(props) {
  const handleShare = (ev) => {
    ev.preventDefault();
    props.handleShare();
  };

  return (
    <>
      <fieldset className="form__share">
        <div className="form__share__boxOne js_fieldset_boxOne">
          <i className="fa-solid fa-share-nodes nodes_share form__share__nodesIcon"></i>
          <legend className="form__share__title">Comparte</legend>
          <i className="fa-solid fa-chevron-up js_arrow upsideDown"></i>
        </div>
        <div className="form__share__boxTwo js_boxTwo js_share_box2">
          <button
            className="form__share__btn js_share_btn"
            onClick={handleShare}
          >
            <i className="fa-regular fa-address-card form__share__cardIcon"></i>
            Crear tarjeta
          </button>
        </div>
      </fieldset>
      <section className="form__collapsible js_share_section">
        <div className="form__collapsible__boxText js_box_share_card"></div>
        <a
          href={props.dataResult.success && props.dataResult.cardURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.dataResult.success
            ? props.dataResult.cardURL
            : props.dataResult.error}
        </a>
        {props.dataResult.success ? (
          <a
            href={
              props.dataResult.success &&
              `https://twitter.com/intent/tweet?text=Mira%20mi%20super%20tarjeta%20de%20visita%20creada%20con%20StarCards&url=${props.dataResult.cardURL}`
            }
            className="form__collapsible__shareBtn js_twitter_btn"
          >
            <i className="fa-brands fa-twitter"></i>
            <span>Compartir en twitter</span>
          </a>
        ) : null}
      </section>
    </>
  );
}
export default Share;
