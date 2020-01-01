import React from 'react'
import './MainScreenInfo.css'

const mainScreenInfo = props => (
    <div className="card-container">
        <div className="card-content">
            <center><p>يستطيع ولي الامر ان يتطلع علي درجات ابنه في مختلف الامتحانات ومختلف المواد ويستطيع التواصل مع اساتذته عند الحاجة الي ذلك</p></center>
            <button className="card-button">انشاء حساب كولي امر</button>
        </div>
        <div className="card-content">
            <center><p>يستطيع المدرس ان يضع الامتحانات بالاجابات الخاصة بها وسوف يتم تصحيح اجابات الطلاب تلقائيا ويستطيع المدرس فيما بعد مراجعة درجات طلابه</p></center>
            <button className="card-button">انشاء حساب كمدرس</button>
        </div>
        <div className="card-content">
            <center><p>يستطيع الطالب ان يحل الامتحانات المتاحة بواسطة اساتذته الذين يختارهم بنفسه ويستطيع الحصول علي نتيجته في الامتحان مباشرة</p></center>
            <button className="card-button">انشاء حساب كطالب</button>
        </div>
    </div>
)

export default mainScreenInfo