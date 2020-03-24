import Styles from './styles.scss';
import { Button } from 'antd';
import cs from 'classnames';





const LastStep = () => (
    <div className={Styles.mainForm}>
        <div className={Styles.formHeader}>
            <div className={Styles.formCircleIcon}>
                <i className="fa fa-check"></i>
            </div>
            <span>Inskickat!</span>
        </div>

        <div className={Styles.description}>

            Tack för din ansökan!<br />
                    Vi kommer nu att påbörja processen med att hitta låneofferter till er. Du kommer att få epostmeddelanden från oss om din ansökan, vänligen titta i din inkorg.<br />
            <br />Fortsätt till Mina Sidor för att se din ansökan och låneerbjudanden<br />
                    Har du frågor eller funderingar gällande din ansökan kontakta gärna våra finanskonsulter på denna epostadress:<br />
            <a href="mailto:contact@ponture.com">contact@ponture.com</a><span>&nbsp;eller ring oss på&nbsp;</span>Telefon: 010&nbsp;129 29 20<br />
            <br />
            <div>För att hantera ditt ärende sparar vi din information, data och de uppgifter du lämnar till oss och kan komma att delas med våra finansiella partners enligt vår integritetspolicy och Finansinspektionens regler.<a href=" https://www.ponture.com/eula/">Läs mer om Ponture:s användarvillkor...</a></div>

        </div>
            <a className={Styles.Submit} href='https://app-lpanel2.herokuapp.com/app/userlogin/agent'>
                <Button className={cs(Styles.largBtn, Styles.warning)} >Mina Sidor</Button>
            </a>
    </div>
)

export default LastStep
