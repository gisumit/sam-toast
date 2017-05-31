/*
 * License
 *
 * The MIT License (MIT) Copyright (c) 2016 Sumit Ingole
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the Software), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject
 * to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
*/
'use strict';

class SamToast extends HTMLElement {

    static get observedAttributes () {
        return ['time'];
    }

    constructor () {
        super();
        // make DOM here
        this._elapseTime = 2000;
        this._styles = {
                "z-index": 10000,
                "box-sizing": "border-box",
                "font-size": "20px",
                "font-family": "roboto",
                "padding": "14px 56px 14px 28px",
                "background-color": "#607D8B",
                "display": "inline-block",
                "color": "white",
                "border-radius": "3px",
                "box-shadow": "0 2px 2px rgba(0,0,0,0.6), 0 3px 4px rgba(0,0,0,0.03)",
                "position": "fixed",
                "bottom": "2.5rem",
                "left": "2.5rem",
                "will-change": "opacity",
                "transition": "opacity 300ms ease-in",
                "opacity": 1
        };
        Object.assign(this.style, this._styles);
    }

    connectedCallback () {
        // attached DOM here
        setTimeout( () => {
            this.style.opacity = "0";
            console.log(`${this._elapseTime/ 1000}s Elapsed`);
        }, this._elapseTime);
        
        // check for time works
        console.log(`${this._elapseTime/ 1000}s to vanish`);
       
    } 

    attributeChangedCallback (name, oldvalue, newvalue) {
        this._elapseTime = newvalue;
    }   
}

customElements.define('sam-toast', SamToast);
