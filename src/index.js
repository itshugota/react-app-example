import React from 'react';
import ReactDOM from 'react-dom';
import APIService from './APIService';

class APIServiceElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    ReactDOM.render(<APIService />, mountPoint);
  }
}
customElements.define('api-service', APIServiceElement);
