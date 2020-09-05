import React from 'react';
import './commentItem.css'
import img from '../../../images/image.jpg'
import user  from '../../../images/user3.jpg'

const CommentItem = (props) => {
    return (
        <div>
            <div className="card comments-item">
                <div className="user-img-holder">
                    <img className="user-img" src={user} alt="Card image cap"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">راضی هستم</h5>
                    <p className="card-text">گفتم یه لپ تاپ بخر واسم منم دلم میخاد داشته باشم خیلی یم گرون نمیخام ک فقط بتونم باهاش توی بورس باشم و سهام ها رو تحلیل کنم با نرم افزار دیگه گفتم ۶/۵ ملیون بدم این لپ تاپ ایسوس
                    </p>
                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
