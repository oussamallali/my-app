import logo from "./logo.svg";
import "./App.css";
import { PopupProvider } from "react-customizable-popup";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
const App = () => {
  const [show, setShow] = useState(false);
  const [showFirstTime, setShowFirstTime] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowMore = () => {
    setShowMore(!showMore);
    validationMessageRef.current?.scrollTo({ x: 0, y: 0, animated: false });
    setShowMoreButton(false);
  };
  const handleScroll = (e) => {
    const bottom =
      Math.abs(
        e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
      ) < 1;
    if (bottom) {
      console.log("bottom");
      setShowMoreButton(true);
    }
  };

  const validationMessageRef = useRef();

  useEffect(() => {
    if (!show && showFirstTime) {
      setTimeout(() => handleShow(), 2000); // Open the popup after 2 seconds
    }

    if (showMore) {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
  }, []);

  const showMoreRender = () => {
    return (
      <div ref={validationMessageRef}>
        <p>
          <span style={{ color: "red", fontWeight: "bold" }}>
            Qui est le responsable du traitement de vos données personnelles ?
          </span>
          <br />
          La Compagnie d’assurances des Hydrocarbures, par abréviation CASH
          Assurances Spa, est une compagnie ayant pour mission de fournir des
          couvertures d’assurances dommages multi- risques. Elle est responsable
          du traitement de vos données personnelles et les termes « Nos », «
          nous », « notre » et « CASH Assurances » font référence à la Compagnie
          d’Assurances des Hydrocarbures.
          <br />
          <br />
          <span style={{ color: "red", fontWeight: "bold" }}>
            Quelles « données personnelles que nous recueillons et traitons ?
          </span>
          <br />
          Est considérée comme « donnée à caractère personnel », toute
          information se rapportant à une personne physique identifiée ou
          identifiable directement ou indirectement, par référence à un
          identifiant, tel un nom, une adresse, une immatriculation de véhicule,
          un numéro de téléphone ou de la combinaison de plusieurs de ces
          éléments. Les données susceptibles d’être collectées sont les
          suivantes :
          <ul>
            <li>
              Données d’identification :(Nom et prénom, date et lieu de
              naissance, sexe, situation sociale et familiale ;
            </li>
            <li>
              Données de contact (adresse électronique, numéro de téléphone –
              mobile et/ou fixe, adresse de résidence) ;
            </li>
            <li>
              Les données liées à votre Carte Nationale d’identité, votre permis
              de conduire ou passeport ;
            </li>
            <li>Situation professionnelle ;</li>
            <li>
              Les données liées aux biens assurables (Habitation, bien
              immobilier, véhicule etc.) ;
            </li>
            <li>
              N° de carte CIB ou DAHABIA lors des paiements électroniques des
              contrats validés.
            </li>
          </ul>
          <span style={{ color: "red", fontWeight: "bold" }}>
            Comment sont collectées vos données personnelles ?
          </span>
          <br />
          CASH Assurances collecte et traite vos données personnelles,
          principalement, lors des opérations suivantes :
          <ul>
            <li>Etablissement de devis en ligne ; </li>
            <li>Souscription et exécution des Contrats d'assurance ;</li>
            <li>Analyse statistique et marketing.</li>
            <li>Téléchargement de votre candidature (CV ou autres)</li>
            <li>
              Utilisation de la messagerie lors de l’abonnement à la newsletter
            </li>
            <li>Accès à l’espace client.</li>
          </ul>
          <span style={{ color: "red", fontWeight: "bold" }}>
            Pour quelles finalités nous traitons vos données personnelles ?
          </span>
          <br />
          Vos données sont collectées dans le cadre l’exécution des services et
          prestations demandés sur notre site web et nos différentes plateformes
          sur les réseaux sociaux. Lors de la collecte de vos données
          personnelles, vous êtes informés si certaines données personnelles
          doivent être obligatoirement renseignées ou si elles sont
          facultatives. Les données identifiées par un astérisque * sont
          obligatoires.
          <br />
          <br />
          <span style={{ color: "red", fontWeight: "bold" }}>
            Comment pourrions-nous partager vos données personnelles ?
          </span>
          <br />
          CASH Assurances collecte vos données personnelles pour ne les utiliser
          qu’à des finalités explicites et préalablement déterminées et elles ne
          peuvent, en aucun cas, être vendues ou utilisées à des buts lucratifs.
          Ces données peuvent éventuellement être partagées, en partie ou en
          intégralité, dans le cadre de la gestion des contrats d’assurance,
          dans le strict respect des dispositions réglementaires. Elles peuvent
          ainsi être communiquées ou partagées avec :
          <ul>
            <li>
              Les autorités gouvernementales compétentes conformément aux
              exigences légales et réglementaires ;{" "}
            </li>
            <li>
              Le personnel de CASH Assurances en charge de la gestion des
              contrats, de la relation commerciale, de la gestion de la
              ressource humaine, des services informatiques et digitaux, du
              marketing et de la communication.{" "}
            </li>
            <li>
              Les sous-traitants, partenaires, prestataires et tiers impliqués
              dans la gestion des contrats d'assurance ;
            </li>
          </ul>
          <span style={{ color: "red", fontWeight: "bold" }}>
            Comment nous garantissons la sécurité de vos données à caractère
            personnel ?
          </span>
          <br />
          CASH Assurances ne traite qu’avec des sous-traitants, partenaires et
          prestataires de service respectueux de la réglementation en matière de
          protection des « données à caractère personnel ». CASH Assurances et
          chacun de ses sous-traitants, partenaires et prestataires de service
          veillent sur la mise en œuvre des mesures techniques et
          organisationnelles appropriées pour garantir la sécurité de vos
          données personnelles, leur confidentialité et leur protection contre
          le vol, la publication accidentelle, la destruction ou toute autre
          utilisation inappropriée. Vos données personnelles collectées ne
          peuvent faire l’objet d’un transfert hors du territoire national que
          sur autorisation préalable de l’Autorité Nationale de la Protection
          des Données à caractère Personnel (ANPDP).
          <br />
          <br />
          <span style={{ color: "red", fontWeight: "bold" }}>
            Quelle est la durée de conservation de vos données personnelles ?
          </span>
          <br />
          Vos données personnelles, recueillies et traitées, sont conservées
          pour une durée n’excédant pas celle nécessaire aux finalités pour
          lesquelles elles ont été collectées.
          <br />
          <br />
          <span style={{ color: "red", fontWeight: "bold" }}>
            Comment exercer vos droits sur vos données personnelles ?{" "}
          </span>
          <br />
          La loi n°18-07 du 10 juin 2018 garantit vos droits en matière de
          protection de vos données personnelles. Vous pouvez consulter le site
          de l’ANPDP (Autorité Nationale de Protection des Données à caractère
          Personnel) à l’adresse <a href="https://www.anpdp.dz/" target="_blank"> https://www.anpdp.dz/ </a>pour de plus amples
          renseignements. Vous avez le droit d'accéder aux données vous
          concernant et de demander de les rectifier. Vous pouvez également
          exercer votre droit d’opposition à l'utilisation de vos données ou
          demander la limitation de leur traitement. Vous pouvez faire valoir
          vos droits auprès du responsable de traitement des données au niveau
          de CASH Assurances,
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Par courrier à l'adresse postale
              </span>{" "}
              :135, Boulevard des Martyrs. El Madania. Alger
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Par courriel à l'adresse :
              </span>{" "}
              dpo@cash-assurances.dz ;
            </li>
          </ul>
        </p>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div
        className="modal show"
        style={{ display: "block", position: "center",  }}
      >
        <Modal show={show} size="lg" onExit={()=>{setShowFirstTime(false)}}  onHide={handleClose}>
          <Modal.Header>
            <Modal.Title style={{ color: "red", fontSize: 18 ,fontWeight: "bold"}}>
              Confidentialité et traitement des données à caractère personnel
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ fontSize: 12 ,height:showMore? 500:250}} className="container">
            <Scrollbars onScroll={handleScroll}>
            
                <div>
                  <p>
                    Chers visiteurs,<br/>
                     Nous vous remercions pour votre visite et
                    tenons à vous assurer que le respect de votre vie privée et
                    la protection de vos données à caractère personnel sont
                    d'une importance capitale pour nous.<br/>
                     En accédant à notre
                    site web et nos différentes plateformes officielles sur les
                    réseaux sociaux, vous confirmez votre approbation des règles
                    d’utilisation de vos « données à caractère personnel »,
                    selon la réglementation en vigueur.<br/> Conformément à la loi N°
                    18-07 du 10 juin 2018, relative à la protection des
                    personnes physiques dans le traitement « des données à
                    caractère personnel », CASH Assurances s’engage à traiter et
                    à sécuriser vos données personnelles et vous assure de leur
                    stricte utilisation aux fins explicites et préalablement
                    déterminées pour lesquelles elles ont été collectées. .
                  </p>
                  {showMore ? (
                showMoreRender()
              ) : (<></>)}
                 <a style={{color:'red' , textDecoration:'underline',cursor:'pointer'}} onClick={()=>setShowMore(!showMore)} target="_blank"> {!showMore ? "En savoir plus" : "Moins de details"} </a>
            
    
                </div>
              
            </Scrollbars>
          </Modal.Body>

          <Modal.Footer>
         
            <Button variant="primary" onClick={handleClose}>
              Je comprends
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default App;
