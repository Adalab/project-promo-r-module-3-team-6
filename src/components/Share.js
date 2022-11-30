function Share(props){
    
    return(
        <>
<fieldset className='form__share'>
      <div className='form__share__boxOne js_fieldset_boxOne'>
        <i className='fa-solid fa-share-nodes nodes_share form__share__nodesIcon'></i>
        <legend className='form__share__title'>Comparte</legend>
        <i className='fa-solid fa-chevron-up js_arrow upsideDown'></i>
      </div>
      <div className='form__share__boxTwo js_boxTwo js_share_box2'>
        <button className='form__share__btn js_share_btn' onClick={props.handleShare}>
          <i className='fa-regular fa-address-card form__share__cardIcon'></i>
          Crear tarjeta
        </button>
      </div>
    </fieldset>
     <section className='form__collapsible js_share_section'>
     <div className='form__collapsible__boxText js_box_share_card'></div>
     <a href='/'> {props.dataResult.success ? props.dataResult.cardURL : props.dataResult.error}</a>
     <a href='/' className='form__collapsible__shareBtn js_twitter_btn'>
       <i className='fa-brands fa-twitter'></i>
       <span>Compartir en twitter</span>
     </a>
   </section>
   </>
    );
}
export default Share;