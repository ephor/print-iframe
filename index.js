const printIframe = content => {
  const ifrm = document.createElement("iframe");
  ifrm.setAttribute("id", "printFrame");
  ifrm.setAttribute("name", "printFrame");
  ifrm.style.width = "0px";
  ifrm.style.height = "0px";
  document.body.appendChild(ifrm);
  const printFrame = window.frames["printFrame"];
  printFrame.document.write(content);
  printFrame.document.write(
    "<script>window.onload = () => { window.print(); }</script>"
  );
  printFrame.document.close();
  setTimeout(() => {
    // need to remove print elements on the next tick otherwise print preview doesn't always display styles
    ifrm.remove();
  }, 0);
};

module.exports = printIframe;
