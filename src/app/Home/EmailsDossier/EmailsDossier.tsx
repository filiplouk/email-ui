import { Email } from "@/@services/Email.entity";
import classes from "./EmailsDossier.module.scss";
import Badge from "@/@components/Badge/Badge";

type EmailsDossierProps = {
  emails: Email[];
};

const EmailDossier = ({ emails }: EmailsDossierProps) => {
  return (
    <div className={`${classes.emailsList} d-flex flex-wrap`}>
      {emails.map((email, index) => (
        <div key={index} className={`${classes.email}`}>
          <div className={`${classes.emailCore} d-flex flex-column`}>
            <h2 className={`${classes.name} text-center`}>{email.name}</h2>
            <div className={`${classes.infoBlock} d-flex flex-column`}>
              <h4 className={`${classes.blockName}`}>General</h4>
              <div className={`${classes.blockList} d-flex flex-column`}>
                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Description</p>
                  <p className={`${classes.value}`}>{email.description}</p>
                </div>
                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Created At</p>
                  <p className={`${classes.value}`}>
                    {new Date(email.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Size</p>
                  <p className={`${classes.value}`}>{email.size} bytes</p>
                </div>
                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Finalized</p>
                  <p
                    className={`${classes.value} ${
                      email.isFinalized ? "font-success" : "font-error"
                    }`}
                  >
                    {email.isFinalized ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>

            <div className={`${classes.infoBlock} d-flex flex-column`}>
              <h4 className={`${classes.blockName}`}>Creator</h4>
              <p>
                {email.creator.firstName} {email.creator.lastName} (
                {email.creator.id})
              </p>
            </div>
            <div className={`${classes.infoBlock} d-flex flex-column`}>
              <h4 className={`${classes.blockName}`}>Search Attributes</h4>
              <div className={`${classes.blockList} d-flex flex-column`}>
                {email.searchAttributes.map((attr, i) => (
                  <div key={i} className={`${classes.listRow} d-flex`}>
                    <p className={`${classes.key}`}>{attr.name}</p>
                    <p className={`${classes.value}`}>{attr.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${classes.infoBlock} d-flex flex-column`}>
              <h4 className={`${classes.blockName}`}>Tags</h4>
              <div className={`${classes.blockTags} d-flex flex-wrap`}>
                {email.tags.map((tag, i) => (
                  <Badge key={i}>{tag}</Badge>
                ))}
              </div>
            </div>

            <div className={`${classes.infoBlock} d-flex flex-column`}>
              <h4 className={`${classes.blockName}`}>Blockchain Info</h4>
              <div
                className={`${classes.blockList} ${classes.vertical} d-flex flex-column`}
              >
                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Status:</p>
                  <p className={`${classes.value}`}>
                    {email.timestamps.USD.status}
                  </p>
                </div>
                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Root Hash:</p>
                  <p className={`${classes.value}`}>
                    {email.timestamps.USD.rootHash}
                  </p>
                </div>
                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Seed ID:</p>
                  <p className={`${classes.value}`}>
                    {email.timestamps.USD.seedId}
                  </p>
                </div>

                <div className={`${classes.listRow} d-flex`}>
                  <p className={`${classes.key}`}>Transaction:</p>
                  <p className={`${classes.value}`}>
                    {email.timestamps.USD.transaction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailDossier;
