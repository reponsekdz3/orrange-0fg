import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Twandikire</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6">
                    Mufite ibibazo cyangwa mukeneye ubufasha ku itike mwafashe? Itsinda ryacu ry'abakozi rihari amasaha 24/7 kubafasha.
                </p>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Email:</h3>
                        <a href="mailto:support@orangetravel.rw" className="text-orange-600 hover:underline">support@orangetravel.rw</a>
                    </div>
                    <div>
                        <h3 className="font-semibold">Telefone:</h3>
                        <p>+250 788 000 111</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Aderesi:</h3>
                        <p>KN 1 Ave, Umuhanda w'Ingendo, Kigali, Rwanda</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;