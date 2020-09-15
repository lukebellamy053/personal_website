import React from 'react'
import OctaviaArticle from "components/Projects/Octavia/OctaviaArticle";

const items = [
    {
        id: 'octavia',
        img: require('assets/img/projects/oct/bg.jpg'),
        icon: require('assets/img/projects/oct/icon.png'),
        text: 'The Online Office',
        content: (
            <p>The Online Office is my latest project that I'm working on alongside a business partner. The Online Office is a contract
                dispute management platform that helps organise and drive down costs in the mediation process. It also allows users to get legal assistance via a question and answer system</p>),
        article: (<OctaviaArticle/>)
    },
    {
        id: 'micro',
        img: require('assets/img/projects/micro/bg.jpg'),
        icon: require('assets/img/projects/micro/logo.png'),
        text: 'Node Express Microservice',
        content: (<p>A lightweight microservice framework built on-top-of ExpressJS that provides some core handles that simplify the process of creating and launching a microservice</p>)
    },
    {
        id: 'tpf',
        img: require('assets/img/projects/tpf/bg.jpg'),
        icon: require('assets/img/projects/tpf/icon.png'),
        text: 'The Physique Factory',
        content: (
            <p>The physique factory was a joint project that lasted the best part of 3 years. The aim of the project was
                to create an online platform that allows coaches to organise and manage athletes training plans and
                progress. The platform could then be used to show off an athletes abilities to sport bodies and to help
                with future training</p>)
    },
    {
        id: 'tpf-mob',
        img: require('assets/img/projects/tpf/mobile_bg.jpg'),
        icon: require('assets/img/projects/tpf/icon.png'),
        text: 'The Physique Factory Mobile',
        content: (
            <p>This project was to create a mobile application for The Physique Factory that would work alongside the
                online web application.</p>)
    },
    {
        id: 'anna',
        img: require('assets/img/projects/anna/bg.jpg'),
        icon: require('assets/img/projects/anna/icon.png'),
        text: 'Annasisstant',
        content: (
            <p>Annasisstant was one of my earliest Android projects and was created as a way to develop my understanding
                of how to interact with Android devices. I created a simple mobile assistant that would accept commands
                via voice or text similar to Google Assistant. The assistant was capable of performing commands such as
                looking up definitions, finding pictures, opening navigation and sending texts</p>)
    },
    {
        id: 'rat',
        img: require('assets/img/projects/rat/bg.jpg'),
        icon: require('assets/img/projects/rat/icon.jpg'),
        text: 'Robbins And Thompson',
        content: (
            <p>This project was created with 2 business partners as a way to allow smaller accounting firms to have
                personalised mobile apps for their clients for a low price.</p>)
    },
    {
        id: 'words',
        img: require('assets/img/projects/words/bg.jpg'),
        icon: require('assets/img/projects/words/icon.jpg'),
        text: 'Words 2019',
        content: (
            <p>Words 2019 is a poster website for an event held at Loughborough University. The website was created by
                myself using Angular in a way that would allow non programmers to edit the content of the website</p>)
    },
    {
        id: 'dday',
        img: require('assets/img/projects/dday/bg.jpg'),
        icon: require('assets/img/logo.png'),
        text: 'DDay Game UDK',
        content: (<p>A small Tower Defence FPS game created when I was 14 in the Unreal Development Kit</p>)
    }
];

export default items;