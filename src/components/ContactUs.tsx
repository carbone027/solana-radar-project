import '../assets/all.css';

interface ContactUsProps {
    title: string;
}

const ContactUs = ({ title }: ContactUsProps) => {
    return (
        <div className='section contact-us' id='CONTACT'>
            <h2>{title}</h2>
            <div className='contact-placeholder'></div> {/* Placeholder para adicionar formulário ou informações de contato no futuro */}
        </div>
    );
}

export default ContactUs;
