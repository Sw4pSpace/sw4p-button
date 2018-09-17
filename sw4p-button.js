'use strict';
import {LitElement, html} from '@polymer/lit-element';

class Sw4pButton extends LitElement {

    static get properties() {
        return {
            size: { type: String },
            active: { type: Boolean, value: false },
            disabled: { type: Boolean, value: false },
            block: { type: Boolean, value: false },
            intent: { type: String },
            clicked: { type: Boolean, value: false }
        };
    }

    constructor() {
        super();
        // TODO: Remove this when we get a replacement for paper-ripple
        this.addEventListener('click', async (e) => {
            this.setAttribute('clicked', 'true');
            await this.updateComplete;
        });
        this.addEventListener('mouseout', async (e) => {
            this.removeAttribute('clicked');
            await this.updateComplete;
        });
    }



    render() {
        return html`
          <style is="custom-style">

            :host {
                display: inline-block;
                position: relative;
                box-sizing: border-box;
                min-width: 3em;
                margin: 0 0.29em;
                font-family: 'Doppio One', 'Roboto', sans-serif;
                font-weight: 600;
                font-size: 16px;
                letter-spacing: 0.45px;
                padding: 10px 16px;
                line-height: 1;
                outline-width: 0;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;
                cursor: pointer;
                z-index: 0;
                opacity: 1;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                border-radius: 3px;
                background-color: var(--sw4p-button-background-color, transparent);
                color: var(--sw4p-button-text-color, black);
                transition: background-color 0.4s ease-in-out, box-shadow 0.2s ease-in-out;
            }

            :host span {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }

            :host([disabled]) {
                opacity: 0.6;
                cursor: auto;
                pointer-events: none;
            }

            :host([block]) {
                display: block;
            }

            :host([intent="primary"]) {
                background-color: var(--color-primary, #616161);
                color: var(--color-primary-text, #ffffff);
            }

            :host([intent="secondary"]) {
                background-color: var(--color-secondary, #f57c00);
                color: var(--color-secondary-text, #000000);
            }

            :host([intent="error"]) {
                background-color: var(--color-error, #e53935);
                color: var(--color-error-text, #ffffff);
            }

            :host([intent="warning"]) {
                background-color: var(--color-warning, #ffee58);
                color: var(--color-warning-text, #000000);
            }

            :host([intent="success"]) {
                background-color: var(--color-success, #9ccc65);
                color: var(--color-success-text, #ffffff);
            }

            :host([size="small"]) {
                padding: 6px 12px;
                font-size: 14px;
            }

            :host([size="large"]) {
                padding: 14px 20px;
                font-size: 18px;
            }
            
            :host([clicked]) {
                background-color: rgba(0, 0, 0, 0.5);
            }

        </style>

        <span><slot></slot></span>
        `;
    }

}
customElements.define('sw4p-button', Sw4pButton);