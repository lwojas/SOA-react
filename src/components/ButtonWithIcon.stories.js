// YourComponent.stories.js|jsx

import ButtonWithIcon from "./ButtonWithIcon";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button with icon",
  component: ButtonWithIcon,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <ButtonWithIcon {...args} />;

export const Default = {
  args: {
    src: "assets/icon_twitter2.svg",
    label: "Join the community",
    //π The args you need here will depend on your component
  },
};
