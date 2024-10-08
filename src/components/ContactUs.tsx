import '../assets/all.css';

interface ContactUsProps {
    title: string;
}

const ContactUs = ({ title }: ContactUsProps) => {
    return (
        <div className='contact' id='contact.36oracle@gmail.com'>
            <h4>{title}</h4>
            <p>contact.36oracle@gmail.com</p>
        </div>
    );
}

export default ContactUs;
