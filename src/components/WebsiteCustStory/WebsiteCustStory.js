import React, { Component } from 'react';
import { Link } from "react-router";
import {validateEmail, validatePassword, register, PASSWORD_MAX_LENGTH} from 'services/FormUtils';
import { Animated } from "react-animated-css";
import { Alert, HelpBlock } from 'react-bootstrap';
import { store } from 'index.js';
import { toast, style } from 'react-toastify';
import './WebsiteDemoPage.scss';
import $ from 'jquery';


class WebsiteCustStory extends Component {
    constructor(){
        super();
        this.state ={
            customerStories : []
        }
    }

    render() {



        return {

            

        };
    }
}