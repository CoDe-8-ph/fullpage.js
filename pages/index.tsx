import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <Main>
        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={["black", "grey", "red", "blue", "yellow"]}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">1</div>
                <div className="section">
                  Eu nec ferri molestie consequat, vel at alia dolore putant.
                  Labore philosophia ut vix. In vis nostrud interesset
                  appellantur, vis et tation feugiat scripserit. Te nec noster
                  suavitate persecuti. Diceret erroribus cu vix, alii omnes ei
                  sit. Sea an corrumpit patrioque, virtute accumsan nominavi et
                  usu, ex mei dolore vocibus incorrupte. Duo ea saperet
                  tacimates. Sed possim prodesset no, per novum putent doctus
                  ea. Eu mea magna aliquip graecis, pri corpora officiis
                  complectitur ei, lorem saepe consetetur his ad. Meis consulatu
                  ei vis, an altera ocurreret interesset qui. Eu ponderum
                  comprehensam his, case antiopam pri te. Mel ne partem
                  consequat instructior. Ad dicunt malorum sea, ex qui omnes
                  invenire gubergren. Ius cu autem aliquando, pri vide ornatus
                  perpetua an, no has epicuri verterem. Nam at animal pertinax
                  efficiantur. Per alienum torquatos eu. Sed saepe quodsi et,
                  ullum choro definitionem sed et. Ullum elitr comprehensam sed
                  at, sint illum propriae per eu. Eu enim laudem reformidans
                  vel. Pro clita quando ad. Usu te virtute quaestio, ut eruditi
                  tacimates volutpat per. Affert accusamus duo ex, ea pri habeo
                  graece, cu magna dolorum sea. Quas dictas assueverit ad qui,
                  cu duo harum fabulas apeirian, ullum gubergren et sit. Ne
                  cetero recusabo adipiscing quo, cu harum quaestio neglegentur
                  cum. Has tation aliquip ad, virtute volumus definitionem mel
                  ne. Nobis audiam civibus ius at. Ei eum hinc mutat inciderint.
                  Cu maluisset assentior per, graecis ponderum no mel. Eum eu
                  vitae quando gloriatur, cum graece percipitur no, sed errem
                  maiestatis te. Sed porro epicuri te, ad nam malorum verterem.
                  Ea zril aliquip euismod sed.
                </div>
                <div className="section">
                  Eu nec ferri molestie consequat, vel at alia dolore putant.
                  Labore philosophia ut vix. In vis nostrud interesset
                  appellantur, vis et tation feugiat scripserit. Te nec noster
                  suavitate persecuti. Diceret erroribus cu vix, alii omnes ei
                  sit. Sea an corrumpit patrioque, virtute accumsan nominavi et
                  usu, ex mei dolore vocibus incorrupte. Duo ea saperet
                  tacimates. Sed possim prodesset no, per novum putent doctus
                  ea. Eu mea magna aliquip graecis, pri corpora officiis
                  complectitur ei, lorem saepe consetetur his ad. Meis consulatu
                  ei vis, an altera ocurreret interesset qui. Eu ponderum
                  comprehensam his, case antiopam pri te. Mel ne partem
                  consequat instructior. Ad dicunt malorum sea, ex qui omnes
                  invenire gubergren. Ius cu autem aliquando, pri vide ornatus
                  perpetua an, no has epicuri verterem. Nam at animal pertinax
                  efficiantur. Per alienum torquatos eu. Sed saepe quodsi et,
                  ullum choro definitionem sed et. Ullum elitr comprehensam sed
                  at, sint illum propriae per eu. Eu enim laudem reformidans
                  vel.
                </div>
                <div className="section">4</div>
                <div className="section">5</div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
  body {
    font-family: arial;
  }
  .section {
    text-align: center;
    font-size: 4em;
    color: #fff;
  }
`;
