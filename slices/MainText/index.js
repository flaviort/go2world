/**
 * @typedef {import("@prismicio/client").Content.MainTextSlice} MainTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainTextSlice>} MainTextProps
 * @param {MainTextProps}
 */
const MainText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for main_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default MainText;
