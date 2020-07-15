import React from 'react'
import '../css/contact.css'
class Contact extends React.Component{
    render(){
        return (
            <center>
                <div className="contact-container">
                    <fieldset>
                        <legend><b>Contact Me</b></legend>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    Your Name:
                                </td>
                                <td>
                                    <input placeholder="Enter Your Name.." type="text" id="name"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Your Email:
                                </td>
                                <td>
                                    <input placeholder="Enter Your E-mail" type="text" id="email"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Message:
                                </td>
                                <td>
                                    <textarea placeholder="Enter Message" id="message"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <button>Submit</button>
                    </fieldset>
                </div>
            </center>
        )
    }
}

export default Contact