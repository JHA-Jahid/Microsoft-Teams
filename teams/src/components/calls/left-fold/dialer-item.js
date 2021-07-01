import React from 'react';
import "./dialer-item.css";
function DialerItem({item}) {
    return (
        <div className="dialer-item">
            <img src={item.avatar} alt="avatar" className="item-avatar" />
        </div>
    )
}

export default DialerItem
