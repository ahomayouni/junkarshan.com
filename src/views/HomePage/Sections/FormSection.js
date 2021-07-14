import emailjs from "emailjs-com";
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import validator from "validator";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
const StyledFormSection = styled.div`
    h2 {
        color: #ce3b0f;
    }
    h4 {
        color: #3c4858;
    }
`;
export default function FormSection() {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState(``);
    const [warningIsOpen, setWarningIsOpen] = React.useState(false);
    const [warningMessage, setWarningMessage] = React.useState("");
    const [sentIsOpen, setSentIsOpen] = React.useState(false);
    const [emailSent, setEmailSent] = React.useState(false);
    function sendMessage() {
        if (!validator.isEmail(email)) {
            setWarningMessage("Please enter a valid email address!");
            setWarningIsOpen(true);
            return;
        }
        emailjs.send(
            "service_xsig3yl",
            "template_ssdlhas",
            { message: msg, from_name: name, from_email: email, to_name: "Arshan Junk Removal / Bin Rental" },
            "user_uVyFOzVXe6EfPMLzmqfKY"
        );
        setSentIsOpen(true);
        setEmailSent(true);
    }
    const disbaled = name == "" || name == null || msg == "" || msg == null || email == "" || email == null || emailSent;
    return (
        <StyledFormSection className={classes.section}>
            <GridContainer justify="center" style={{ marginLeft: 10, marginRight: 10 }}>
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title} id={"contact-us"}>
                        Contact Us
                    </h2>
                    <h4 className={classes.description}>
                        If you have any questions or requests, or want a free quote for your project, <br />
                        Give us a call at (647) 740 - 7474. Or, you can fill out the form below and we will respond to you quickly.
                    </h4>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Name"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true,
                                        required: true,
                                        onChange: (e) => setName(e.target.value)
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Email"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true,
                                        required: true,
                                        onChange: (e) => setEmail(e.target.value)
                                    }}
                                />
                            </GridItem>
                            <CustomInput
                                labelText="Your Message"
                                id="message"
                                formControlProps={{
                                    fullWidth: true,
                                    required: true,
                                    className: classes.textArea
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5,
                                    onChange: (e) => setMsg(e.target.value)
                                }}
                            />
                            <GridItem xs={12} sm={12} md={4}>
                                <Button
                                    color="primary"
                                    style={{
                                        background: "#ce3b0f",
                                        boxShadow: "0 14px 26px -12px #ce3b0f, 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(156 39 176 / 20%)"
                                    }}
                                    onClick={() => sendMessage()}
                                    disabled={disbaled}>
                                    Send Message
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                    <Snackbar open={warningIsOpen} autoHideDuration={6000} onClose={() => setWarningIsOpen(false)}>
                        <Alert onClose={() => setWarningIsOpen(false)} severity="warning">
                            {warningMessage}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={sentIsOpen} autoHideDuration={6000} onClose={() => setSentIsOpen(false)}>
                        <Alert onClose={() => setSentIsOpen(false)} severity="success">
                            Message Sent Successfully! We will contact you via email shortly.
                        </Alert>
                    </Snackbar>
                </GridItem>
            </GridContainer>
        </StyledFormSection>
    );
}
