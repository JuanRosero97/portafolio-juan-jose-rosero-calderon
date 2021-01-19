import {React,useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import './contact.css'
import { Formik } from "formik";
import * as Yup from "yup";

const FormUi = () => {
const [response, setResponse] = useState('not');

const handleSubmit = async (values, { resetForm }) => {
    const { email, message, name } = values;
    var body = { name, email, message  };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    };

    const url = "https://formspree.io/f/mdopbkvo";
    try {
      const res = await fetch(url, options)
      res.ok ? clear(resetForm, 'ok') : clear(resetForm, 'dont')
    } catch (error) {
      console.error(error);
    }
  }

  const clear = (resetForm, text) => {
    text === 'ok' ? resetForm() : console.log("Something went wrong. Please try again.")
    setResponse(text)
    window.setTimeout(() => {
        setResponse(' ') 
    }, 5000) 
  }
    return (
        <Formik
            initialValues={{ email: "", message: "", name: ""  }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required("Obligatorio"),
                message: Yup.string().required("Obligatorio"),
                name: Yup.string().required("Obligatorio")
            })}>
            {({
                values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit
            }) => (
        <Form onSubmit={handleSubmit} className="contactForm">
            <div className="contactFilds">
                <Form.Row>
                    <Form.Group as={Col} >            
                        <Form.Label>Nombre <span className="requerid">*</span></Form.Label>
                        <Form.Control variant="outlined"
                            margin="normal"
                            required
                            id="name"
                            value={values.name}
                            label="nombre"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name && touched.name && "error"}
                        />
                        {errors.name && touched.name && (
                            <div className="input-feedback">Campo vacío o inválido</div>
                        )}
                    </Form.Group>

                    <Form.Group as={Col} >            
                        <Form.Label>Email <span className="requerid">*</span></Form.Label>
                        <Form.Control variant="outlined"
                            margin="normal"
                            required
                            id="email"
                            value={values.email}
                            label="Correo electrónico"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email && "error"}
                        />
                        {errors.email && touched.email && (
                            <div className="input-feedback">Campo vacío o inválido</div>
                        )}
                    </Form.Group>

                </Form.Row>

                <Form.Group >
                    <Form.Label>Mensaje <span className="requerid">*</span></Form.Label>
                    <Form.Control variant="outlined"
                        margin="normal"
                        required
                        name="message"
                        value={values.message}
                        label="Mensaje"
                        type="text"
                        id="message"
                        onBlur={handleBlur}
                        className={errors.message && touched.message && "error","textarea"}
                        onChange={handleChange}
                        as="textarea" rows={3} maxLength="600"
                    />
                        {errors.message && touched.message && (
                            <div className="input-feedback">{errors.message}</div>
                        )}
                </Form.Group>
                <Form.Group>
                    <Form.Check
                    required
                    name="terms"
                    label="Acepta términos y condiciones"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    className="checkItem"
                    />
                </Form.Group>
            </div>
            <Button variant="primary" type="submit" className= "buttonContact" disabled={isSubmitting}>
                Enviar
            </Button>
            {
                response === 'ok' ? 
                    <div className="textSendOk"><i class="fa fa-check"><span>Formulario enviado con éxito.</span></i></div>
                : response === 'dont' ?
                    <div className="textSendError">
                        <i class="fa fa-times">
                            <span>Corríja el email o intente de nuevo más tarde.
                            </span>
                        </i>
                    </div> : ""
            }
        </Form>)}
        </Formik>
    )
}

export default FormUi
