// YourComponent.stories.js|jsx

import ImgWrapper from "./ImgWrapper";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Image container",
  component: ImgWrapper,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <ImgWrapper {...args} />;

export const Default = {
  args: {
    src: "assets/img_footer_1.png",
    cssClassDiv: "",
    //π The args you need here will depend on your component
  },
};

export const footer = {
  args: {
    src: "assets/img_footer_1.png",
    cssClassDiv: "img_footer img_footer_left",
    //π The args you need here will depend on your component
  },
};

export const ParallaxBackground = {
  args: {
    src: "assets/img_dream.png",
    cssClassDiv: "img_parallax_block",
    cssClassImg: "display_block margin-center",
    //π The args you need here will depend on your component
  },
};

export const FloatingAnimation = {
  args: {
    cssClassDiv: "lost_animation",
    cssClassImg: "width-100",
    src: "assets/img_lucid_lost.png",
    //π The args you need here will depend on your component
  },
};
