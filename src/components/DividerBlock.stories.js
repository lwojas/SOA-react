// YourComponent.stories.js|jsx

import DividerBlock from "./DividerBlock";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Line divider",
  component: DividerBlock,
  decorators: [
    (Story) => (
      <div style={{ marginTop: "3em", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <DividerBlock {...args} />;

export const Default = {
  args: {
    src: "assets/img_line_bottom.png",
    cssClass: "img_bottom_line",
    //π The args you need here will depend on your component
  },
};
