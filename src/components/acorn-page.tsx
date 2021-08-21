import React, {useState, useEffect} from "react";
import Button from "./button";
import Display from "./display";
import _ from 'lodash';

const AcornPage = () => {
  const [counter, setCounter] = useState(0);
  const [acorns, setAcorns] = useState<any[]>([]);

  useEffect(() => {
    let tempAcorns: JSX.Element[] = [];
    _.times(counter, () => {
      tempAcorns.push(<span>🌰</span>)
    });
    setAcorns(tempAcorns);
  }, [counter]) 

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    if (counter === 0) {
      return;
    } 
    setCounter(counter - 1);
  }
  
  return (
    <>
      <Button toExecute={increment} str='Buy one'/>
      <Display >
        <div className='belso'>
          {acorns}
        </div>
      </Display>
      <Button toExecute={decrement} str='Eat one'/>
    </>
  );
}

export default AcornPage;