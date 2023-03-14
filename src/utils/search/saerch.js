import './searchStyle.css'

const Search =()=>{
    
const changeHandler =(e)=>{
console.log(e.target.value);
}

const submitHandler = (e)=>{
    e.preventDefault()
}

    return(
        <div className="search-component"> 
        <form onSubmit={submitHandler} className="searchForm">
            <input type="text" onChange={changeHandler} placeholder="برند، مدل ، قیمت ...">
            </input>
            <button type="submit" >جست جو</button>
        </form>
        </div>
       
    )
}

export default Search