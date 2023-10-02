import React from 'react'

function Search()
{
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a user' />
            </div>
            <div className="userChat">
                <img src="https://assets.vogue.com/photos/650ca10af4ed2ec9bb242f86/3:4/w_2560%2Cc_limit/1693596089" alt="img" />
                <div className="userChatInfo">
                    <span>Emma</span>
                </div>
            </div>
        </div>
    )
}

export default Search