import { React } from "react";
import { ContentsHeader, OwnerDropdown } from "../../new-repository";
import { Button, Checkbox, HorizontalRule, Input, RadioButton } from "../../ui";
import "./NewRepositoryPage.css";

const NewRepositoryPage = () => {
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
          label="Description (optional)"
        />

        <HorizontalRule />

        <RadioButton
          label="Public"
          description="Anyone on the internet can see this repository. You choose who can commit."
        />
        <RadioButton
          label="Private"
          description="You choose who can see and commit to this repository."
        />

        <HorizontalRule />

        <h5>Initialize this repository with:</h5>
        <p className="margin-bottom-10 text-gray">
          Skip this step if you’re importing an existing repository.
        </p>

        <Checkbox
          label="Add a README file"
          description="This is where you can write a long description for your project. Learn more."
        />
        <Checkbox
          label="Add .gitignore"
          description="Choose which files not to track from a list of templates. Learn more."
        />
        <Checkbox
          label="Choose a license"
          description="A license tells others what they can and can't do with your code. Learn more."
        />

        <h5>Grant your Marketplace apps access to this repository</h5>
        <p>You are subscribed to 1 Marketplace app</p>

        <Checkbox
          label="Codacy"
          description="Automated code reviews to help developers ship better software, faster"
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
