const loadScript = (
  src /*ten file*/,
  callback /*ham goi lai sau khi tai xong */
) => {
  const script = document.createElement("script"); //<script/>
  script.src = src; // <script src="script.js"/>

  //sau khi tai xong(1ms,10ms,..)

  script.onload = () => callback(script);

  //them vao <head/>
  document.head.append(script); //luc nay trinh duyet moi bat dau tai file script
};

loadScript("other.js", (script) => {
  console.log(sum(1, 2)); //3
});
