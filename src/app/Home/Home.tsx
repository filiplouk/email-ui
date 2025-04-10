import emailJSON from "@/@services/emails.json";
import classes from "./Home.module.scss";
import EmailDossier from "./EmailsDossier/EmailsDossier";

const Home = () => {
  const mailData = emailJSON.mails;
  return (
    <div className={`${classes.home} d-flex justify-center`}>
      <div className={`${classes.homeCore}`}>
        <EmailDossier emails={mailData} />
      </div>
    </div>
  );
};

export default Home;
