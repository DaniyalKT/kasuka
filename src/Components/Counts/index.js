import React from "react";
import "./Count.css";

export default function Count() {
  return (
    <div className="count-container">
      <div className="img-section">
        <img src="/counts-img.jpg" alt="" />
      </div>
      <div className="count-section">
        <div className="count-title">
          <h2>شایسته ترین لذت را به هر حال ارائه می دهد</h2>
          <p>
            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من
            به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد
            مقصر است
          </p>
        </div>

        <div className="count-box">
          <div className="counts count-1">
            <h1>
              <img src="/journal-richtext.svg" className="svg-icon" alt="" />
              <span>85</span>
            </h1>
            <p>
              پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف
              می کنند رد می کند و آنها را حقیر می شمارد
            </p>
          </div>
          <div className="counts count-2">
            <h1>
              <img src="/journal-richtext.svg" className="svg-icon" alt="" />
              <span>65</span>
            </h1>
            <p>
              پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف
              می کنند رد می کند و آنها را حقیر می شمارد
            </p>
          </div>
          <div className="counts count-3">
            <h1>
              <img src="/journal-richtext.svg" className="svg-icon" alt="" />
              <span>20</span>
            </h1>
            <p>
              پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف
              می کنند رد می کند و آنها را حقیر می شمارد
            </p>
          </div>
          <div className="counts count-4">
            <h1>
              <img src="/journal-richtext.svg" className="svg-icon" alt="" />
              <span>35</span>
            </h1>
            <p>
              پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف
              می کنند رد می کند و آنها را حقیر می شمارد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
