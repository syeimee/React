import {useState,useEffect} from "react";
const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(()=>{
    console.log('##### USE EFFECT IS CALLED ####');
    window.setInterval(()=>{
      setTime(prev => prev+1 );
    },1000);
  },[])

  //1000秒ごとにsetTimeが実行されるが、何回もsetIntervalが呼ばれるので挙動がおかしくなる
  // window.setInterval(()=>{
  //   console.log('##### USE EFFECT IS CALLED ####');
  //   setTime(prev => prev+1 );
  // },1000);
  return (
  <h3>
    <time>{time}</time>
    <span>秒経過</span>
  </h3>
  )
};

export default Example;
