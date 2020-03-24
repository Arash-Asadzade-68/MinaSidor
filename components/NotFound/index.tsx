import Styles from './styles.scss';
import { Button } from 'antd';
import cs from 'classnames';
import Router from 'next/router'



const NotFound = () => (
    <div className={Styles.mainForm}>
        <div className={Styles.formHeader}>
            <div className={Styles.formCircleIcon}>
                <i className="fa fa-exclamation-triangle"></i>
            </div>
            <span>Hoppsan, något blev fel!!</span>
        </div>

        <div className={Styles.description}>

            Vi arbetar med att försöka lösa detta så fort som möjligt!<br />
                    Under tiden, prova gärna en gång till eller kontakta oss direkt så hjälper vi er vidare!<br />
            <br />Telefon 010 129 29 20<br />
                    Har du frågor eller funderingar gällande din ansökan kontakta gärna våra finanskonsulter på denna epostadress:<br />
                    Epost:<a href="mailto:contact@ponture.com">contact@ponture.com</a>
            <br />
            <strong>Tack så mycket för ert tålamod!</strong>

        </div>
            <a className={Styles.Submit} href='/'>
                <Button className={cs(Styles.largBtn, Styles.warning)}>Försök igen</Button>
            </a>
    

    </div>
)


export default NotFound;
