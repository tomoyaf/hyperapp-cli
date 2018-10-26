module.exports = (name: string) => `
  import { h, app } from "hyperapp";
  import picostyle from "picostyle";

  const style = picostyle(h);

  export default style("div")({
});
`
