import { Fragment, React, useState } from "react";
import {
  CodacyBadge,
  ContentsHeader,
  OwnerDropdown,
} from "../../new-repository";
import {
  BookIcon,
  Button,
  Checkbox,
  HorizontalRule,
  Input,
  LockIcon,
  RadioButton,
} from "../../ui";
import "./NewRepositoryPage.css";

const RepositoryPrivacyEunm = Object.freeze({
  Public: "Public",
  Private: "Private",
});

const NewRepositoryPage = () => {
  // HACK to prevent multiple radio buttons from being selected.
  const [selectedRepositoryPrivacy, setSelectedRepositoryPrivacy] = useState(
    RepositoryPrivacyEunm.Public
  );

  const changeRepositoryPrivacy = (newRepositoryPrivacy) => {
    if (selectedRepositoryPrivacy !== newRepositoryPrivacy) {
      setSelectedRepositoryPrivacy(newRepositoryPrivacy);
    }
  };

  return (
    <div>
      <div className="center-holder">
        <ContentsHeader />

        <div className="owner-and-repository-name-group">
          <OwnerDropdown
            ownerName="altenull"
            ownerImgSrc="https://avatars0.githubusercontent.com/u/26947777?s=60&amp;v=4"
          />
          <span className="slash-divider">/</span>
          <Input id={"repository-name-input"} label="Repository name *" />
        </div>

        <p className="vertical-margin-8">
          Great repository names are short and memorable. Need inspiration? How
          about{" "}
          <strong className="repository-name-suggestion">
            miniature-garbanzo
          </strong>
          ?
        </p>

        <Input
          id="repository-description-input"
          label={
            <Fragment>
              Description <span className="sub-label">(optional)</span>
            </Fragment>
          }
        />

        <HorizontalRule />

        <RadioButton
          checked={RepositoryPrivacyEunm.Public === selectedRepositoryPrivacy}
          label={RepositoryPrivacyEunm.Public}
          description="Anyone on the internet can see this repository. You choose who can commit."
          icon={<BookIcon color="#959da5" />}
          onClick={() => changeRepositoryPrivacy(RepositoryPrivacyEunm.Public)}
        />
        <RadioButton
          checked={RepositoryPrivacyEunm.Private === selectedRepositoryPrivacy}
          label={RepositoryPrivacyEunm.Private}
          description="You choose who can see and commit to this repository."
          icon={<LockIcon color="#735c0f80" />}
          onClick={() => changeRepositoryPrivacy(RepositoryPrivacyEunm.Private)}
        />

        <HorizontalRule />

        <h5>Initialize this repository with:</h5>
        <p className="margin-bottom-10 text-gray">
          Skip this step if you’re importing an existing repository.
        </p>

        <Checkbox
          label="Add a README file"
          description={
            <Fragment>
              This is where you can write a long description for your project.{" "}
              <a href="/">Learn more.</a>
            </Fragment>
          }
        />
        <Checkbox
          label="Add .gitignore"
          description={
            <Fragment>
              Choose which files not to track from a list of templates.{" "}
              <a href="/">Learn more.</a>
            </Fragment>
          }
        />
        <Checkbox
          label="Choose a license"
          description={
            <Fragment>
              A license tells others what they can and can't do with your code.{" "}
              <a href="/">Learn more.</a>
            </Fragment>
          }
        />

        <h5>Grant your Marketplace apps access to this repository</h5>
        <p className="sub-description">
          You are subscribed to 1 Marketplace app
        </p>

        <Checkbox
          label="Codacy"
          description="Automated code reviews to help developers ship better software, faster"
          icon={<CodacyBadge />}
        />

        <HorizontalRule />

        <Button kind="primary" disabled>
          Create repository
        </Button>
      </div>
    </div>
  );
};

export default NewRepositoryPage;
