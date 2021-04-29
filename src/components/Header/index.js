import React, { useRef, useState } from "react";
import _ from "lodash";
import { Button } from "@material-ui/core";


const Header = (props)=> {
  const inputRef = useRef()
  const [keyword,setKeyword] = useState("")
  const handleOnClickInput = (e) => {
    e.preventDefault()
    // this.setState({ keyword: e.target.value });
    setKeyword(inputRef.current.value)
    // this._debounce(e.target.value);
    _debounce(inputRef.current.value);
    console.log(inputRef.current.value);
  };

  const _debounce = _.debounce((value) => {
    props.onSerchYoutube(value);
  }, 200);

  return (
    <form style={{ display:"center" ,marginTop: "20px", textAlign: "center" }}>
      {/* <input  value={this.state.keyword} /> */}
      <input  ref={inputRef}/>

      <Button type="submit" onClick={handleOnClickInput} variant="contained"color="primary">SEARCH</Button>;
    </form>
  );
  
}

export default Header 