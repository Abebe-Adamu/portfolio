import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p> Java | Spring | API | Cloud | Hibernate | Agile | Kafka | Pipeline | Container | Database</p>
                                            <p> Iam a software developer  with experience in multiple settings can design and develop programs using the latest and most appropriate technology.  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Developer - Microservices / Frontend Development</h3>
                                        <p> Strong knowledge on Microservice development using Agile methodology. </p>
                                        <p> Expertise in working with various J2EE technologies including Hibernate, MVC, JDBC, Web Services and Maven.  </p>
                                        <p> Good experience in Spring frameworks such as IOC, AOP, and Spring Security. </p>
                                        <p> Good experience in configuring and deploying Application on Tomcat server. </p>
                                        <p> Strong hands on experience with Java Script, Angualar JS and React. </p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-open" />
                                    </span>
                                    <div className="desc">
                                        <h3> Open source software advocate</h3>
                                        <p> Contribute to open source community through platforms like Github. </p>
                                        <p> Explore new technologies and provide MVP/POC's to help team in providing best solutions to software engineering problems</p>
                                        <p> Work with team members to learn new technologies and contribute back to community</p>
                                        <p> Some of my interests in tech stack  Java, Javascript, Database, Spring Framework, AWS, Oracle, Web Application, Container etc. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-cloud-storage" />
                                    </span>
                                    <div className="desc">
                                        <h3>Application Development</h3>
                                        <p> Good understanding of Java 8 features such as lambada expression, functional interface , optional, Stream API and Collection API improvements. </p>
                                        <p> Good working knowledge on Spring modules like, Spring Core, Spring AOP, Spring Cloud, Spring Security, Spring MVC. </p>
                                        <p> Strong understanding of common API technologies such as OAUTH,Spring Boot, and Microservices. </p>
                                        <p> Advocate of Infrastructure as code and CI/CD. </p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}