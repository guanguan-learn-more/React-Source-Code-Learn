import * as React from "react";
//if (age === 18) {
//     setAge(age - 1);
//   }

//   React.useMemo(() => {
//     if (age === 17) {
//       setAge(10);
//     }
//   }, [age]);

function HooksDemo() {
  const [name, setName] = React.useState("Guan");
  const [age, setAge] = React.useState(18);
  const [color, setColor] = React.useState("red");

//   React.useEffect(() => {
//     console.log("===> age effect", age);
//     return () => {
//       console.log("销毁");
//     };
//   }, [name]);
//   React.useEffect(() => {
//     console.log("===> age effect", age);
//     return () => {
//       console.log("销毁");
//     };
//   }, [age]);



  //   const handleChange = () => {
  //     setName("~qing");
  //     setName("~chao");
  //   };
  const handleChangeAge = () => {
    setAge(100);
    setAge(200);
    setAge(300);
  };

  return (
    <div>
      Hooks
      <div>This is name:{name} </div>
      <div>This is age:{age} </div>
      <div>My favourite Color is: {color}</div>
      <br />
      <br />
      <br />
      {/* <button onClick={handleChange}>点击改变Name</button> */}
      <button onClick={handleChangeAge}>点击改变Age</button>
    </div>
  );
}

export default HooksDemo;
