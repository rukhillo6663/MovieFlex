import React from 'react'

function Header({inputValue, handleInputValue, handleSearchValue}) {
  return (
    <div className='header-main'>
        <div className='logo'>
          <h1 >MovieFlex</h1>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search here...' value={inputValue} onChange={handleInputValue}/>
            <button onClick={handleSearchValue}>SEARCH</button>
            <div className='gender-wrapper'>
          <label>by ID
           <input type='radio'name='gender'/*onChange={()=>this.setState({gender:'male'})} checked={this.state.gender==='male'}*/ />
        </label>
        <label>by Title
           <input type='radio'name='gender' /*onChange={()=>  this.setState({gender:'female'})} checked={this.state.gender==='female'}*//>
        </label>
          </div>
        </div>
        <div className='buttons'>
          <p>UNLIMITED TV SHOWS & MOVIES</p>
          <button>JOIN NOW</button>
          <button>SIGN IN</button>

        </div>
    </div>
  )
}

export default Header