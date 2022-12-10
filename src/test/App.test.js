import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../Routes/Home'
import { ContextProvider } from '../Components/utils/global.context'
import App from '../App'
import Contact from '../Routes/Contact'
import Favs from '../Routes/Favs'
import Detail from '../Routes/Detail'

describe("Render rutas", () => {

    it('Render Home', () => {
        render(
            <ContextProvider>
                <Home/>
            </ContextProvider>
        );
        const title = screen.getByText("Home");
        expect(title).toBeInTheDocument();
    })
    
    
    it('Render Contact', () => {
        render(
            <ContextProvider>
                <Contact/>
            </ContextProvider>
        );
        const title = screen.getByText("Want to know more?");
        expect(title).toBeInTheDocument();
    })
    
    it('Render Favs', () => {
        render(
            <ContextProvider>
                <Favs/>
            </ContextProvider>
        );
        const title = screen.getByText("Dentists Favs");
        expect(title).toBeInTheDocument();
    })
    
    it('Render Detail', () => {
        render(
            <ContextProvider>
                <Detail/>
            </ContextProvider>
        );
        const title = screen.getByText("Detail Dentist");
        expect(title).toBeInTheDocument();
    })


})

describe("Navegacion NavBar desde home", () => {

    beforeEach(() => {
        render(
            <ContextProvider>
                <App/>
            </ContextProvider>
        );
    })

    it("Ir a favs", () => {

        const linkFavs = screen.getByRole('link', {
            name: /favs/i
        })

        fireEvent.click(linkFavs);

        expect(window.location.href).toBe('http://localhost/favs');

    })

    it("Ir a contact", () => {

        const linkContact = screen.getByRole('link', {
            name: /contact/i
        })

        fireEvent.click(linkContact);

        expect(window.location.href).toBe("http://localhost/contact")

    })

})

test('Btn DarkMode', () => {

    render(
        <ContextProvider>
            <App/>
        </ContextProvider>
    );

    const btnDarkmode = screen.getByRole('button', {
        name: /🌙/i
    });
    
    expect(btnDarkmode).toBeInTheDocument();

    fireEvent.click(btnDarkmode);

    const btnLightMode = screen.getByRole('button', {
        name: /☀/i
    });

    expect(btnLightMode).toBeInTheDocument();

})

test('btn volver arriba', () => {
    render(
        <ContextProvider>
            <App/>
        </ContextProvider>
    );

    const btnVolverArriba = screen.getByRole('button', {
        name: /Volver Arriba/i
    })
    
    fireEvent.click(btnVolverArriba);

    expect(window.scrollY).toBe(0);
})

describe('Signup', () => {

    beforeEach(() => {
        render(
            <ContextProvider>
                <Contact/>
            </ContextProvider>
        )
    })
    
    it('Submit correcto Form', async () => {
    
        const inputName = screen.getByPlaceholderText(/nombre completo/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        const btnSend = screen.getByRole('button', {
            name: /send/i
        })
    
        fireEvent.change(inputName, {
            target: { value: "Bautista" }
        })    
    
        fireEvent.change(inputEmail, {
            target: { value: "bauti@gmail.com" }
        })  
        
        fireEvent.click(btnSend);
    
        const mensaje = await screen.findByText(/Gracias Bautista, te contactaremos cuanto antes vía mail/i);
    
        expect(mensaje).toBeInTheDocument();
    
    })
    
    it('Submit name > 6', async () => {

        const inputName = screen.getByPlaceholderText(/nombre completo/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        const btnSend = screen.getByRole('button', {
            name: /send/i
        })
    
        fireEvent.change(inputName, {
            target: { value: "Bauti" }
        })    
    
        fireEvent.change(inputEmail, {
            target: { value: "bauti@gmail.com" }
        })  
        
        fireEvent.click(btnSend);
    
        const mensaje = await screen.findByText(/Por favor verifique su información nuevamente/i);
    
        expect(mensaje).toBeInTheDocument();
    
    })
    
    it('Submit formato email incorrecto', async () => {

        const inputName = screen.getByPlaceholderText(/nombre completo/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        const btnSend = screen.getByRole('button', {
            name: /send/i
        })
    
        fireEvent.change(inputName, {
            target: { value: "Bautista" }
        })    
    
        fireEvent.change(inputEmail, {
            target: { value: "bautigmail.com" }
        })  
        
        fireEvent.click(btnSend);
    
        const mensaje = await screen.findByText(/Por favor verifique su información nuevamente/i);
    
        expect(mensaje).toBeInTheDocument();
    
    })

})